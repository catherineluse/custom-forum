import React, { Component } from "react";
import { Auth, Hub } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listCommunitys } from "./graphql/queries";
import { Authenticator } from "aws-amplify-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { onCreateCommunity, onDeleteCommunity } from "./graphql/subscriptions";
import TopNavBar from "./components/top_nav_bar";
import CommunityPage from "./pages/community_page";
import ProfilePage from "./pages/profile_page";
import AdminCommunityList from "./components/admin_community_list";

class App extends Component {
  state = {
    user: null,
    communities: [],
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
    this.deleteCommunityListener.unsubscribe();
  }

  getCommunities = async () => {
    const result = await API.graphql(graphqlOperation(listCommunitys));
    console.log("result of listCommunitys API call", result);
    this.setState({ communities: result.data.listCommunitys.items });
  };

  getUserData = async () => {
    const user = Auth.currentAuthenticatedUser();
    user ? this.setState({ user }) : this.setState({ user: null });
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
    const { user } = this.state;

    return !user ? (
      <Authenticator />
    ) : (
      <div>
        <Router>
          <>
            <TopNavBar user={user} handleSignout={this.handleSignout} />
            <div className="app-container">
              <Route
                exact
                path="/"
                component={() => {
                  return (
                    <div className="container">
                      <AdminCommunityList communities={communities} />
                    </div>
                  );
                }}
              />
              <Route
                path="/profile"
                component={() => {
                  return (
                    <div className="container">
                      <ProfilePage user={user} />
                    </div>
                  );
                }}
              />
              <Route
                path="/c/:nameInUrl"
                component={({ match }) => (
                  <div className="container">
                    <CommunityPage
                      nameInUrl={match.params.nameInUrl}
                      communities={communities}
                    />
                  </div>
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
