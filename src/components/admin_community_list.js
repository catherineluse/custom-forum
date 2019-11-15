import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { deleteCommunity } from "../graphql/mutations";

class AdminCommunityList extends Component {
  state = {
    communities: [],
  };

  handleDeleteCommunity = async communityId => {
    console.log("delete community ran");
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
    const levelWordMap = {
      1: "Low",
      2: "Medium",
      3: "High",
    };
    return levelWordMap[intLevel];
  };

  render() {
    const { communities } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h1>Community List</h1>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Community Name</th>
                  <th scope="col">Name in URL</th>
                  <th scope="col">Moderation Level</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {communities.map(item => (
                  <tr key={item.id} className="flex items-center">
                    <td onClick={() => this.handleSetCommunity(item)}>
                      <div className="community-name-in-table">{item.name}</div>
                      <div className="community-description">
                        {item.description}
                      </div>
                      <div className="community-keywords">
                        {this.showCommunityKeywords(item.keywords)}
                      </div>
                    </td>
                    <td>{item.url}</td>
                    <td>{this.mapModLevelToWord(item.moderation_level)}</td>
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
    );
  }
}
export default AdminCommunityList;
