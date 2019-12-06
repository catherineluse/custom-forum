import React from "react";
import Select from "react-select";

class DiscussionTagsDropdown extends React.Component {
  handleChange = value => {
    this.props.onChange("tags", value, false);
  };
  handleBlur = () => {
    this.props.onBlur("tags", true);
  };
  render() {
    const { value, options } = this.props;
    // console.log(
    //   "the props passed to ModerationLevelDropdown are " +
    //     JSON.stringify(this.props)
    // );
    return (
      <div className="form-group">
        <label htmlFor="discussionTags">Tags (Optional)</label>
        <small className="form-text text-muted">
          Tags can make discussions easier to find.
        </small>
        <Select
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          options={this.props.tags}
          placeholder="Add a tag"
          isMulti
        />
      </div>
    );
  }
}

export default DiscussionTagsDropdown;
