import React from "react";

class CommunityRules extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newRuleSummary: "",
      newRuleExplanation: "",
      rules: [],
    };
  }

  updateFormState = () => {
    this.props.onChange("rules", this.state.rules, false);
  };

  createNewRuleObject = (summary, explanation) => {
    return {
      key: summary,
      summary: summary,
      explanation: explanation,
    };
  };

  handleSummaryChange = e => {
    const summary = e.target.value;
    console.log("summary is " + summary);
    this.setState({ newRuleSummary: summary }, () => {
      console.log(
        "handle summary change ran, state is now: ",
        JSON.stringify(this.state)
      );
    });
  };

  handleExplanationChange = e => {
    const explanation = e.target.value;
    this.setState({ newRuleExplanation: explanation });
  };

  handleBlur = () => {
    this.props.onBlur("rules", true);
  };

  removeRule = i => {
    const newRules = [...this.state.rules];
    newRules.splice(i, 1);
    this.setState({ rules: newRules });
    this.updateFormState();
  };

  getExistingRules = () => {
    return this.state.rules.map((rule, i) => (
      <li key={rule.key}>
        <span className="rule-summary">{rule.summary}</span>{" "}
        <span className="rule-explanation">{rule.explanation}</span>
        <button
          className="delete-button"
          type="button"
          onClick={() => {
            this.removeRule(i);
          }}
        >
          &#215;
        </button>
      </li>
    ));
  };

  resetExplanationInput = () => {
    this.ruleExplanationInput.value = null;
  };

  resetSummaryInput = () => {
    this.ruleSummaryInput.value = null;
  };

  handleAddNewRule = () => {
    console.log("rule state is " + JSON.stringify(this.state));

    const newRule = this.createNewRuleObject(
      this.state.newRuleSummary,
      this.state.newRuleExplanation
    );
    console.log("Trying to add new rule ", JSON.stringify(newRule));
    //Trying to add new rule  {"summary":"cats onl","explanation":"dog peopl"}
    const newRules = [...this.state.rules, newRule];
    console.log("Trying to add new rules ", JSON.stringify(newRules));
    this.setState({ rules: newRules }, () => {
      console.log("set rules in state as ", this.state.rules);
    });

    this.updateFormState();
    console.log(
      "after updating form state, rule state is " + JSON.stringify(this.state)
    );

    this.resetSummaryInput();
    this.resetExplanationInput();
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor="communityRules">Rules</label>

        <small id="ruleInstructions" className="form-text text-muted">
          This section is for rules that apply specifically to this community.
          When someone reports a comment or discussion in this community, they
          will be able to select reasons for why it should be removed. The
          reasons come from the sitewide rules and from these community rules.
        </small>

        <ol>{this.getExistingRules()}</ol>

        <label htmlFor="newRuleSummaryInput">Rule Summary</label>
        <input
          type="text"
          onKeyDown={this.handleSummaryChange}
          placeholder="No cat posts allowed"
          ref={c => {
            this.ruleSummaryInput = c;
          }}
        />
        <br></br>
        <label htmlFor="newRuleExplanationInput">Explanation</label>
        <input
          type="text"
          onKeyDown={this.handleExplanationChange}
          placeholder="Because we are dog people"
          ref={c => {
            this.ruleExplanationInput = c;
          }}
        />
        <br />
        <button
          type="button"
          onClick={this.handleAddNewRule}
          className="btn-secondary"
        >
          &#x2b; Add New Rule
        </button>
      </div>
    );
  }
}
export default CommunityRules;
