import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listComments, listDiscussions } from "../../graphql/queries";
import { onCreateComment, onDeleteComment } from "../../graphql/subscriptions";
import { deleteComment } from "../../graphql/mutations";
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

  getDiscussion = async () => {
    const { discussionId } = this.props;
    await API.graphql(graphqlOperation(listDiscussions))
      .then(result => {
        const discussions = result.data.listDiscussions.items;
        const relevantDiscussion = discussions.filter(
          discussion => discussion.id === discussionId
        );
        const discussionData = relevantDiscussion[0];
        if (!discussionData) {
          console.log("Could not find discussion");
        }
        const { id, title, content, creator, createdDate } = discussionData;
        this.setState({
          discussionId: id,
          discussionTitle: title,
          discussionContent: content,
          discussionCreator: creator,
          discussionCreatedDate: createdDate
        });
      })
      .catch(err => console.log(err));
  };

  getComments = async () => {
    const { discussionId } = this.props;
    await API.graphql(graphqlOperation(listComments, { limit: 500 }))
      .then(result => {
        const comments = result.data.listComments.items;
        console.log("all comments are ", comments);
        if (comments.length > 0) {
          const topLevelDiscussionComments = comments.filter(
            comment =>
              comment.discussionId === discussionId &&
              comment.parentCommentId === null
          );
          this.setState({ comments: topLevelDiscussionComments });
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount = async () => {
    await this.getComments();
    await this.getDiscussion();

    this.createCommentListener = API.graphql(
      graphqlOperation(onCreateComment)
    ).subscribe({
      next: commentData => {
        this.getComments();
      }
    });
    this.deleteCommentListener = API.graphql(
      graphqlOperation(onDeleteComment)
    ).subscribe({
      next: commentData => {
        const deletedComment = commentData.value.data.onDeleteComment;
        if (
          deletedComment.parentCommentId === null &&
          deletedComment.discussionId === this.props.discussionId
        ) {
          const updatedComments = this.state.comments.filter(
            comment => comment.id !== deletedComment.id
          );
          this.setState({ comments: updatedComments });
        }
      }
    });
  };

  updateTopLevelComments = commentData => {
    const newComment = commentData.value.data.onCreateComment;
    if (!newComment) {
      return;
    }

    if (
      newComment.discussionId === this.props.discussionId &&
      newComment.parentCommentId === null
    ) {
      // The comment section state should only be updated
      // if a top-level comment is added.
      const prevComments = this.state.comments.filter(comment => {
        return comment.id !== newComment.id;
      });
      const updatedTopLevelComments = [...prevComments, newComment];
      this.setState({ comments: updatedTopLevelComments });
    }
  };

  componentWillUnmount() {
    this.createCommentListener.unsubscribe();
    this.deleteCommentListener.unsubscribe();
  }

  addCommentToState = newComment => {
    const prevComments = this.state.comments.filter(comment => {
      return comment.id !== newComment.id;
    });
    const updatedComments = [newComment, ...prevComments];

    this.setState({ comments: updatedComments });
  };

  handleDeleteComment = async commentId => {
    const input = {
      id: commentId
    };
    await API.graphql(graphqlOperation(deleteComment, { input }));
  };

  getDateOfComment = commentDate => {
    if (!commentDate) {
      return null;
    }
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
    const { comments } = this.state;
    const { discussionId } = this.props;
    const filteredComments = comments.filter(comment => {
      return (
        comment.discussionId === discussionId &&
        comment.parentCommentId === null
      );
    });
    this.setState({ comments: filteredComments });
  };

  mapCommentsToTreeView = () => {
    const { comments } = this.state;
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
          ) : (
            <p>There are no replies yet.</p>
          )}
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
    console.log("comments", comments);

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
          {comments ? this.mapCommentsToTreeView() : null}
        </div>
      </>
    );
  }
}

export default CommentSection;
