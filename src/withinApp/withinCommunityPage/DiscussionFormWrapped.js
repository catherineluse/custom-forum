import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createDiscussion } from "../../graphql/mutations";
import { withFormik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../../utils/Error";
import DiscussionTagsDropdown from "./withinDiscussionFormWrapped/DiscussionTagsDropdown";
import removeEmptyDataFromDTO from "../../utils/removeEmptyData";

const mapTagObjectsToStringsForDTO = input => {
  const tagObjects = input.tags;
  const tagStrings = tagObjects.map(tagObj => tagObj.label);
  input["tags"] = tagStrings;
  return input;
};

const onKeyDown = keyEvent => {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
};

const formikWrapper = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ creator, tags, communityUrl, communityData }) => ({
    title: "",
    content: "",
    communityUrl: communityData ? communityData.url : "",
    creator: communityData ? communityData.creator : "",
    tags: []
  }),
  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    const formData = {
      ...values,
      createdDate: new Date()
    };
    let input = removeEmptyDataFromDTO(formData);
    input = mapTagObjectsToStringsForDTO(input);
    await API.graphql(graphqlOperation(createDiscussion, { input }))
      .then(response => {})
      .catch(e => {
        alert(
          "CreateDiscussion API call failed, input was ",
          JSON.stringify(input)
        );
      });
    setSubmitting(false);
    resetForm();
  },
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .max(140, "Can have a maximum of 140 characters.")
      .required("Please enter a title for the discussion."),
    content: Yup.string().max(3000, "Can have a maximum of 3,000 characters.")
  })
});
class DiscussionForm extends React.Component {
  state = {
    formIsExpanded: false
  };

  toggleFormExpand = () => {
    this.setState({ formIsExpanded: !this.state.formIsExpanded });
  };

  addCommunityDataToDTO = input => {
    const { communityData } = this.props;
    return {
      ...input,
      communityUrl: communityData ? communityData.url : "",
      creator: communityData ? communityData.creator : ""
    };
  };

  // values, setFieldValue, and setFieldTouched are needed for custom fields, not Formik fields
  render() {
    const {
      values,
      setFieldValue,
      setFieldTouched,
      isSubmitting,
      errors,
      touched,
      communityData
    } = this.props;

    return (
      <>
        <button className="btn-create" onClick={this.toggleFormExpand}>
          + Start Discussion
        </button>
        {this.state.formIsExpanded ? (
          <Form onKeyDown={onKeyDown}>
            <div className="form-group">
              <label htmlFor="title">Discussion Title</label>
              <Field name="title" type="text" className="form-control" />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}
              <ErrorMessage component={Error} name="discussionTitleError" />
            </div>

            <div className="form-group">
              <label htmlFor="discussionContent">Text Post (Optional)</label>
              <Field
                component="textarea"
                rows="3"
                type="content"
                name="content"
                placeholder="If you want to say something beyond what fits in the title, add it here."
                className="form-control"
              />
              <ErrorMessage component={Error} name="discussionContentError" />
            </div>
            <DiscussionTagsDropdown
              id="discussionTagsSelect"
              value={values.tags}
              availableTags={communityData ? communityData.tags : []}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            />
            <span>
              <button
                type="submit"
                className="form-submit btn-create"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </span>
          </Form>
        ) : null}
      </>
    );
  }
}

const DiscussionFormWrapped = formikWrapper(DiscussionForm);
export default DiscussionFormWrapped;
