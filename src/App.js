import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import { listCommunitys } from "./graphql/queries";
import CommunityFormWrapped from "./forms/CommunityForm/create_edit_community";
import AdminCommunityList from "./components/admin_community_list";
class App extends Component {
  state = {
    communities: [],
  };

  componentDidMount = async () => {
    const result = await API.graphql(graphqlOperation(listCommunitys));
    console.log("result", result);
    this.setState({ communities: result.data.listCommunitys.items });
  };

  render() {
    const { communities } = this.state;
    console.log(communities);

    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <span className="navbar-brand mb-0 h1">
              <i className="fas fa-seedling"></i> Gennit
              <small>a site for meetups and discussions</small>
            </span>
          </div>
        </nav>

        <div className="container">
          <CommunityFormWrapped />
          <AdminCommunityList communities={communities} />
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App);
