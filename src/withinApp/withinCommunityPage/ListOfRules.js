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
    const { communityData } = this.props;
    const { communityId } = communityData;
    const allRules = await API.graphql(graphqlOperation(listRules))
      .then(result => {
        const allRules = result.data.listRules.items;
        const filteredRules = allRules.filter(rule => {
          return rule.communityId === communityId;
        });
        this.setState({ rules: filteredRules });
      })
      .catch(err => console.log(err));
    this.setState({ rules: allRules });
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

  mapRulesToListView = () => {
    return this.state.rules.map(rule => {
      return (
        <li key={rule.id}>
          <b>{rule.summary}</b> {rule.explanation}
          <span onClick={() => this.handleDeleteRule(rule.id)}> &times;</span>
        </li>
      );
    });
  };

  render() {
    if (!this.state.rules) {
      return <p>"There are no rules yet."</p>;
    }
    return <ol className="rules">{this.mapRulesToListView()}</ol>;
  }
}

export default ListOfRules;
