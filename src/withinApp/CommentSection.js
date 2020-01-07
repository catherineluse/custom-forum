import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listComments, listDiscussions } from "../graphql/queries";
import { onCreateComment, onDeleteComment } from "../graphql/subscriptions";
import { deleteComment } from "../graphql/mutations";
import { NavLink } from "react-router-dom";
import TopLevelCommentFormWrapped from "./withinCommentSection/TopLevelCommentFormWrapped";
import Comment from "./withinCommentSection/Comment";
import ListOfChildComments from "./withinCommentSection/ListOfChildComments";

class CommentSection extends React.Component {
  state = {
    discussionTitle: "",
    discussionContent: "",
    discussionCreator: "",
    discussionCreatedDate: "",
    comments: []
  };

  componentDidMount = async () => {
    const { discussionId } = this.props;
    this.getDiscussion(discussionId);
    this.getComments();
    this.createCommentListener = API.graphql(
      graphqlOperation(onCreateComment)
    ).subscribe({
      next: commentData => {
        const newComment = commentData.value.data.onCreateComment;
        if (newComment.parentCommentId !== null) {
          // The comment section state should only be updated
          // if a top-level comment is added.
          return;
        }

        if (!discussionId) {
          return <p>Cannot find the discussion.</p>;
        }

        const prevComments = this.state.comments.filter(comment => {
          return comment.id !== newComment.id;
        });
        const updatedComments = [...prevComments, newComment];

        const discussionComments = updatedComments.filter(comment => {
          return comment.discussionId === discussionId;
        });

        this.setState({ comments: discussionComments });
      }
    });
    this.deleteCommentListener = API.graphql(
      graphqlOperation(onDeleteComment)
    ).subscribe({
      next: commentData => {
        const deletedComment = commentData.value.data.onDeleteComment;
        if (deletedComment.parentCommentId !== null) {
          return;
        }
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

  getDiscussion = async () => {
    const { discussionId } = this.props;
    const result = await API.graphql(graphqlOperation(listDiscussions));
    const discussions = result.data.listDiscussions.items;
    const relevantDiscussion = discussions.filter(
      discussion => discussion.id === discussionId
    );
    const discussionData = relevantDiscussion[0];
    if (!discussionData) {
      return <p>Could not find the discussion.</p>;
    }
    const { id, title, content, creator, createdDate } = discussionData;
    this.setState({
      discussionId: id,
      discussionTitle: title,
      discussionContent: content,
      discussionCreator: creator,
      discussionCreatedDate: createdDate
    });
  };

  getComments = async () => {
    const result = await API.graphql(graphqlOperation(listComments));
    if (result) {
      this.setState({ comments: result.data.listComments.items });
    }
  };

  handleDeleteComment = async commentId => {
    const input = {
      id: commentId
    };
    await API.graphql(graphqlOperation(deleteComment, { input }));
  };

  getDateOfComment = commentDate => {
    return commentDate.substring(5, 10);
  };

  getCommentById = id => {
    const { comments } = this.state;
    return comments.filter(comment => {
      return comment.id === id;
    })[0];
  };

  filterComments = () => {
    // Limit state to only comments in this discussion
    const comments = this.state.comments;
    const { discussionId } = this.props;
    const filteredComments = comments.filter(comment => {
      return comment.discussionId === discussionId;
    });
    if (filteredComments.length > 0) {
      return this.mapCommentsToTreeView(filteredComments);
    } else {
      return <p>There are no replies yet.</p>;
    }
  };

  mapCommentsToTreeView = comments => {
    return comments.map(commentData => {
      const { children, id } = commentData;
      const { discussionId } = this.state;
      const { user } = this.props;

      // This variable affects the indentation
      // in the comment tree. Because each nested
      // tree starts with a top-level root comment,
      // we start with level 0.
      const levelInHierarchy = 0;

      return (
        <div className="comment" key={id}>
          <Comment
            discussionId={discussionId}
            user={user}
            commentData={commentData}
            handleDeleteComment={this.handleDeleteComment}
            getDateOfComment={this.getDateOfComment}
            topLevelCommentId={id}
          />
          {children ? (
            <ListOfChildComments
              childIds={children}
              discussionId={discussionId}
              topLevelCommentId={id}
              parentCommentId={id}
              levelInHierarchy={levelInHierarchy}
              handleDeleteComment={this.handleDeleteComment}
              getDateOfComment={this.getDateOfComment}
              getCommentById={this.getCommentById}
            />
          ) : null}
        </div>
      );
    });
  };

  render() {
    const { communityUrl, discussionId, user } = this.props;

    const {
      discussionTitle,
      discussionContent,
      discussionCreator,
      discussionCreatedDate,
      comments
    } = this.state;

    const createdDate = this.getDateOfComment(discussionCreatedDate);

    return (
      <>
        <div className="breadcrumbs">
          <NavLink className="nav-link" to={`/c/${communityUrl}`}>
            <i className="fas fa-arrow-left"></i>
            {` Go back to community page (gennit.net/c/${communityUrl})`}
          </NavLink>
        </div>
        <div className="container">
          <h1 className="discussion-title-in-comment-page">
            <span className="discussion-signifier">Discussion: </span>
            <span>{discussionTitle}</span>
          </h1>
          <p className="discussion-attribution">
            {`Started by ${discussionCreator} on ${createdDate}`}
          </p>

          {discussionContent ? (
            <div className="discussion-content">
              <p>{discussionContent}</p>
            </div>
          ) : (
            <></>
          )}

          <TopLevelCommentFormWrapped discussionId={discussionId} user={user} />
          <hr></hr>
          {comments ? this.filterComments(comments) : null}
        </div>
      </>
    );
  }
}

export default CommentSection;
