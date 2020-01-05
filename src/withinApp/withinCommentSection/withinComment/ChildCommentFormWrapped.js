import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createComment, updateComment } from "../../../graphql/mutations";
import { listComments } from "../../../graphql/queries";
import { withFormik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "../../../utils/Error";

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

const removeEmptyStringsFromDTO = payload => {
  // DynamoDB throws an error if you submit empty strings
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

const createChildCommentWithParentCommentId = async input => {
  const newChildId = await API.graphql(
    graphqlOperation(createComment, { input })
  )
    .then(response => {
      const newChildId = response.data.createComment.id;
      return newChildId;
    })
    .catch(e => {
      alert("CreateComment API call failed, Input was ", input);
      return null;
    });
  return newChildId;
};

const updateParentCommentToAddChild = async (parentCommentId, newChildId) => {
  const result = await API.graphql(graphqlOperation(listComments));
  const comments = result.data.listComments.items;
  const parentCommentData = comments.filter(
    comment => comment.id === parentCommentId
  )[0];
  if (!parentCommentData) {
    alert("Could not get parent comment");
    return;
  }
  const existingChildren = parentCommentData.children;
  const input = {
    ...parentCommentData,
    children: existingChildren
      ? [newChildId, ...existingChildren]
      : [newChildId]
  };
  await API.graphql(graphqlOperation(updateComment, { input }))
    .then(response => {})
    .catch(e => {
      alert("Update parent comment API call failed");
    });
};

const formikWrapper = withFormik({
  enableReinitialize: true,
  //   content: String!
  //   creator: String!
  //   discussionId: ID
  //   createdDate: String!
  mapPropsToValues: ({
    user,
    discussionId,
    parentCommentId,
    topLevelCommentId
  }) => ({
    content: "",
    creator: user,
    discussionId,
    parentCommentId,
    threadId: topLevelCommentId
  }),
  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    const formData = {
      ...values
    };
    let input = removeEmptyStringsFromDTO(formData);
    input = addDateToDTO(input);

    const newChildId = await createChildCommentWithParentCommentId(
      input,
      values.parentCommentId
    );
    await updateParentCommentToAddChild(values.parentCommentId, newChildId);

    setSubmitting(false);
    resetForm();
  },
  validationSchema: Yup.object().shape({
    content: Yup.string().max(3000, "Can have a maximum of 3,000 characters.")
  })
});
class ChildCommentForm extends React.Component {
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
    const { isSubmitting, errors } = this.props;

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
          {errors ? (
            <ErrorMessage component={Error} name="commentContentError" />
          ) : null}
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

const ChildCommentFormWrapped = formikWrapper(ChildCommentForm);
export default ChildCommentFormWrapped;
