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
import CommentSection from "./withinApp/withinCommunityPage/CommentSection";
import ProfilePage from "./stub/ProfilePage";
import CommunityList from "./withinApp/CommunityList";
import CommunityFormWrapped from "./withinApp/CommunityFormWrapped";

export const UserContext = React.createContext();
class App extends Component {
  state = {
    username: "",
    communities: [],
    currentCommunityUrl: "",
    currentCommunityDescription: ""
  };

  componentDidMount = async () => {
    this.getUserData();
    Hub.listen("auth", this, "onHubCapsule");
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

  getCurrentCommunityByUrl = async url => {
    await API.graphql(graphqlOperation(listCommunitys))
      .then(result => {
        const communities = result.data.listCommunitys.items;
        const communityData = communities.filter(community => {
          return community.url === url;
        })[0];
        if (!communityData) {
          return null;
        }
        return communityData;
      })
      .catch(err => alert(err));
  };

  componentWillUnmount() {
    this.createCommunityListener.unsubscribe();
    this.deleteCommunityListener.unsubscribe();
  }

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

  render() {
    const { communities, username } = this.state;

    return !username ? (
      <Authenticator />
    ) : (
      <UserContext.Provider value={{ username }}>
        <Router>
          <>
            <div>
              <Route
                exact
                path="/"
                component={() => {
                  return (
                    <div>
                      <TopNavBar handleSignout={this.handleSignout} />
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
                      <TopNavBar handleSignout={this.handleSignout} />
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
                      <TopNavBar handleSignout={this.handleSignout} />
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
                  return (
                    <div>
                      <TopNavBar
                        handleSignout={this.handleSignout}
                        communityUrl={url}
                        communityDescription={null}
                      />
                      <div className="container">
                        <CommunityPage
                          url={url}
                          communities={communities}
                          setCurrentCommunity={this.setCurrentCommunity}
                        />
                      </div>
                    </div>
                  );
                }}
              />
              <Route
                path="/c/:url/discussions/:discussionId"
                component={({ match }) => {
                  const { url, discussionId } = match.params;
                  const communityData = this.getCurrentCommunityByUrl(url);
                  return (
                    <div>
                      <TopNavBar
                        handleSignout={this.handleSignout}
                        communityUrl={url}
                        communityDescription={
                          communityData ? communityData.description : null
                        }
                      />
                      <div className="container">
                        <CommentSection
                          communityUrl={url}
                          discussionId={discussionId}
                          user={username}
                          setCurrentCommunity={this.setCurrentCommunity}
                        />
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          </>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
