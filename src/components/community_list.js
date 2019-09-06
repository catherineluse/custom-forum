import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import {
  createCommunity,
  deleteCommunity,
  updateCommunity
} from '../../graphql/queries'

// Community graphql schema:
// type Community @model @searchable {
//     id: ID
//     url: String
//     name: String!
//     description: String
//     creator: ID
//     created_date: AWSDate
//     rules: [String]
//     locations: [String]
//     hidden: Boolean
//     hidden_date: AWSDate
//     sitewide_reasons_for_being_hidden: [String]
//     keywords: [String]
//     flagged_comments: [Comment]
//     flagged_discussions: [Discussion]
//   }

// Rules, locations, keywords

class CommunityForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            communityName: '',
            description: ''
          }
        
    }

  handleAddCommunity = async event => {
    event.preventDefault()

    const { communityName, description } = this.state
    const input = {
      name: communityName,
      description: description
    }
    console.log("the input is " + JSON.stringify(input))

    const result = await API.graphql(
      graphqlOperation(createCommunity, { input })
    )

    console.log(
      'the api result is ' + JSON.stringify(result.data.createCommunity)
    )
    this.setState({ communityName: '', description: '' })
  }

  handleChangeCommunityName = event => {
    console.log('changed community name instate')
    this.setState({ communityName: event.target.value })
  }

  handleChangeDescription = event => {
    this.setState({ description: event.target.value })
  }

  render () {
    return (
      <form onSubmit={this.handleAddCommunity}>
        <h1>Create Community</h1>
        <div className='form-group'>
          <label name='communityName'>Community Name</label>
          <input
            name='communityName'
            type='text'
            onChange={this.handleChangeCommunityName}
          />
        </div>
        <div className='form-group'>
          <label name='communityDescription'>Description</label>
          <input
            name='description'
            type='text'
            onChange={this.handleChangeDescription}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary mr-2'>
            Register
          </button>
          <button type='reset' className='btn btn-secondary'>
            Reset
          </button>
        </div>
      </form>
    )
  }
}

export default CommunityForm
