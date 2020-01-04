import React, { Component } from "react";
import { Auth, Hub } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listCommunitys } from "./graphql/queries";
import { Authenticator } from "aws-amplify-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  onCreateCommunity,
  onDeleteCommunity,
  onUpdateCommunity
} from "./graphql/subscriptions";
import TopNavBar from "./withinApp/TopNavBar";
import CommunityPage from "./withinApp/CommunityPage";
import CommentSection from "./withinApp/CommentSection";
import ProfilePage from "./stub/ProfilePage";
import CommunityList from "./withinApp/CommunityList";
import CommunityFormWrapped from "./withinApp/CommunityFormWrapped";

class App extends Component {
  state = {
    username: "",
    communities: []
  };

  componentDidMount = async () => {
    this.getUserData();
    Hub.listen("auth", this, "onHubCapsule");
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
      }
    });
    this.updateCommunityListener = API.graphql(
      graphqlOperation(onUpdateCommunity)
    ).subscribe({
      next: communityData => {
        const newCommunity = communityData.value.data.onCreateCommunity;
        const prevCommunities = this.state.communities.filter(
          community => community.id !== newCommunity.id
        );
        const updatedCommunities = [...prevCommunities, newCommunity];
        this.setState({ communities: updatedCommunities });
      }
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
      }
    });
  };

  componentWillUnmount() {
    this.createCommunityListener.unsubscribe();
    this.deleteCommunityListener.unsubscribe();
  }

  getCommunities = async () => {
    const result = await API.graphql(graphqlOperation(listCommunitys));
    console.log("result of listCommunitys API call", result);
    if (result) {
      this.setState({ communities: result.data.listCommunitys.items });
    }
  };

  getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();

    if (user) {
      this.setState({ username: user.username });
    } else {
      user.catch(() => {
        console.log("Could not get user date.");
      });
    }
  };

  onHubCapsule = capsule => {
    switch (capsule.payload.event) {
      case "signIn":
        console.log("signed in");
        this.getUserData();
        break;
      case "signUp":
        console.log("signed up");
        break;
      case "signOut":
        console.log("signed out");
        this.setState({ user: null });
        break;
      default:
        return;
    }
  };

  handleSignout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.error("error signing out user", err);
    }
  };

  render() {
    const { communities } = this.state;
    const { username } = this.state;

    return !username ? (
      <Authenticator />
    ) : (
      <div>
        <Router>
          <>
            <TopNavBar handleSignout={this.handleSignout} />

            <div className="no-gap">
              <Route
                exact
                path="/"
                component={() => {
                  return (
                    <div className="container">
                      <CommunityFormWrapped
                        creator={username}
                        communities={communities}
                      />
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/find"
                component={() => {
                  return (
                    <div className="container">
                      <CommunityList communities={communities} />
                    </div>
                  );
                }}
              />
              <Route
                path="/profile"
                component={() => {
                  return (
                    <div className="container">
                      <ProfilePage user={username} />
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/c/:nameInUrl"
                component={({ match }) => (
                  <CommunityPage
                    nameInUrl={match.params.nameInUrl}
                    communities={communities}
                  />
                )}
              />
              <Route
                path="/c/:url/discussions/:discussionId"
                component={({ match }) => (
                  <CommentSection
                    communityUrl={match.params.url}
                    discussionId={match.params.discussionId}
                    user={username}
                  />
                )}
              />
            </div>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
