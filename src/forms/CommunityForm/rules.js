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

  cleanRulesForDTO = rules => {
    return rules.map(({ summary, explanation }) => {
      if (explanation) {
        return { summary, explanation };
      }
      return { summary };
    });
  };
  updateFormState = () => {
    let cleanedRules = this.cleanRulesForDTO(this.state.rules);
    console.log("cleaned rules are ", cleanedRules);
    this.props.onChange("rules", cleanedRules, false);
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
    this.setState({ newRuleSummary: summary });
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
    if (this.state.rules.length > 0) {
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
    }
    return <p>This community has no rules yet.</p>;
  };

  resetExplanationInput = () => {
    this.ruleExplanationInput.value = "";
  };

  resetSummaryInput = () => {
    this.ruleSummaryInput.value = "";
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
    this.setState({ rules: newRules }, () => {
      this.updateFormState();
      this.resetSummaryInput();
      this.resetExplanationInput();
      console.log("set rules in state as ", this.state.rules);
    });
  };

  render() {
    return (
      <div className="form-group">
        <h3>Community Rules</h3>

        <small
          id="ruleInstructions"
          className="form-text text-muted indented-info"
        >
          <i className="fas fa-info-circle info-icon"></i>This section is for
          rules that apply specifically to this community. When someone reports
          a comment or discussion in this community, they will be able to select
          reasons for why it should be removed. The reasons come from the
          sitewide rules and from these community rules.
        </small>

        <div className="community-rule-list">
          <ol>{this.getExistingRules()}</ol>
        </div>
        <div className="card add-rule-card">
          <div className="card-header">Add a Rule</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="newRuleSummaryInput">Rule (required)</label>
              <br />
              <input
                type="text"
                className="form-control"
                onKeyDown={this.handleSummaryChange}
                placeholder="No cat posts allowed"
                ref={c => {
                  this.ruleSummaryInput = c;
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newRuleExplanationInput">
                Reason or Explanation (optional)
              </label>

              <textarea
                type="text"
                className="form-control"
                rows="4"
                onKeyDown={this.handleExplanationChange}
                placeholder="Because we are dog people"
                ref={c => {
                  this.ruleExplanationInput = c;
                }}
              />
            </div>
            <br />
            <button
              type="button"
              onClick={this.handleAddNewRule}
              className="btn-rule"
            >
              &#x2b; Add New Rule
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default CommunityRules;
