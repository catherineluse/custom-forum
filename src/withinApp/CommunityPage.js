import React from "react";
import DiscussionFormWrapped from "./withinCommunityPage/DiscussionFormWrapped";
import ListOfDiscussions from "./withinCommunityPage/ListOfDiscussions";
import ListOfRules from "./withinCommunityPage/ListOfRules";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import CommunityRuleFormWrapped from "./withinCommunityPage/CommunityRuleFormWrapped";
import CommunitySettingsFormWrapped from "./withinCommunityPage/CommunitySettingsFormWrapped";

class CommunityPage extends React.Component {
  state = {
    communityData: null
  };

  getCommunityData = () => {
    const { communities, nameInUrl } = this.props;
    const communityData = communities.find(
      community => community.url === nameInUrl
    );
    this.setState({ communityData });
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
    this.getCommunityData(communities, nameInUrl);
  };

  render() {
    const { communityData } = this.state;

    if (!communityData) {
      return <p>The community is loading.</p>;
    }
    const { name, keywords, tags } = communityData;
    return (
      <div>
        <div className="community-header">
          <div className="container">
            <h1>{communityData ? name : ""}</h1>
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
                  <i className="fas fa-comments" /> Discussions
                </span>
              }
            >
              <ListOfDiscussions communityData={communityData} />
              <DiscussionFormWrapped communityData={communityData} />
            </Tab>
            <Tab
              eventKey="info"
              title={
                <span>
                  <i className="fas fa-chart-bar" /> Data
                </span>
              }
            >
              {keywords.length > 0 ? (
                <div>
                  <h3 className="header-within-tab">Community Keywords</h3>
                  This community shows in searches for the following keywords:
                  <br />
                  <div className="community-keywords">
                    {communityData
                      ? this.showCommunityKeywords(communityData["keywords"])
                      : ""}
                  </div>
                </div>
              ) : (
                <></>
              )}

              {tags.length > 0 ? (
                <div>
                  <h3 className="header-within-tab">Discussion Tags</h3>
                  You can add these tags to discussions:
                  <br />
                  <div className="community-keywords">
                    {communityData
                      ? this.showCommunityKeywords(communityData["tags"])
                      : ""}
                  </div>
                </div>
              ) : (
                <></>
              )}

              <h3 className="header-within-tab">Creator</h3>
              {communityData ? communityData["creator"] : ""}
              <h3 className="header-within-tab">Created Date</h3>
              {communityData ? communityData["created_date"] : ""}
            </Tab>
            <Tab
              eventKey="calendar"
              title={
                <span>
                  <i className="fas fa-calendar-alt" /> Events
                </span>
              }
            >
              Calendar
            </Tab>
            <Tab
              eventKey="rules"
              title={
                <span>
                  <i className="fas fa-gavel" /> Rules
                </span>
              }
            >
              <ListOfRules communityData={communityData} />
              <CommunityRuleFormWrapped communityData={communityData} />
            </Tab>
            <Tab
              eventKey="wiki"
              title={
                <span className="community-tab-name">
                  <i className="fas fa-book-open" /> Wiki
                </span>
              }
            >
              Wiki
            </Tab>
            <Tab
              eventKey="settings"
              title={
                <span className="community-tab-name">
                  <i className="fas fa-cog" /> Settings
                </span>
              }
            >
              <CommunitySettingsFormWrapped communityData={communityData} />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default CommunityPage;
