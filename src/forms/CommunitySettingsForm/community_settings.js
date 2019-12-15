import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateCommunity } from "../../graphql/mutations";
import { withFormik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../Error";
import ModerationLevelDropdown from "../CommunityForm/moderation-level";
import DiscussionTags from "../CommunityForm/discussion-tags";
import CommunityKeywords from "../CommunityForm/community-keywords";

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

const levels = [
  { value: 1, label: "Low - Only the sitewide rules apply" },
  { value: 2, label: "Medium - This community is moderated" },
  { value: 3, label: "High - This community has strict rules" }
];

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

const addDateToDTO = input => {
  return {
    ...input,
    created_date: new Date()
  };
};

const turnModerationLevelIntoNumber = formData => {
  const payload = formData;
  payload.moderation_level = payload.moderation_level.value | 1;
  console.log(
    "The moderation level is " + JSON.stringify(payload.moderation_level)
  );
  return payload;
};

const formikWrapper = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ communityData }) => ({
    name: "",
    description: "",
    moderation_level: 1,
    tags: [],
    keywords: [],
    id: communityData ? communityData.id : ""
  }),
  handleSubmit: async (values, { setSubmitting }) => {
    const formData = {
      ...values
    };
    let input = removeEmptyStringsFromDTO(formData);
    input = turnModerationLevelIntoNumber(input);
    input = addDateToDTO(input);

    await API.graphql(graphqlOperation(updateCommunity, { input }))
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
    name: Yup.string()
      .min(2, "Must have at least two characters.")
      .max(140, "Can have a maximum of 140 characters."),
    description: Yup.string().max(140, "Can have a maximum of 140 characters."),
    moderation_level: Yup.string().required("A moderation level is required."),
    tags: Yup.array().of(Yup.string()),
    keywords: Yup.array().of(Yup.string())
  })
});
class CommunitySettingsForm extends React.Component {
  // values, setFieldValue, and setFieldTouched are needed for custom fields, not Formik fields

  render() {
    const {
      values,
      setFieldValue,
      setFieldTouched,
      isSubmitting,
      errors,
      touched,
      handleSubmit
    } = this.props;

    return (
      <div className="card shadow">
        <div className="card-body">
          <Form>
            <h1>Update this Community</h1>

            <div className="form-group">
              <label htmlFor="name">Community Name</label>
              <small className="form-text text-muted">
                This name can be changed later.
              </small>
              <Field
                name="name"
                type="text"
                placeholder="Enter community name"
                className="form-control"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
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
              <ErrorMessage
                component={Error}
                name="communityDescriptionError"
              />
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
            </div>
            <CommunityKeywords
              id="communityKeywordInput"
              value={values.keywords}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            />
            <DiscussionTags
              id="discussionTagsInput"
              value={values.tags}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            />
            <span>
              <button
                type="button"
                onClick={handleSubmit}
                className="form-submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </span>
          </Form>
        </div>
      </div>
    );
  }
}

const CommunitySettingsFormWrapped = formikWrapper(CommunitySettingsForm);
export default CommunitySettingsFormWrapped;
