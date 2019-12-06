import React from "react";
import DiscussionFormWrapped from "../forms/DiscussionForm/create_edit_discussion";
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

  componentDidMount = () => {
    const { communities, nameInUrl } = this.props;
    console.log("component mount ran");
    this.getCommunityData(communities, nameInUrl);
  };

  render() {
    const { communityData } = this.state;
    return (
      <>
        <div className="community-header">
          <div className="container">
            <h1>{communityData ? communityData["name"] : ""}</h1>
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
            className="community-tabs justify-content-center"
            defaultActiveKey="discussions"
            id="uncontrolled-tab-example"
          >
            <Tab
              eventKey="discussions"
              title={
                <span>
                  <i className="fas fa-comments"></i> Discussions
                </span>
              }
            >
              <DiscussionFormWrapped
                creator={`${communityData ? communityData["creator"] : ""}`}
                tags={`${communityData ? communityData["tags"] : []}`}
                communityUrl={`${communityData ? communityData["url"] : ""}`}
              />
              <ListOfDiscussions />
            </Tab>
            <Tab
              eventKey="info"
              title={
                <span>
                  <i className="fas fa-info-circle"></i> Basic Info
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
                  <i className="fas fa-calendar-alt"></i> Calendar
                </span>
              }
            >
              Calendar
            </Tab>
            <Tab
              eventKey="rules"
              title={
                <span>
                  <i className="fas fa-gavel"></i> Rules
                </span>
              }
            >
              Rules
            </Tab>
            <Tab
              eventKey="wiki"
              title={
                <span className="community-tab-name">
                  <i className="fas fa-book-open"></i> Wiki
                </span>
              }
            >
              Wiki
            </Tab>
            <Tab
              eventKey="settings"
              title={
                <span className="community-tab-name">
                  <i className="fas fa-cog"></i> Settings
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
