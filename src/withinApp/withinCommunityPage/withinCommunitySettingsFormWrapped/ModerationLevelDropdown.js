import React from "react";
import Select from "react-select";

const levels = [
  { value: 1, label: "Low - Only the sitewide rules apply" },
  { value: 2, label: "Medium - This community is moderated" },
  { value: 3, label: "High - This community has strict rules" }
];

const turnNumberIntoModerationLevel = number => {
  return levels.map(level => {
    return level.value === number;
  })[0];
};
class ModerationLevelDropdown extends React.Component {
  handleChange = value => {
    this.props.onChange("moderationLevel", value, false);
  };
  handleBlur = () => {
    this.props.onBlur("moderationLevel", true);
  };
  render() {
    const { value } = this.props;
    return (
      <Select
        value={value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        options={levels}
        placeholder={turnNumberIntoModerationLevel(value)}
      />
    );
  }
}

export default ModerationLevelDropdown;
