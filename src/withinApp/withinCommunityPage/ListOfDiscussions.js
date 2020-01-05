import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listDiscussions } from "../../graphql/queries";
import { NavLink } from "react-router-dom";
import {
  onCreateDiscussion,
  onDeleteDiscussion
} from "../../graphql/subscriptions";
import { deleteDiscussion } from "../../graphql/mutations";

class ListOfDiscussions extends Component {
  state = {
    discussions: []
  };

  getDiscussions = async discussions => {
    // This will be updated to only pull data for one community.
    // The way this is written now, all discussions for the entire
    // site are being loaded.
    const allDiscussions = await API.graphql(graphqlOperation(listDiscussions));
    this.setState({ discussions: allDiscussions.data.listDiscussions.items });
  };

  handleDeleteDiscussion = async discussionId => {
    const input = {
      id: discussionId
    };
    await API.graphql(graphqlOperation(deleteDiscussion, { input }));
  };

  getDateOfDiscussion = discussionDate => {
    return discussionDate.substring(0, 10);
  };

  showDiscussionTags = tags => {
    if (tags) {
      return tags.map(tag => (
        <span key={tag} className="keyword">
          {tag}
        </span>
      ));
    }
    return null;
  };

  componentDidMount = async () => {
    this.getDiscussions();
    this.createDiscussionListener = API.graphql(
      graphqlOperation(onCreateDiscussion)
    ).subscribe({
      next: discussionData => {
        const newDiscussion = discussionData.value.data.onCreateDiscussion;
        const prevDiscussions = this.state.discussions.filter(
          discussion => discussion.id !== newDiscussion.id
        );
        const updatedDiscussions = [...prevDiscussions, newDiscussion];
        this.setState({ discussions: updatedDiscussions });
      }
    });
    this.deleteDiscussionListener = API.graphql(
      graphqlOperation(onDeleteDiscussion)
    ).subscribe({
      next: discussionData => {
        const deletedDiscussion = discussionData.value.data.onDeleteDiscussion;
        const updatedDiscussions = this.state.discussions.filter(
          discussion => discussion.id !== deletedDiscussion.id
        );
        this.setState({ discussions: updatedDiscussions });
      }
    });
  };

  componentWillUnmount() {
    this.createDiscussionListener.unsubscribe();
    this.deleteDiscussionListener.unsubscribe();
  }

  mapDiscussionsToListView = (discussions, url) => {
    if (discussions.length === 0) {
      return <p className="placeholder">There are no discussions yet.</p>;
    } else {
      return discussions.map(discussion => {
        const { id, creator, createdDate, title, tags, content } = discussion;

        return (
          <div className="discussion" key={id}>
            <NavLink
              className="nav-link discussion-title"
              to={`/c/${url}/discussions/${id}`}
            >
              {title}
              <span className="discussion-tag-list">
                {this.showDiscussionTags(tags)}
              </span>
            </NavLink>
            {content ? (
              <div className="discussion-content-in-list">{content}</div>
            ) : (
              <></>
            )}
            <div className="dicussion-metadata">
              {`Started by ${creator} on ${this.getDateOfDiscussion(
                createdDate
              )} `}
              <button
                onClick={() => this.handleDeleteDiscussion(id)}
                className="delete-button"
              >
                <span>&times; Delete</span>
              </button>
            </div>
          </div>
        );
      });
    }
  };
  filterDiscussions = communityData => {
    const discussions = this.state.discussions;
    const filteredDiscussions = discussions.filter(discussion => {
      return discussion.communityUrl === communityData.url;
    });
    return this.mapDiscussionsToListView(
      filteredDiscussions,
      communityData.url
    );
  };

  render() {
    const { communityData } = this.props;

    return <>{communityData ? this.filterDiscussions(communityData) : null}</>;
  }
}

export default ListOfDiscussions;
