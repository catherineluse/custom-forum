import React from "react";
import DiscussionFormWrapped from "./withinCommunityPage/DiscussionFormWrapped";
import ListOfDiscussions from "./withinCommunityPage/ListOfDiscussions";
import ListOfRules from "./withinCommunityPage/ListOfRules";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import CommunityRuleFormWrapped from "./withinCommunityPage/CommunityRuleFormWrapped";
import CommunitySettingsFormWrapped from "./withinCommunityPage/CommunitySettingsFormWrapped";
import { listCommunitys } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
class CommunityPage extends React.Component {
  state = {
    communityData: null,
    sideNavExpanded: true
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
    this.getCurrentCommunity();
  };

  getCurrentCommunity = async () => {
    const { url } = this.props;
    await API.graphql(graphqlOperation(listCommunitys))
      .then(result => {
        const communities = result.data.listCommunitys.items;

        const community = communities.filter(community => {
          console.log("url is ", url);
          console.log("community url is ", community.url);
          return community.url === url;
        })[0];
        console.log("result in get current community", communities);
        if (!community) {
          console.log("couldn't find the community");
          return null;
        }
        this.setState({ communityData: community });
      })
      .catch(err => alert(err));
  };

  render() {
    const { communityData } = this.state;

    if (!communityData) {
      return <p>The community is loading.</p>;
    }
    const { name, keywords, tags } = communityData;
    return (
      <>
        <div className="community-column">
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
                <div className="row">
                  <div className="col-sm-3">
                    <Nav defaultActiveKey="/home" className="flex-column">
                      <Nav.Link href="/home">
                        <i className="fas fa-comments" /> Discussions
                      </Nav.Link>
                      <Nav.Link eventKey="link-1">
                        <i className="fas fa-chart-bar" /> Data
                      </Nav.Link>
                      <Nav.Link eventKey="link-2">
                        <i className="fas fa-calendar-alt" /> Events
                      </Nav.Link>
                      <Nav.Link eventKey="link-3">
                        <i className="fas fa-gavel" /> Rules
                      </Nav.Link>
                      <Nav.Link eventKey="link-4">
                        <i className="fas fa-book-open" /> Wiki
                      </Nav.Link>
                      <Nav.Link eventKey="link-5">
                        <i className="fas fa-cog" /> Settings
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="col-sm-9">
                    <DiscussionFormWrapped communityData={communityData} />
                    <ListOfDiscussions communityData={communityData} />
                  </div>
                </div>
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
                {communityData ? communityData["createdDate"] : ""}
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
      </>
    );
  }
}

export default CommunityPage;
