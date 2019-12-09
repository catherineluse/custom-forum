import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listDiscussions } from "../../graphql/queries";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  onCreateDiscussion,
  onDeleteDiscussion,
} from "../../graphql/subscriptions";

// type Discussion @model {
//   id: ID
//   title: String!
//   creator: String!
//   communityUrl: String!
//   createdDate: String
//   content: String
//   locked: Boolean
//   hidden: Boolean
//   sitewide_reasons_for_being_hidden: [String]
//   community_reasons_for_being_hidden: [String]
//   hidden_date: String
//   upvotes: Int
//   downvotes: Int
//   tags: [String]
// }

class ListOfDiscussions extends Component {
  state = {
    discussions: [],
  };

  getDiscussions = async () => {
    const result = await API.graphql(graphqlOperation(listDiscussions));
    console.log("result of listDiscussions API call", result);
    if (result) {
      this.setState({ discussions: result.data.listDiscussions.items });
    }
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
      },
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
      },
    });
  };

  componentWillUnmount() {
    this.createDiscussionListener.unsubscribe();
    this.deleteDiscussionListener.unsubscribe();
  }

  mapDiscussionsToListView = discussions => {
    return discussions.map(discussion => {
      return (
        <div>
          <p>The title is {discussion.title}</p>
          <p>The creator is {discussion.creator}</p>
          <p>The createdDate is {discussion.createdDate}</p>
        </div>
      );
    });
  };

  render() {
    const { discussions } = this.state;

    return discussions
      ? this.mapDiscussionsToListView(discussions)
      : "There are no discussions yet.";
  }
}

export default ListOfDiscussions;
