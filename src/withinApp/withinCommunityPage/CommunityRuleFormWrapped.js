import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createRule } from "../../graphql/mutations";
import { withFormik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../../utils/Error";
import removeEmptyDataFromDTO from "../../utils/removeEmptyData";

const onKeyDown = keyEvent => {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
};

const formikWrapper = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ communityData }) => ({
    summary: "",
    explanation: "",
    communityId: communityData ? communityData.id : ""
  }),
  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    const formData = {
      ...values
    };
    let input = removeEmptyDataFromDTO(formData);

    await API.graphql(graphqlOperation(createRule, { input }))
      .then(response => {})
      .catch(e => {
        alert("CreateRule API call failed, input was ", JSON.stringify(input));
      });
    setSubmitting(false);
    resetForm();
  },
  validationSchema: Yup.object().shape({
    summary: Yup.string()
      .max(70, "Can have a maximum of 70 characters.")
      .required("Please enter a summary for the rule."),
    explanation: Yup.string().max(
      3000,
      "Can have a maximum of 3,000 characters."
    )
  })
});
class CommunityRuleForm extends React.Component {
  addCommunityDataToDTO = input => {
    const { communityData } = this.props;
    return {
      ...input,
      communityId: communityData ? communityData.id : ""
    };
  };

  // values, setFieldValue, and setFieldTouched are needed for custom fields, not Formik fields
  render() {
    const { isSubmitting, errors, touched } = this.props;

    return (
      <Form onKeyDown={onKeyDown}>
        <h2>Create a Rule</h2>
        <hr />
        <div className="form-group">
          <label htmlFor="title">Rule Summary</label>
          <Field
            name="summary"
            type="text"
            className="form-control"
            placeholder="No cat pictures"
          />
          {errors.summary && touched.summary ? (
            <div>{errors.summary}</div>
          ) : null}
          <ErrorMessage component={Error} name="RuleTitleError" />
        </div>

        <div className="form-group">
          <label htmlFor="RuleExplanation">Explanation (Optional)</label>
          <Field
            component="textarea"
            rows="3"
            type="explanation"
            name="explanation"
            placeholder="Because we are dog people."
            className="form-control"
          />
          <ErrorMessage component={Error} name="RuleExplanationError" />
        </div>
        <span>
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            + Create Rule
          </button>
        </span>
      </Form>
    );
  }
}

const CommunityRuleFormWrapped = formikWrapper(CommunityRuleForm);
export default CommunityRuleFormWrapped;
