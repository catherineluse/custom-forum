import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateRule } from "../../graphql/mutations";
import { createRule } from "../../graphql/mutations";
import { listRules } from "../../graphql/queries";
import { onCreateRule, onDeleteRule } from "../../graphql/subscriptions";
import { withFormik } from "formik";
import * as Yup from "yup";

// type Rule @model {
//   id: ID
//   summary: String!
//   explanation: String
// }

const removeEmptyStringsFromDTO = payload => {
  // DynamoDB throws an error if you submit empty strings
  let input = {};
  for (let key in payload) {
    if (payload[key] !== "") {
      input[key] = payload[key];
    }
  }
  return input;
};

const handleUpdateRules = async () => {
  const { rules, id, rule } = this.state;
  const input = { id, rule };
  const result = await API.graphql(graphqlOperation(updateRule, { input }));
  const updatedRule = result.data.updateRule;
  const index = rules.findIndex(() => rule.id === updatedRule.id);
  const updatedRules = [
    ...rules.slice(0, index),
    updatedRule,
    ...rules.slice(index + 1)
  ];
  this.setState({ rules: updatedRules, rule: "", id: "" });
};

const formikWrapper = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ communityData }) => ({
    newRuleSummary: "",
    newRuleExplanation: ""
  }),
  handleSubmit: async (values, { setSubmitting }) => {
    const formData = {
      ...values
    };
    let input = removeEmptyStringsFromDTO(formData);

    await API.graphql(graphqlOperation(createRule, { input }))
      .then(response => {
        console.log("API call succeeded");
        console.log("Response is ", response);
      })
      .catch(e => {
        console.log("API call failed");
        console.log("input was ", input);
        console.log(e);
      });
    setSubmitting(false);
  },
  validationSchema: Yup.object().shape({
    newRuleSummary: Yup.string()
      .min(2, "Must have at least two characters.")
      .max(70, "Can have a maximum of 140 characters.")
      .required("Please enter a community name."),
    newRuleExplanation: Yup.string()
      .min(2, "Must have at least two characters.")
      .max(1000, "Can have a maximum of 1000 characters.")
  })
});

class CommunityRulesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newRuleSummary: "",
      newRuleExplanation: "",
      rules: [],
      rule: {},
      id: ""
    };
  }

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

  getRules = async () => {
    const result = await API.graphql(graphqlOperation(listRules));
    console.log("result of listRules API call", result);
    if (result) {
      this.setState({ rules: result.data.listRules.items });
    }
  };

  handleUpdateRule = async () => {
    const { rules, id, note } = this.state;
    const input = { id, note };
    const result = await API.graphql(graphqlOperation(updateRule, { input }));
    const updatedRule = result.data.updateRule;
    const index = rules.findIndex(() => note.id === updatedRule.id);
    const updatedrules = [
      ...rules.slice(0, index),
      updatedRule,
      ...rules.slice(index + 1)
    ];
    this.setState({ notes: updatedrules, note: "", id: "" });
  };

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
      explanation: explanation
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
    return <p>This Rule has no rules yet.</p>;
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
    this.setState(
      { rules: newRules, newRuleSummary: "", newRuleExplanation: "" },
      () => {
        this.updateFormState();
        this.resetSummaryInput();
        this.resetExplanationInput();
        console.log("set rules in state as ", this.state.rules);
      }
    );
  };

  render() {
    const {
      values,
      setFieldValue,
      setFieldTouched,
      isSubmitting,
      errors,
      touched,
      creator,
      handleSubmit
    } = this.props;

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

const CommunityRulesFormWrapped = formikWrapper(CommunityRulesForm);
export default CommunityRulesFormWrapped;
