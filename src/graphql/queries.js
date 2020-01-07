/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCommunity = `query GetCommunity($id: ID!) {
  getCommunity(id: $id) {
    id
    url
    name
    description
    creator
    createdDate
    rules {
      id
      communityId
      summary
      explanation
    }
    locations
    hidden
    hiddenDate
    sitewideReasonsForBeingHidden
    keywords
    tags
    flaggedComments {
      id
      content
      creator
      discussionId
      createdDate
      parentCommentId
      children
      threadId
      hidden
      hiddenDate
      sitewideReasonsForBeingHidden
      communityReasonsForBeingHidden
      upvotes
      downvotes
      funny
      disagree
      dateLastModified
    }
    flaggedDiscussions {
      id
      title
      creator
      communityUrl
      createdDate
      content
      locked
      hidden
      sitewideReasonsForBeingHidden
      communityReasonsForBeingHidden
      hiddenDate
      upvotes
      downvotes
      tags
    }
    moderationLevel
    numberOfUsers
  }
}
`;
export const listCommunitys = `query ListCommunitys(
  $filter: ModelCommunityFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommunitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      name
      description
      creator
      createdDate
      rules {
        id
        communityId
        summary
        explanation
      }
      locations
      hidden
      hiddenDate
      sitewideReasonsForBeingHidden
      keywords
      tags
      flaggedComments {
        id
        content
        creator
        discussionId
        createdDate
        parentCommentId
        children
        threadId
        hidden
        hiddenDate
        sitewideReasonsForBeingHidden
        communityReasonsForBeingHidden
        upvotes
        downvotes
        funny
        disagree
        dateLastModified
      }
      flaggedDiscussions {
        id
        title
        creator
        communityUrl
        createdDate
        content
        locked
        hidden
        sitewideReasonsForBeingHidden
        communityReasonsForBeingHidden
        hiddenDate
        upvotes
        downvotes
        tags
      }
      moderationLevel
      numberOfUsers
    }
    nextToken
  }
}
`;
export const getRule = `query GetRule($id: ID!) {
  getRule(id: $id) {
    id
    communityId
    summary
    explanation
  }
}
`;
export const listRules = `query ListRules(
  $filter: ModelRuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listRules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      communityId
      summary
      explanation
    }
    nextToken
  }
}
`;
export const getBan = `query GetBan($id: ID!) {
  getBan(id: $id) {
    id
    user
    isSitewideBan
    community
    createdDate
    expirationDate
  }
}
`;
export const listBans = `query ListBans($filter: ModelBanFilterInput, $limit: Int, $nextToken: String) {
  listBans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user
      isSitewideBan
      community
      createdDate
      expirationDate
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    creator
    discussionId
    createdDate
    parentCommentId
    children
    threadId
    hidden
    hiddenDate
    sitewideReasonsForBeingHidden
    communityReasonsForBeingHidden
    upvotes
    downvotes
    funny
    disagree
    dateLastModified
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      creator
      discussionId
      createdDate
      parentCommentId
      children
      threadId
      hidden
      hiddenDate
      sitewideReasonsForBeingHidden
      communityReasonsForBeingHidden
      upvotes
      downvotes
      funny
      disagree
      dateLastModified
    }
    nextToken
  }
}
`;
export const getDiscussion = `query GetDiscussion($id: ID!) {
  getDiscussion(id: $id) {
    id
    title
    creator
    communityUrl
    createdDate
    content
    locked
    hidden
    sitewideReasonsForBeingHidden
    communityReasonsForBeingHidden
    hiddenDate
    upvotes
    downvotes
    tags
  }
}
`;
export const listDiscussions = `query ListDiscussions(
  $filter: ModelDiscussionFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiscussions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      creator
      communityUrl
      createdDate
      content
      locked
      hidden
      sitewideReasonsForBeingHidden
      communityReasonsForBeingHidden
      hiddenDate
      upvotes
      downvotes
      tags
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    title
    description
    picture
    startTime
    endTime
    place {
      id
      url
      name
      description
      creator
      createdDate
      rules {
        id
        communityId
        summary
        explanation
      }
      locations
      hidden
      hiddenDate
      sitewideReasonsForBeingHidden
      keywords
      tags
      flaggedComments {
        id
        content
        creator
        discussionId
        createdDate
        parentCommentId
        children
        threadId
        hidden
        hiddenDate
        sitewideReasonsForBeingHidden
        communityReasonsForBeingHidden
        upvotes
        downvotes
        funny
        disagree
        dateLastModified
      }
      flaggedDiscussions {
        id
        title
        creator
        communityUrl
        createdDate
        content
        locked
        hidden
        sitewideReasonsForBeingHidden
        communityReasonsForBeingHidden
        hiddenDate
        upvotes
        downvotes
        tags
      }
      moderationLevel
      numberOfUsers
    }
    organizer {
      id
      email
      profiles {
        id
        username
        humanName
        bio
        pronouns
        location
        picture
        reputation
        accountCreatedDate
      }
      defaultProfile {
        id
        username
        humanName
        bio
        pronouns
        location
        picture
        reputation
        accountCreatedDate
      }
    }
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      picture
      startTime
      endTime
      place {
        id
        url
        name
        description
        creator
        createdDate
        locations
        hidden
        hiddenDate
        sitewideReasonsForBeingHidden
        keywords
        tags
        moderationLevel
        numberOfUsers
      }
      organizer {
        id
        email
      }
    }
    nextToken
  }
}
`;
export const getPrivateMessage = `query GetPrivateMessage($id: ID!) {
  getPrivateMessage(id: $id) {
    id
    title
    content
    author {
      id
      email
      profiles {
        id
        username
        humanName
        bio
        pronouns
        location
        picture
        reputation
        accountCreatedDate
      }
      defaultProfile {
        id
        username
        humanName
        bio
        pronouns
        location
        picture
        reputation
        accountCreatedDate
      }
    }
    sentDate
  }
}
`;
export const listPrivateMessages = `query ListPrivateMessages(
  $filter: ModelPrivateMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      author {
        id
        email
      }
      sentDate
    }
    nextToken
  }
}
`;
export const getReport = `query GetReport($id: ID!) {
  getReport(id: $id) {
    id
    creator
    commentId
    discussionId
    messageId
    complaint
    community {
      id
      url
      name
      description
      creator
      createdDate
      rules {
        id
        communityId
        summary
        explanation
      }
      locations
      hidden
      hiddenDate
      sitewideReasonsForBeingHidden
      keywords
      tags
      flaggedComments {
        id
        content
        creator
        discussionId
        createdDate
        parentCommentId
        children
        threadId
        hidden
        hiddenDate
        sitewideReasonsForBeingHidden
        communityReasonsForBeingHidden
        upvotes
        downvotes
        funny
        disagree
        dateLastModified
      }
      flaggedDiscussions {
        id
        title
        creator
        communityUrl
        createdDate
        content
        locked
        hidden
        sitewideReasonsForBeingHidden
        communityReasonsForBeingHidden
        hiddenDate
        upvotes
        downvotes
        tags
      }
      moderationLevel
      numberOfUsers
    }
    brokenSitewideRules
    brokenCommunityRules
    createdDate
    resolved
  }
}
`;
export const listReports = `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      creator
      commentId
      discussionId
      messageId
      complaint
      community {
        id
        url
        name
        description
        creator
        createdDate
        locations
        hidden
        hiddenDate
        sitewideReasonsForBeingHidden
        keywords
        tags
        moderationLevel
        numberOfUsers
      }
      brokenSitewideRules
      brokenCommunityRules
      createdDate
      resolved
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    profiles {
      id
      username
      humanName
      bio
      pronouns
      location
      picture
      reputation
      accountCreatedDate
    }
    defaultProfile {
      id
      username
      humanName
      bio
      pronouns
      location
      picture
      reputation
      accountCreatedDate
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      profiles {
        id
        username
        humanName
        bio
        pronouns
        location
        picture
        reputation
        accountCreatedDate
      }
      defaultProfile {
        id
        username
        humanName
        bio
        pronouns
        location
        picture
        reputation
        accountCreatedDate
      }
    }
    nextToken
  }
}
`;
export const getProfile = `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    username
    humanName
    bio
    pronouns
    location
    picture
    reputation
    accountCreatedDate
  }
}
`;
export const listProfiles = `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      humanName
      bio
      pronouns
      location
      picture
      reputation
      accountCreatedDate
    }
    nextToken
  }
}
`;
