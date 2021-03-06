import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { deleteCommunity } from "../graphql/mutations";
import { listCommunitys } from "../graphql/queries";

class CommunityList extends Component {
  state = {
    communities: []
  };

  async componentDidMount() {
    this.getCommunities();
  }

  handleDeleteCommunity = async communityId => {
    const input = {
      id: communityId
    };
    await API.graphql(graphqlOperation(deleteCommunity, { input }));
  };

  showCommunityKeywords = keywords => {
    if (keywords) {
      return keywords.map(keyword => (
        <span key={keyword} className="keyword">
          {keyword}
        </span>
      ));
    }
    return "";
  };

  handleSetCommunity = ({ name, communityId }) => {
    this.setState({ name, communityId });
  };

  mapModLevelToWord = intLevel => {
    switch (intLevel) {
      case 1:
        return "Low";
      case 2:
        return "Medium";
      case 3:
        return "High";
      default:
        return "Low";
    }
  };

  getCommunities = async () => {
    await API.graphql(graphqlOperation(listCommunitys))
      .then(result => {
        const communities = result.data.listCommunitys.items;
        this.setState({ communities });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { communities } = this.state;
    console.log("communities are ", communities);
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h1>Find a Community</h1>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Community Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {communities.map(item => (
                    <tr key={item.id} className="flex items-center">
                      <td onClick={() => this.handleSetCommunity(item)}>
                        <div className="community-name-in-table">
                          {item.name}
                        </div>

                        <div className="community-description">
                          {item.description}
                        </div>
                        <div className="community-url">
                          gennit.net/c/{item.url}
                        </div>
                        <div className="community-keywords">
                          {this.showCommunityKeywords(item.keywords)}
                        </div>
                      </td>
                      <td>
                        <NavLink className="table-link" to={`/c/${item.url}`}>
                          Visit community
                        </NavLink>
                      </td>
                      <td>
                        <button
                          onClick={() => this.handleDeleteCommunity(item.id)}
                          className="delete-button"
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
export default CommunityList;
