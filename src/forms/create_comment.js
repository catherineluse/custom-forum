// type Comment @model @searchable {
//     id: ID
//     content: String!
//     author: ID
//     thread_id: ID
//     created_date: AWSDate
//     hidden: Boolean
//     hidden_date: AWSDate
//     sitewide_reasons_for_being_hidden: [String]
//     community_reasons_for_being_hidden: [String]
//     contributed_to_discussion: Int
//     did_not_contribute_to_discussion: Int
//     agree: Int
//     disagree: Int
//     funny: Int
//     date_last_modified: AWSDate
//     parent_comment_id: ID
//   }
import React from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'

class PageContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  onChange = editorState => {
    this.setState({
      editorState
    })
  }

  onItalicClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')
    )
  }

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }
  render () {
    return (
      <div>
        <h1>Comment</h1>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
        <button onClick={this.onItalicClick}>
          <em>I</em>
        </button>
        <button onClick={this.onBoldClick}>
          <em>B</em>
        </button>
        <button onClick={this.onUnderlineClick}>
          <em>U</em>
        </button>
      </div>
    )
  }
}

export default PageContainer
