import React from "react";

class CommunityKeywords extends React.Component {
  constructor() {
    super();

    this.state = {
      keywords: []
    };
  }

  componentDidMount() {
    const { existingKeywords } = this.props;
    this.setState({ keywords: existingKeywords });
  }

  handleChange = () => {
    this.props.onChange("keywords", this.state.keywords, false);
  };

  keywordExists = val => {
    // Check if keyword already exists
    if (
      this.state.keywords.find(
        keyword => keyword.toLowerCase() === val.toLowerCase()
      )
    ) {
      return true;
    }
    return false;
  };

  removeKeyword = i => {
    const newKeywords = [...this.state.keywords];
    newKeywords.splice(i, 1);
    this.setState({ keywords: newKeywords });
  };

  getExistingKeywords = () => {
    return this.state.keywords.map((keyword, i) => (
      <li key={keyword}>
        {keyword}
        <button
          className="delete-button"
          type="button"
          onClick={() => {
            this.removeKeyword(i);
          }}
        >
          &#215;
        </button>
      </li>
    ));
  };

  removeLastKeyword = e => {
    this.removeKeyword(this.state.keywords.length - 1);
  };

  addKeywordToState = val => {
    this.setState({ keywords: [...this.state.keywords, val] });
  };

  resetInput = () => {
    this.keywordInput.value = null;
  };

  inputKeyDown = async e => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (this.keywordExists(val)) {
        return;
      }
      await this.addKeywordToState(val);
      this.resetInput();
      this.handleChange();
    } else if (e.key === "Backspace" && !val) {
      this.removeLastKeyword();
    }
  };

  render() {
    return (
      <div className="form-group">
        <label>Community Keywords</label>

        <div className="input-tag">
          <ul className="input-tag__tags">
            {this.getExistingKeywords()}
            <li className="input-tag__tags__input">
              <input
                type="text"
                onKeyDown={this.inputKeyDown}
                ref={c => {
                  this.keywordInput = c;
                }}
              />
            </li>
          </ul>
        </div>
        <small id="keywordInstructions" className="form-text text-muted">
          Type a keyword and press Enter to add the keyword.
        </small>
        <small id="communityKeywords" className="form-text text-muted">
          This community will show in searches for these keywords.
        </small>
      </div>
    );
  }
}
export default CommunityKeywords;
