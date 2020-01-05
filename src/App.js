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
        alert("Could not get user date.");
      });
    }
  };

  onHubCapsule = capsule => {
    switch (capsule.payload.event) {
      case "signIn":
        this.getUserData();
        break;
      case "signUp":
        break;
      case "signOut":
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
      alert("error signing out user", err);
    }
  };

  getCommunityDescription = url => {
    const community = this.state.communities.filter(community => {
      return community.url === url;
    })[0];
    if (!community) {
      return null;
    }
    return community.description;
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
            <div>
              <Route
                exact
                path="/"
                component={() => {
                  return (
                    <div>
                      <TopNavBar
                        communityName={null}
                        handleSignout={this.handleSignout}
                      />
                      <div className="container">
                        <CommunityFormWrapped
                          creator={username}
                          communities={communities}
                        />
                      </div>
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/find"
                component={() => {
                  return (
                    <div>
                      <TopNavBar
                        communityName={null}
                        handleSignout={this.handleSignout}
                      />
                      <div className="container">
                        <CommunityList communities={communities} />
                      </div>
                    </div>
                  );
                }}
              />
              <Route
                path="/profile"
                component={() => {
                  return (
                    <div>
                      <TopNavBar
                        communityName={null}
                        handleSignout={this.handleSignout}
                      />
                      <div className="container">
                        <ProfilePage user={username} />
                      </div>
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/c/:url"
                component={({ match }) => {
                  const url = match.params.url;
                  const communityDescription = this.getCommunityDescription(
                    url
                  );
                  return (
                    <div>
                      <TopNavBar
                        communityName={url}
                        handleSignout={this.handleSignout}
                        communityDescription={communityDescription}
                      />
                      <CommunityPage
                        nameInUrl={url}
                        communities={communities}
                      />
                    </div>
                  );
                }}
              />
              <Route
                path="/c/:url/discussions/:discussionId"
                component={({ match }) => {
                  const url = match.params.url;
                  const communityDescription = this.getCommunityDescription(
                    url
                  );
                  return (
                    <div>
                      <TopNavBar
                        communityName={match.params.url}
                        handleSignout={this.handleSignout}
                        communityDescription={communityDescription}
                      />
                      <div className="container">
                        <CommentSection
                          communityUrl={match.params.url}
                          discussionId={match.params.discussionId}
                          user={username}
                        />
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
