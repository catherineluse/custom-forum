import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  onCreateComment,
  onDeleteComment
} from "../../../graphql/subscriptions";
import Comment from "./Comment";

class ListOfChildComments extends React.Component {
  state = {
    childComments: []
  };

  componentDidMount = async () => {
    const { parentCommentId } = this.props;

    this.createCommentListener = API.graphql(
      graphqlOperation(onCreateComment)
    ).subscribe({
      next: commentData => {
        const newComment = commentData.value.data.onCreateComment;
        if (newComment.parentCommentId !== parentCommentId) {
          // If the new comment doesn't share the same parent
          // comment ID as the other comments in this list,
          // do nothing.
          return;
        }

        const prevComments = this.state.childComments.filter(comment => {
          return comment.id !== newComment.id;
        });
        const updatedComments = [newComment, ...prevComments];
        this.setState(
          { childComments: updatedComments },
          console.log("updated list of child comments")
        );
      }
    });
    this.deleteCommentListener = API.graphql(
      graphqlOperation(onDeleteComment)
    ).subscribe({
      next: commentData => {
        const deletedComment = commentData.value.data.onDeleteComment;
        if (deletedComment.parentCommentId !== parentCommentId) {
          return;
        }
        const updatedComments = this.state.childComments.filter(
          comment => comment.id !== deletedComment.id
        );
        this.setState({ childComments: updatedComments });
      }
    });
  };

  componentWillUnmount() {
    this.createCommentListener.unsubscribe();
    this.deleteCommentListener.unsubscribe();
  }

  getChildCommentDataByIds = childIds => {
    const { getCommentById } = this.props;
    return childIds.map(id => {
      return getCommentById(id);
    });
  };

  mapCommentIdsToDisplayedComments = childIds => {
    const { topLevelCommentId, parentCommentId, levelInHierarchy } = this.props;
    const commentDataList = this.getChildCommentDataByIds(childIds);
    return commentDataList.map(commentData => {
      if (!commentData) {
        return null;
      }

      const { id, children } = commentData;
      const {
        user,
        discussionId,
        handleDeleteComment,
        getDateOfComment
      } = this.props;

      return (
        <div className="comment indented" key={id}>
          <Comment
            key={id}
            user={user}
            commentData={commentData}
            discussionId={discussionId}
            handleDeleteComment={handleDeleteComment}
            getDateOfComment={getDateOfComment}
            parentCommentId={parentCommentId}
            topLevelCommentId={topLevelCommentId}
          />
          <p>This is a child comment</p>
          <ListOfChildComments
            children={children}
            topLevelCommentId={topLevelCommentId}
            parentCommentId={id}
            levelInHierarchy={levelInHierarchy + 1}
          />
        </div>
      );
    });
  };

  render() {
    const { childIds } = this.props;

    if (!childIds) {
      return null;
    }

    return this.mapCommentIdsToDisplayedComments(childIds);
  }
}

export default ListOfChildComments;
