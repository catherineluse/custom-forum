import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listComments, listDiscussions } from "../graphql/queries";
import { onCreateComment, onDeleteComment } from "../graphql/subscriptions";
import { deleteComment } from "../graphql/mutations";
import { NavLink } from "react-router-dom";
import TopLevelCommentFormWrapped from "./withinCommentSection/TopLevelCommentFormWrapped";
import Comment from "./withinCommentSection/Comment";

// type Comment @model {
//   id: ID
//   content: String!
//   creator: String!
//   discussionId: ID
//   createdDate: String!
//   parentCommentId: ID
//   threadId: ID
//   hidden: Boolean
//   hiddenDate: String
//   sitewideReasonsForBeingHidden: [String]
//   communityReasonsForBeingHidden: [String]
//   upvotes: Int
//   downvotes: Int
//   funny: Int
//   disagree: Int
//   dateLastModified: String
// }

// type Discussion @model {
//   id: ID
//   title: String!
//   creator: String!
//   communityUrl: String!
//   createdDate: String
//   content: String
//   locked: Boolean
//   hidden: Boolean
//   sitewideReasonsForBeingHidden: [String]
//   communityReasonsForBeingHidden: [String]
//   hiddenDate: String
//   upvotes: Int
//   downvotes: Int
//   tags: [String]
// }
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
        const prevComments = this.state.comments.filter(
          comment => comment.id !== newComment.id
        );
        const updatedComments = [...prevComments, newComment];

        if (!discussionId) {
          this.setState({ comments: updatedComments });
          return;
        }

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
      return null;
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

  getDiscussionPreview = discussionContent => {
    return discussionContent.substring(0, 100);
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

  nestChildCommentsUnderParent = (
    childIds,
    topLevelCommentId,
    parentCommentId,
    levelInHierarchy
  ) => {
    const { user, discussionId } = this.props;

    const childComments = childIds.map(id => {
      return this.getCommentById(id);
    });

    return childComments.map(commentData => {
      if (!commentData) {
        return null;
      }

      const { id, children } = commentData;

      return (
        <div className="comment indented" key={id}>
          <Comment
            className="indent-me"
            key={id}
            user={user}
            commentData={commentData}
            discussionId={discussionId}
            handleDeleteComment={this.handleDeleteComment}
            getDateOfComment={this.getDateOfComment}
            parentCommentId={parentCommentId}
            topLevelCommentId={topLevelCommentId}
          />
          <p>This is a child comment</p>
          {children
            ? this.nestChildCommentsUnderParent(
                children,
                topLevelCommentId,
                commentData.id,
                levelInHierarchy + 1
              )
            : null}
        </div>
      );
    });
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
          {children
            ? this.nestChildCommentsUnderParent(
                children,
                id,
                id,
                levelInHierarchy
              )
            : null}
        </div>
      );
    });
  };
  filterComments = () => {
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

  render() {
    const { communityUrl } = this.props;
    const {
      discussionTitle,
      discussionContent,
      discussionCreator,
      discussionCreatedDate,
      comments
    } = this.state;
    const { discussionId, user } = this.props;

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
              <p>{this.getDiscussionPreview(discussionContent)}</p>
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
