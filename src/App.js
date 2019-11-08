import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import { deleteCommunity } from "./graphql/mutations";
import { listCommunitys } from "./graphql/queries";
import CommunityFormWrapped from "./forms/CommunityForm/create_edit_community";

class App extends Component {
  state = {
    communities: [],
  };

  componentDidMount = async () => {
    const result = await API.graphql(graphqlOperation(listCommunitys));
    console.log("result", result);
    this.setState({ communities: result.data.listCommunitys.items });
  };

  handleDeleteCommunity = async communityId => {
    const { communities } = this.state;
    const input = {
      id: communityId,
    };
    const result = await API.graphql(
      graphqlOperation(deleteCommunity, { input })
    );
    const deletedCommunityId = result.data.deleteCommunity.id;
    const updatedCommunities = communities.filter(
      community => community.id !== deletedCommunityId
    );
    this.setState({ communities: updatedCommunities });
  };

  handleSetCommunity = ({ name, communityId }) => {
    this.setState({ name, communityId });
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
          <div className="card">
            <div className="card-body">
              <h1>Find a Community</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Community Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Moderation Level</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {communities.map(item => (
                    <tr key={item.id} className="flex items-center">
                      <td onClick={() => this.handleSetCommunity(item)}>
                        {item.name}
                      </td>
                      <td>{item.description}</td>
                      <td>{item.moderation_level}</td>
                      <td>
                        <button
                          onClick={() => this.handleDeleteCommunity(item.id)}
                          className="bg-transparent bn f4"
                        >
                          <span>&times;</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App);
