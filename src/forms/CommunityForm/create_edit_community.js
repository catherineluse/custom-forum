import React from "react";
import ModerationLevelDropdown from "./moderation-level";
import DiscussionTags from "./discussion-tags";
import CommunityKeywords from "./community-keywords";
import { API, graphqlOperation } from "aws-amplify";
import { createCommunity, updateCommunity } from "../../graphql/mutations";
import { withFormik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";

// type Community {
//   id: ID
//   url: String
//   name: String!
//   description: String
//   creator: ID
//   created_date: AWSDate
//   rules: [String]
//   locations: [String]
//   hidden: Boolean
//   hidden_date: AWSDate
//   sitewide_reasons_for_being_hidden: [String]
//   keywords: [String]
//   topics: [String]
//   flagged_comments: [Comment]
//   flagged_discussions: [Discussion]
//   moderation_level: Int
//   number_of_users: Int
// }

const removeEmptyStringsFromDTO = payload => {
  // DynamoDB throws an error if you submit empty strings
  let input = {};
  for (let key in payload) {
    if (payload[key] !== "") {
      input[key] = payload[key];
    }
  }
  return input;
};
const turnModerationLevelIntoNumber = formData => {
  const payload = formData;
  payload.moderation_level = payload.moderation_level.value;
  return payload;
};

const levels = [
  { value: 1, label: "Low - Only the sitewide rules apply" },
  { value: 2, label: "Medium - This community is moderated" },
  { value: 3, label: "High - This community has strict rules" },
];

const formikWrapper = withFormik({
  mapPropsToValues: () => ({
    name: "",
    description: "",
    moderation_level: 1,
    tags: [],
    keywords: [],
  }),
  handleSubmit: async (values, { setSubmitting }) => {
    const formData = {
      ...values,
    };
    let input = removeEmptyStringsFromDTO(formData);
    input = turnModerationLevelIntoNumber(input);

    await API.graphql(graphqlOperation(createCommunity, { input }))
      .then(response => {
        console.log("API call succeeded");
        console.log("Response is ", response);
      })
      .catch(e => {
        console.log("API call failed");
        console.log("input was ", input);
        console.log(e);
      });
    setSubmitting(false);
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter a community name."),
    description: Yup.string(),
    moderation_level: Yup.string(),
  }),
});
const CommunityForm = props => {
  // values, setFieldValue, and setFieldTouched are needed for custom fields, not Formik fields
  const { values, setFieldValue, setFieldTouched, isSubmitting } = props;

  return (
    <div className="card shadow">
      <div className="card-body">
        <Form>
          <h1 className="gradient-text">Create a Community</h1>
          <div className="form-group">
            <label htmlFor="name">Community Name</label>
            <Field
              name="name"
              type="text"
              placeholder="Enter community name"
              className="form-control"
            />
            <ErrorMessage component={Error} name="communityNameError" />
          </div>
          <div className="form-group">
            <label htmlFor="communityDescription">Description</label>
            <Field
              component="textarea"
              rows="3"
              type="description"
              name="description"
              placeholder="Why should people join this community?"
              className="form-control"
            />
            <ErrorMessage component={Error} name="communityNameError" />
          </div>
          <div className="form-group">
            <label>Moderation Level</label>
            <ModerationLevelDropdown
              id="moderationLevelDropdown"
              value={values.moderation_level}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              options={levels}
            />
            <ErrorMessage component={Error} name="moderation_level" />
          </div>
          <CommunityKeywords
            id="communityKeywordInput"
            value={values.keywords}
            onChange={setFieldValue}
          />
          <DiscussionTags
            id="discussionTagsInput"
            value={values.tags}
            onChange={setFieldValue}
          />

          <span>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </span>
        </Form>
      </div>
    </div>
  );
};

const handleUpdateCommunity = async () => {
  const { communities, id, note } = this.state;
  const input = { id, note };
  const result = await API.graphql(
    graphqlOperation(updateCommunity, { input })
  );
  const updatedCommunity = result.data.updateCommunity;
  const index = communities.findIndex(() => note.id === updatedCommunity.id);
  const updatedCommunities = [
    ...communities.slice(0, index),
    updatedCommunity,
    ...communities.slice(index + 1),
  ];
  this.setState({ notes: updatedCommunities, note: "", id: "" });
};

const hasExistingCommunity = () => {
  const { communities, communityId } = this.state;
  if (communityId) {
    const isCommunity =
      communities.findIndex(community => community.id === communityId) > -1;
    return isCommunity;
  }
  return false;
};

const CommunityFormWrapped = formikWrapper(CommunityForm);
export default CommunityFormWrapped;
