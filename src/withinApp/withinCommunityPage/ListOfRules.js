import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listRules } from "../../graphql/queries";
import { onCreateRule, onDeleteRule } from "../../graphql/subscriptions";
import { deleteRule } from "../../graphql/mutations";

class ListOfRules extends Component {
  state = {
    rules: []
  };

  getRules = async () => {
    // This will be updated to only pull data for one community.
    // The way this is written now, all Rules for the entire
    // site are being loaded.
    const allRules = await API.graphql(graphqlOperation(listRules));
    this.setState({ rules: allRules.data.listRules.items });
  };

  handleDeleteRule = async RuleId => {
    const input = {
      id: RuleId
    };
    await API.graphql(graphqlOperation(deleteRule, { input }));
  };

  componentDidMount = async () => {
    this.getRules();
    this.createRuleListener = API.graphql(
      graphqlOperation(onCreateRule)
    ).subscribe({
      next: ruleData => {
        const newRule = ruleData.value.data.onCreateRule;
        const prevRules = this.state.rules.filter(
          rule => rule.id !== newRule.id
        );
        const updatedRules = [...prevRules, newRule];
        this.setState({ rules: updatedRules });
      }
    });
    this.deleteRuleListener = API.graphql(
      graphqlOperation(onDeleteRule)
    ).subscribe({
      next: ruleData => {
        const deletedRule = ruleData.value.data.onDeleteRule;
        const updatedRules = this.state.rules.filter(
          rule => rule.id !== deletedRule.id
        );
        this.setState({ rules: updatedRules });
      }
    });
  };

  componentWillUnmount() {
    this.createRuleListener.unsubscribe();
    this.deleteRuleListener.unsubscribe();
  }

  mapRulesToListView = rules => {
    return rules.map(rule => {
      return (
        <li key={rule.id}>
          <b>{rule.summary}</b> {rule.explanation}
          <span onClick={() => this.handleDeleteRule(rule.id)}> &times;</span>
        </li>
      );
    });
  };
  filterRules = communityId => {
    const rules = this.state.rules;
    const filteredRules = rules.filter(rule => {
      return rule.community_id === communityId;
    });
    return filteredRules;
  };

  render() {
    const { communityData } = this.props;

    return (
      <ol className="rules">
        {communityData
          ? this.mapRulesToListView(this.filterRules(communityData.id))
          : this.mapRulesToListView([])}
      </ol>
    );
  }
}

export default ListOfRules;
