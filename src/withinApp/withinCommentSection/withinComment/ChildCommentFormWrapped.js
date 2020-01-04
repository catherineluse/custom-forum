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
      console.log("CreateComment API call succeeded");
      console.log("Response is ", response);
      const newChildId = response.data.createComment.id;
      console.log("new child data is ", newChildId);
      return newChildId;
    })
    .catch(e => {
      console.log("CreateComment API call failed");
      console.log("input was ", input);
      console.log(e);
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
    console.log("Could not get parent comment");
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
    .then(response => {
      console.log("Update parent comment API call succeeded");
      console.log("Response is ", response);
    })
    .catch(e => {
      console.log("Update parent comment API call failed");
      console.log("input was ", input);
      console.log(e);
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
    console.log(
      "trying to add this child id to the parent comment ",
      newChildId
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
