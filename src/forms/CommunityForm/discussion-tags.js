import React from "react";

class DiscussionTags extends React.Component {
  constructor() {
    super();

    this.state = {
      tags: []
    };
  }

  componentDidMount() {
    const { existingTags } = this.props;
    this.setState({ tags: existingTags });
  }

  handleChange = () => {
    this.props.onChange("tags", this.state.tags, false);
  };

  handleBlur = () => {
    this.props.onBlur("tags", true);
  };

  tagExists = val => {
    // Check if tag already exists
    if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
      return true;
    }
    return false;
  };

  removeTag = async i => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    await this.setState({ tags: newTags });
    this.handleChange();
  };

  getExistingTags = () => {
    return this.state.tags.map((tag, i) => (
      <li key={tag}>
        {tag}
        <button
          className="delete-button"
          type="button"
          onClick={() => {
            this.removeTag(i);
          }}
        >
          &#215;
        </button>
      </li>
    ));
  };

  removeLastTag = e => {
    this.removeTag(this.state.tags.length - 1);
  };

  addTagToState = val => {
    this.setState({ tags: [...this.state.tags, val] });
  };

  resetInput = () => {
    this.tagInput.value = null;
  };

  inputKeyDown = async e => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (this.tagExists(val)) {
        return;
      }
      await this.addTagToState(val);
      this.resetInput();
      this.handleChange();
    } else if (e.key === "Backspace" && !val) {
      this.removeLastTag();
      this.handleChange();
    }
  };

  render() {
    return (
      <div className="form-group">
        <label>Discussion Tags</label>

        <div className="input-tag">
          <ul className="input-tag__tags">
            {this.getExistingTags()}
            <li className="input-tag__tags__input">
              <input
                type="text"
                onKeyDown={this.inputKeyDown}
                ref={c => {
                  this.tagInput = c;
                }}
              />
            </li>
          </ul>
        </div>
        <small id="tagInstructions" className="form-text text-muted">
          Type a tag and press Enter to add the tag.
        </small>
        <small id="tagDefinition" className="form-text text-muted">
          Discussions within this community can be tagged, allowing you to
          filter discussions by tag.
        </small>
      </div>
    );
  }
}
export default DiscussionTags;
