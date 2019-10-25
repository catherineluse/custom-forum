import React from "react";
import Select from "react-select";

class ModerationLevelDropdown extends React.Component {
  handleChange = value => {
    this.props.onChange("moderation_level", value, false);
  };
  handleBlur = () => {
    this.props.onBlur("moderation_level", true);
  };
  render() {
    console.log(
      "the props passed to ModerationLevelDropdown are " +
        JSON.stringify(this.props)
    );
    return (
      <Select
        value={this.props.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        options={this.props.options}
      />
    );
  }
}

export default ModerationLevelDropdown;
