import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listComments } from "../../graphql/queries";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { onCreateComment, onDeleteComment } from "../../graphql/subscriptions";
import { deleteComment } from "../../graphql/mutations";

class commentsInComment extends Component {
  state = {
    comments: []
  };

  getComments = async comments => {
    const { communityData } = this.props;
    console.log("community data is ", communityData);

    // This will be updated to only pull data for one discussion.
    // The way this is written now, all comments for the entire
    // site are being loaded.
    const allComments = await API.graphql(graphqlOperation(listComments));
    console.log("result of listComments API call", allComments);
    this.setState({ comments: allComments.data.listComments.items });
  };

  componentDidMount = async () => {
    this.getComments();
    this.createCommentListener = API.graphql(
      graphqlOperation(onCreateComment)
    ).subscribe({
      next: commentData => {
        const newComment = commentData.value.data.onCreateComment;
        const prevComments = this.state.comments.filter(
          comment => comment.id !== newComment.id
        );
        const updatedComments = [...prevComments, newComment];
        this.setState({ comments: updatedComments });
      }
    });
    this.deleteCommentListener = API.graphql(
      graphqlOperation(onDeleteComment)
    ).subscribe({
      next: commentData => {
        const deletedComment = commentData.value.data.onDeleteComment;
        const updatedComments = this.state.comments.filter(
          comment => comment.id !== deletedComment.id
        );
        this.setState({ comments: updatedComments });
      }
    });
  };

  componentWillUnmount() {
    this.createCommentListener.unsubscribe();
    this.deleteCommentListener.unsubscribe();
  }
}
