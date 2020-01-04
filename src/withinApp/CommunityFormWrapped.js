import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createCommunity } from "../graphql/mutations";
import { withFormik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../utils/Error";

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
  mapPropsToValues: ({ creator }) => ({
    name: "",
    url: "",
    description: "",
    moderation_level: 1,
    tags: [],
    keywords: [],
    creator: creator || ""
  }),
  handleSubmit: async (values, { setSubmitting }) => {
    const formData = {
      ...values
    };
    let input = removeEmptyStringsFromDTO(formData);
    input = turnModerationLevelIntoNumber(input);
    input = addDateToDTO(input);

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
    name: Yup.string()
      .min(2, "Must have at least two characters.")
      .max(140, "Can have a maximum of 140 characters.")
      .required("Please enter a community name."),
    url: Yup.string()
      .matches(
        /^[0-9a-z-_]+$/,
        "Must contain only letters, numbers, hyphens, or underscores."
      )
      .min(2, "Must have at least two characters.")
      .max(70, "Can have a maximum of 70 characters.")
      .required("Please enter a unique name with no spaces."),
    description: Yup.string().max(140, "Can have a maximum of 140 characters."),
    moderation_level: Yup.string().required("A moderation level is required."),
    tags: Yup.array().of(Yup.string()),
    keywords: Yup.array().of(Yup.string())
  })
});
class CommunityForm extends React.Component {
  // values, setFieldValue, and setFieldTouched are needed for custom fields, not Formik fields

  render() {
    const { isSubmitting, errors, touched, handleSubmit } = this.props;

    return (
      <div className="card shadow">
        <div className="card-body">
          <Form>
            <h1>Create a Community</h1>

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
              <label htmlFor="url">Name in URL</label>
              <small className="form-text text-muted">
                This name is permanent and must be unique. This community will
                be available at:
                <div className="community-url">
                  gennit.net/c/[this unique name]
                </div>
              </small>
              <Field
                name="url"
                type="text"
                placeholder="Enter a unique name with no spaces"
                className="form-control"
              />
              {errors.url && touched.url ? <div>{errors.url}</div> : null}
              <ErrorMessage component={Error} name="communityUrlError" />
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

const CommunityFormWrapped = formikWrapper(CommunityForm);
export default CommunityFormWrapped;
