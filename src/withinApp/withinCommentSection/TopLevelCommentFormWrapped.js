import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createComment } from "../../graphql/mutations";
import { withFormik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../../utils/Error";

// type Comment @model {
//     id: ID
//     content: String!
//     creator: String!
//     discussionId: ID
//     createdDate: String!
//     parentCommentId: ID
//     threadId: ID
//     hidden: Boolean
//     hiddenDate: String
//     sitewideReasonsForBeingHidden: [String]
//     communityReasonsForBeingHidden: [String]
//     upvotes: Int
//     downvotes: Int
//     funny: Int
//     disagree: Int
//     dateLastModified: String
// }

const removeEmptyDataFromDTO = payload => {
  // DynamoDB throws an error if you submit empty strings
  // or arrays
  let input = {};
  for (let key in payload) {
    if (payload[key] !== "" && payload[key] !== []) {
      input[key] = payload[key];
    }
  }
  return input;
};

const addDateToDTO = input => {
  return {
    ...input,
    createdDate: new Date()
  };
};

const formikWrapper = withFormik({
  enableReinitialize: true,
  //   content: String!
  //   creator: String!
  //   discussionId: ID
  //   createdDate: String!
  mapPropsToValues: ({ user, discussionId }) => ({
    content: "",
    creator: user,
    discussionId
  }),
  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    const formData = {
      ...values
    };
    let input = removeEmptyDataFromDTO(formData);
    input = addDateToDTO(input);

    await API.graphql(graphqlOperation(createComment, { input }))
      .then(response => {
        console.log("CreateComment API call succeeded");
        console.log("Response is ", response);
      })
      .catch(e => {
        console.log("CreateComment API call failed");
        console.log("input was ", input);
        console.log("values was ", values);
        console.log(e);
      });
    setSubmitting(false);
    resetForm();
  },
  validationSchema: Yup.object().shape({
    content: Yup.string().max(3000, "Can have a maximum of 3,000 characters.")
  })
});
class TopLevelCommentForm extends React.Component {
  // values, setFieldValue, and setFieldTouched are needed for custom fields, not Formik fields
  render() {
    const { isSubmitting } = this.props;

    return (
      <Form>
        <div className="form-group">
          <Field
            component="textarea"
            rows="3"
            type="content"
            name="content"
            placeholder="Reply here."
            className="form-control"
          />
          <ErrorMessage component={Error} name="commentContentError" />
        </div>
        <span>
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            + Reply
          </button>
        </span>
      </Form>
    );
  }
}

const TopLevelCommentFormWrapped = formikWrapper(TopLevelCommentForm);
export default TopLevelCommentFormWrapped;
