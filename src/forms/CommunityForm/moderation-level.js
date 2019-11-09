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
    const { value, options } = this.props;
    // console.log(
    //   "the props passed to ModerationLevelDropdown are " +
    //     JSON.stringify(this.props)
    // );
    return (
      <Select
        value={value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        options={options}
        placeholder={options[0].label}
      />
    );
  }
}

export default ModerationLevelDropdown;
