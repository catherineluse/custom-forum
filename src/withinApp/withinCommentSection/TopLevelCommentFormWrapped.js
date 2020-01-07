import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createComment } from "../../graphql/mutations";
import { withFormik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../../utils/Error";
import removeEmptyDataFromDTO from "../../utils/removeEmptyData";

const formikWrapper = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ user, discussionId }) => ({
    content: "",
    creator: user,
    discussionId
  }),
  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    const formData = {
      ...values,
      createdDate: new Date()
    };
    let input = removeEmptyDataFromDTO(formData);

    await API.graphql(graphqlOperation(createComment, { input }))
      .then(response => {})
      .catch(e => {
        alert(
          "CreateComment API call failed. Input was ",
          JSON.stringify(input)
        );
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
