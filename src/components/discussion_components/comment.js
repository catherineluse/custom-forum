import React, { Component } from "react";
import CreateChildCommentWrapped from "../../forms/CommentForm/create_reply_to_comment";

class Comment extends Component {
  state = {
    buttonsExpanded: false
  };

  toggleCommentButtons = () => {
    this.setState({ buttonsExpanded: !this.state.buttonsExpanded });
  };

  render() {
    const {
      commentData,
      handleDeleteComment,
      getDateOfComment,
      user,
      discussionId,
      topLevelCommentId
    } = this.props;

    const { id, content, creator, createdDate } = commentData;
    const { buttonsExpanded } = this.state;

    return (
      <div className="comment" key={id}>
        <div className="comment-header">
          <div className="username-in-comment">
            {creator} &#8226; {getDateOfComment(createdDate)}
          </div>
        </div>
        <div className="comment-metadata">
          <i className="fas fa-coins metadata-button"></i>
          {" 1 "}
          <i className="fas fa-sitemap metadata-button"></i>
          {" 0 "}
        </div>
        <div className="comment-content" onClick={this.toggleCommentButtons}>
          {content}
        </div>

        {buttonsExpanded ? (
          <div className="expanded-buttons">
            <div className="comment-buttons">
              <i className="fas fa-arrow-circle-up comment-button comment-action"></i>
              <i className="fas fa-arrow-circle-down comment-button comment-action"></i>
              <i className="fas fa-star comment-button comment-action"></i>
              <i className="fas fa-flag comment-button comment-action"></i>
              <span
                className="delete-comment-button"
                onClick={() => handleDeleteComment(id)}
              >
                <span>&times; Delete</span>
              </span>
            </div>
            <CreateChildCommentWrapped
              user={user}
              discussionId={discussionId}
              parentCommentId={id}
              topLevelCommentId={topLevelCommentId}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
export default Comment;
