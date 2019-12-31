import React, { Component } from "react";
import CreateReplyToCommentWrapped from "../../forms/CommentForm/create_reply_to_comment";

class Comment extends Component {
  state = {
    buttonsExpanded: false,
    replyToCommentExpanded: false
  };

  toggleCommentButtons = () => {
    this.setState({ buttonsExpanded: !this.state.buttonsExpanded });
  };

  toggleReplyToCommentForm = () => {
    this.setState({
      replyToCommentExpanded: !this.state.replyToCommentExpanded
    });
  };

  render() {
    const { commentData, handleDeleteComment, getDateOfComment } = this.props;
    const { id, content, creator, createdDate } = commentData;
    const { buttonsExpanded, replyToCommentExpanded } = this.state;

    return (
      <div className="comment" key={id}>
        <div className="comment-header">
          <div className="username-in-comment">
            {creator} &#8226; {getDateOfComment(createdDate)}
          </div>
        </div>
        <div className="comment-metadata">
          <i className="fas fa-arrow-circle-up metadata-button metadata-action"></i>
          <i className="fas fa-arrow-circle-down metadata-button metadata-action"></i>
          <i className="fas fa-reply metadata-button metadata-action"></i>
          <i className="fas fa-coins metadata-button"></i>
          {" 1 "}
          <i className="fas fa-sitemap metadata-button"></i>
          {" 0 "}
        </div>
        <div className="comment-content" onClick={this.toggleCommentButtons}>
          {content}
        </div>

        {buttonsExpanded ? (
          <div className="comment-buttons">
            <i className="fas fa-arrow-circle-up comment-button comment-action"></i>
            <i className="fas fa-arrow-circle-down comment-button comment-action"></i>
            <i className="fas fa-reply comment-button comment-action"></i>
            <i className="fas fa-star comment-button comment-action"></i>
            <i className="fas fa-flag comment-button comment-action"></i>
            <span
              className="delete-comment-button"
              onClick={() => handleDeleteComment(id)}
            >
              <span> &times; Delete</span>
            </span>
          </div>
        ) : null}

        {replyToCommentExpanded ? (
          <CreateReplyToCommentWrapped commentData={commentData} />
        ) : null}
      </div>
    );
  }
}
export default Comment;
