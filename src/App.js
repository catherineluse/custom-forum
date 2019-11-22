import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listCommunitys } from "./graphql/queries";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react";
import { onCreateCommunity, onDeleteCommunity } from "./graphql/subscriptions";
import TopNavbar from "./components/top_nav_bar";
import CommunityFormWrapped from "./forms/CommunityForm/create_edit_community";
import AdminCommunityList from "./components/admin_community_list";
class App extends Component {
  state = {
    communities: [],
  };

  componentDidMount = async () => {
    this.getCommunities();
    this.createCommunityListener = API.graphql(
      graphqlOperation(onCreateCommunity)
    ).subscribe({
      next: communityData => {
        const newCommunity = communityData.value.data.onCreateCommunity;
        const prevCommunities = this.state.communities.filter(
          community => community.id !== newCommunity.id
        );
        const updatedCommunities = [...prevCommunities, newCommunity];
        this.setState({ communities: updatedCommunities });
      },
    });
    this.deleteCommunityListener = API.graphql(
      graphqlOperation(onDeleteCommunity)
    ).subscribe({
      next: communityData => {
        const deletedCommunity = communityData.value.data.onDeleteCommunity;
        const updatedCommunities = this.state.communities.filter(
          community => community.id !== deletedCommunity.id
        );
        this.setState({ communities: updatedCommunities });
      },
    });
  };

  componentWillUnmount() {
    this.createCommunityListener.unsubscribe();
  }

  getCommunities = async () => {
    const result = await API.graphql(graphqlOperation(listCommunitys));
    this.setState({ communities: result.data.listCommunitys.items });
  };

  render() {
    const { communities } = this.state;

    return (
      <div>
        <TopNavbar />

        <div className="container">
          <CommunityFormWrapped communities={communities} />
          <AdminCommunityList communities={communities} />
        </div>
      </div>
    );
  }
}

const theme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "forestgreen",
  },
};

export default withAuthenticator(App, true, [], null, theme);
