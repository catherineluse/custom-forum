import React from "react";
import Select from "react-select";

class DiscussionTagsDropdown extends React.Component {
  handleChange = selectedTagObjects => {
    console.log(" the selected options are ", selectedTagObjects);
    // it's getting a array of objects
    // like this: [{value: something, label: something}]
    // The data needs to be in this format to display
    // correctly in the input of this form.
    this.props.onChange("tags", selectedTagObjects, false);
  };
  handleBlur = () => {
    this.props.onBlur("tags", true);
  };
  mapTagsToDropdownOptions = tags => {
    return tags.map(tag => {
      return {
        value: tag,
        label: tag,
      };
    });
  };
  mapDropdownOptionsToTags = options => {
    return options.map(option => {
      return option.label;
    });
  };
  render() {
    const { value, availableTags } = this.props;
    const options = availableTags
      ? this.mapTagsToDropdownOptions(availableTags)
      : [];

    console.log(
      "the props passed to ModerationLevelDropdown are " +
        JSON.stringify(this.props)
    );
    console.log("the options are ", options);
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
          options={options}
          placeholder="Add a tag"
          isMulti
        />
      </div>
    );
  }
}

export default DiscussionTagsDropdown;
