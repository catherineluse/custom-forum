import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import {
  createCommunity,
  deleteCommunity,
  updateCommunity
} from './graphql/mutations'
import { listCommunitys } from './graphql/queries'
import CommunityForm from './forms/CommunityForm/create_edit_community'

class App extends Component {
  state = {
    communityId: '',
    communityName: '',
    communityCreator: 'test creator',
    communities: []
  }

  async componentDidMount () {
    const result = await API.graphql(graphqlOperation(listCommunitys))
    this.setState({ notes: result.data.listCommunitys.items })
  }

  handleChangeCommunityName = event => {
    this.setState({ communityName: event.target.value })
  }

  handleChangeCommunityCreatorName = event => {
    this.setState({ communityCreator: event.target.value })
  }

  hasExistingCommunity = () => {
    const { communities, communityId } = this.state
    if (communityId) {
      const isCommunity =
        communities.findIndex(community => community.id === communityId) > -1
      return isCommunity
    }
    return false
  }

  handleAddCommunity = async event => {
    event.preventDefault()
    // Check if we have an existing community. If so, update it
    if (this.hasExistingCommunity()) {
      console.log('community updated!')
    } else {
      const { communityName, communityCreator, communities } = this.state
      const input = {
        name: communityName,
        creator: communityCreator
      }

      const result = await API.graphql(
        graphqlOperation(createCommunity, { input })
      )

      console.log(
        'the api result is ' + JSON.stringify(result.data.createCommunity)
      )
      const newCommunity = result.data.createCommunity

      const updatedCommunities = [newCommunity, ...communities]
      this.setState({ communities: updatedCommunities, communityName: '' })
    }
  }

  handleUpdateCommunity = async () => {
    const { communities, id, note } = this.state
    const input = { id, note }
    const result = await API.graphql(
      graphqlOperation(updateCommunity, { input })
    )
    const updatedCommunity = result.data.updateCommunity
    const index = communities.findIndex(
      community => note.id === updatedCommunity.id
    )
    const updatedCommunities = [
      ...communities.slice(0, index),
      updatedCommunity,
      ...communities.slice(index + 1)
    ]
    this.setState({ notes: updatedCommunities, note: '', id: '' })
  }

  handleDeleteCommunity = async communityId => {
    const { communities } = this.state
    const input = {
      id: communityId
    }
    const result = await API.graphql(
      graphqlOperation(deleteCommunity, { input })
    )
    const deletedCommunityId = result.data.deleteCommunity.id
    const updatedCommunities = communities.filter(
      community => community.id !== deletedCommunityId
    )
    this.setState({ communities: updatedCommunities })
  }

  handleSetCommunity = ({ communityName, communityId }) =>
    this.setState({ communityName, communityId })

  render () {
    const { id, communities, communityName } = this.state

    return (
      <div className='container'>
        <CommunityForm />

        {/* Community List */}
        <div>
          {communities.map(item => (
            <div
              onSubmit={this.handleAddCommunity}
              key={item.id}
              className='flex items-center'
            >
              <li
                onClick={() => this.handleSetCommunity(item)}
                className='list pa1 f3'
              >
                {item.name}
              </li>
              <button
                onClick={() => this.handleDeleteCommunity(item.id)}
                className='bg-transparent bn f4'
              >
                <span>&times;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withAuthenticator(App)
