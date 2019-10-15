import React from "react";
import Select from "react-select";

class ModerationLevelDropdown extends React.Component {
  handleChange = value => {
    this.props.onChange("levels", value);
  };
  handleBlur = () => {
    this.props.onBlur("levels", true);
  };
  render() {
    console.log(
      "the props passed to DropList are " + JSON.stringify(this.props)
    );
    return (
      <Select
        value={this.props.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        options={this.props.options}
        isMulti
      />
    );
  }
}

export default ModerationLevelDropdown;
