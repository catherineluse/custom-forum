import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  createCommunity,
  deleteCommunity,
  updateCommunity,
} from "../../graphql/mutations";

// Community graphql schema:
// type Community @model @searchable {
//     id: ID
//     url: String
//     name: String!
//     description: String
//     creator: ID
//     created_date: AWSDate
//     rules: [String]
//     locations: [String]
//     hidden: Boolean
//     hidden_date: AWSDate
//     sitewide_reasons_for_being_hidden: [String]
//     keywords: [String]
//     flagged_comments: [Comment]
//     flagged_discussions: [Discussion]
//   }

class CommunityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
    };
  }

  removeEmptyStringsFromDTO = () => {
    let input = {};
    for (let key in this.state) {
      if (this.state[key] !== "") {
        input[key] = this.state[key];
      }
    }
    return input;
  };
  // DynamoDB throws an error if you submit empty strings
  handleAddCommunity = async event => {
    event.preventDefault();

    let input = this.removeEmptyStringsFromDTO(this.state);
    const result = await API.graphql(
      graphqlOperation(createCommunity, { input })
    )
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });

    // console.log(
    //   "the api result is " + JSON.stringify(result.data.createCommunity)
    // );
    this.setState({ name: "", description: "" });
  };

  handleChangename = event => {
    console.log("changed community name instate");
    this.setState({ name: event.target.value });
  };

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  handleUpdateCommunity = async () => {
    const { communities, id, note } = this.state;
    const input = { id, note };
    const result = await API.graphql(
      graphqlOperation(updateCommunity, { input })
    );
    const updatedCommunity = result.data.updateCommunity;
    const index = communities.findIndex(
      community => note.id === updatedCommunity.id
    );
    const updatedCommunities = [
      ...communities.slice(0, index),
      updatedCommunity,
      ...communities.slice(index + 1),
    ];
    this.setState({ notes: updatedCommunities, note: "", id: "" });
  };

  hasExistingCommunity = () => {
    const { communities, communityId } = this.state;
    if (communityId) {
      const isCommunity =
        communities.findIndex(community => community.id === communityId) > -1;
      return isCommunity;
    }
    return false;
  };

  render() {
    return (
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={this.handleAddCommunity}>
            <h1>Community Form</h1>
            <div className="form-group">
              <label for="name">Community Name</label>
              <input
                type="text"
                class="form-control"
                id="newCommunityName"
                onChange={this.handleChangename}
                placeholder="A descriptive name"
              />
            </div>
            <div className="form-group">
              <label for="communityDescription">Description</label>
              <textarea
                class="form-control"
                id="newCommunityDescription"
                rows="3"
                onChange={this.handleChangeDescription}
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">
                Register
              </button>
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommunityForm;
