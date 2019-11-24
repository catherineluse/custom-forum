import React from "react";
import NewDiscussion from "../components/discussion_components/new_discussion";
import ListOfDiscussions from "../components/community_components/list_of_discussions";

class CommunityPage extends React.Component {
  state = {
    communityData: "Gennit can't find a community with that name.",
  };

  getCommunityData = () => {
    const { communities, nameInUrl } = this.props;
    const communityData = communities.find(
      community => community.url === nameInUrl
    );
    this.setState({ communityData });
    console.log("communities are " + JSON.stringify(this.props.communities));
    console.log("community data is ", communityData);
  };

  componentDidMount = () => {
    const { communities, nameInUrl } = this.props;
    console.log("component mount ran");
    this.getCommunityData(communities, nameInUrl);
  };

  render() {
    const { communityData } = this.state;
    return (
      <>
        <h1>{communityData ? communityData["name"] : ""}</h1>
        <p>{communityData ? communityData["description"] : ""}</p>
        <p>{JSON.stringify(this.state.communityData)}</p>
        <h2>Discussion</h2>
        <NewDiscussion />
        <button>+ New Discussion</button>
        <ListOfDiscussions />
      </>
    );
  }
}

export default CommunityPage;
