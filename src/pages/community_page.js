import React from "react";
import NewDiscussion from "../components/discussion_components/new_discussion";
import ListOfDiscussions from "../components/community_components/list_of_discussions";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";

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

  render() {
    const { communityData } = this.state;
    return (
      <>
        <div className="community-header">
          <div className="container">
            <span className="community-header-name">
              {communityData ? communityData["name"] : ""}
            </span>
            <p className="community-url">
              gennit.net/c/{communityData ? communityData["url"] : ""}
            </p>
            <p className="community-description">
              {communityData ? communityData["description"] : ""}
            </p>
          </div>
        </div>

        <div className="container">
          <Tabs
            className="community-tabs"
            defaultActiveKey="discussions"
            id="uncontrolled-tab-example"
          >
            <Tab
              eventKey="discussions"
              title={
                <span>
                  <i className="fas fa-comments"></i>
                </span>
              }
            >
              <NewDiscussion />
              <button>+ New Discussion</button>
              <ListOfDiscussions />
            </Tab>
            <Tab
              eventKey="info"
              title={
                <span>
                  <i className="fas fa-info-circle"></i>
                </span>
              }
            >
              <h3 className="header-within-tab">Topics</h3>
              This community shows in searches for the following keywords:
              <br />
              <div className="community-keywords">
                {communityData
                  ? this.showCommunityKeywords(communityData["keywords"])
                  : ""}
              </div>
              <h3 className="header-within-tab">Discussion Tags</h3>
              You can add these tags to discussions:
              <br />
              <div className="community-keywords">
                {communityData
                  ? this.showCommunityKeywords(communityData["tags"])
                  : ""}
              </div>
              <h3 className="header-within-tab">Creator</h3>
              {communityData ? communityData["creator"] : ""}
              <h3 className="header-within-tab">Created Date</h3>
              {communityData ? communityData["created_date"] : ""}
            </Tab>
            <Tab
              eventKey="calendar"
              title={
                <span>
                  <i className="fas fa-calendar-alt"></i>
                </span>
              }
            >
              Calendar
            </Tab>
            <Tab
              eventKey="rules"
              title={
                <span>
                  <i className="fas fa-gavel"></i>
                </span>
              }
            >
              Rules
            </Tab>
            <Tab
              eventKey="wiki"
              title={
                <span className="community-tab-name">
                  <i className="fas fa-book-open"></i>
                </span>
              }
            >
              Wiki
            </Tab>
            <Tab
              eventKey="settings"
              title={
                <span className="community-tab-name">
                  <i className="fas fa-cog"></i>
                </span>
              }
            >
              Settings
            </Tab>
          </Tabs>
        </div>
      </>
    );
  }
}

export default CommunityPage;
