// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    title
    description
    picture
    start_time
    end_time
    place
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
      start_time
      end_time
      place
    }
    nextToken
  }
}
`;
export const getModerationCase = `query GetModerationCase($id: ID!) {
  getModerationCase(id: $id) {
    id
    community {
      id
      creator
      rules
      locations
      achievements {
        id
        description
        creator
        pictures
        keywords
        hidden
        date
      }
      keywords
      bannedMembers
      hidden
    }
    commentInQuestion {
      id
      author
      replies {
        id
        author
        upvotes
        downvotes
      }
      upvotes
      downvotes
    }
    privateMessageInQuestion {
      id
      author
      recipient
      content
      date
    }
    complaint
    breaksCommunityRules
    author
    date
  }
}
`;
export const listModerationCases = `query ListModerationCases(
  $filter: ModelModerationCaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listModerationCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      community {
        id
        creator
        rules
        locations
        keywords
        bannedMembers
        hidden
      }
      commentInQuestion {
        id
        author
        upvotes
        downvotes
      }
      privateMessageInQuestion {
        id
        author
        recipient
        content
        date
      }
      complaint
      breaksCommunityRules
      author
      date
    }
    nextToken
  }
}
`;
export const getModerationQueue = `query GetModerationQueue($id: ID!) {
  getModerationQueue(id: $id) {
    id
    cases {
      id
      community {
        id
        creator
        rules
        locations
        keywords
        bannedMembers
        hidden
      }
      commentInQuestion {
        id
        author
        upvotes
        downvotes
      }
      privateMessageInQuestion {
        id
        author
        recipient
        content
        date
      }
      complaint
      breaksCommunityRules
      author
      date
    }
  }
}
`;
export const listModerationQueues = `query ListModerationQueues(
  $filter: ModelModerationQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  listModerationQueues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cases {
        id
        complaint
        breaksCommunityRules
        author
        date
      }
    }
    nextToken
  }
}
`;
export const getPrivateMessage = `query GetPrivateMessage($id: ID!) {
  getPrivateMessage(id: $id) {
    id
    author
    recipient
    content
    date
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
      author
      recipient
      content
      date
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    author
    replies {
      id
      author
      replies {
        id
        author
        upvotes
        downvotes
      }
      upvotes
      downvotes
    }
    upvotes
    downvotes
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
      author
      replies {
        id
        author
        upvotes
        downvotes
      }
      upvotes
      downvotes
    }
    nextToken
  }
}
`;
export const getDiscussion = `query GetDiscussion($id: ID!) {
  getDiscussion(id: $id) {
    id
    community {
      id
      creator
      rules
      locations
      achievements {
        id
        description
        creator
        pictures
        keywords
        hidden
        date
      }
      keywords
      bannedMembers
      hidden
    }
    author
    replies {
      id
      author
      replies {
        id
        author
        upvotes
        downvotes
      }
      upvotes
      downvotes
    }
    upvotes
    downvotes
    locked
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
      community {
        id
        creator
        rules
        locations
        keywords
        bannedMembers
        hidden
      }
      author
      replies {
        id
        author
        upvotes
        downvotes
      }
      upvotes
      downvotes
      locked
    }
    nextToken
  }
}
`;
export const getCommunity = `query GetCommunity($id: ID!) {
  getCommunity(id: $id) {
    id
    creator
    rules
    locations
    achievements {
      id
      community {
        id
        creator
        rules
        locations
        keywords
        bannedMembers
        hidden
      }
      description
      creator
      pictures
      keywords
      hidden
      date
    }
    keywords
    bannedMembers
    hidden
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
      creator
      rules
      locations
      achievements {
        id
        description
        creator
        pictures
        keywords
        hidden
        date
      }
      keywords
      bannedMembers
      hidden
    }
    nextToken
  }
}
`;
export const getAchievement = `query GetAchievement($id: ID!) {
  getAchievement(id: $id) {
    id
    community {
      id
      creator
      rules
      locations
      achievements {
        id
        description
        creator
        pictures
        keywords
        hidden
        date
      }
      keywords
      bannedMembers
      hidden
    }
    description
    creator
    pictures
    keywords
    hidden
    date
  }
}
`;
export const listAchievements = `query ListAchievements(
  $filter: ModelAchievementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAchievements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      community {
        id
        creator
        rules
        locations
        keywords
        bannedMembers
        hidden
      }
      description
      creator
      pictures
      keywords
      hidden
      date
    }
    nextToken
  }
}
`;
export const getUserProfile = `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    id
    name
    bio
    location
    memberOfCommunities {
      id
      creator
      rules
      locations
      achievements {
        id
        description
        creator
        pictures
        keywords
        hidden
        date
      }
      keywords
      bannedMembers
      hidden
    }
    creatorOfCommunities {
      id
      creator
      rules
      locations
      achievements {
        id
        description
        creator
        pictures
        keywords
        hidden
        date
      }
      keywords
      bannedMembers
      hidden
    }
    organizerOfCommunities {
      id
      creator
      rules
      locations
      achievements {
        id
        description
        creator
        pictures
        keywords
        hidden
        date
      }
      keywords
      bannedMembers
      hidden
    }
    picture
    accountCreatedDate
    reputationScore
    achievements {
      id
      community {
        id
        creator
        rules
        locations
        keywords
        bannedMembers
        hidden
      }
      description
      creator
      pictures
      keywords
      hidden
      date
    }
    isSiteWideBanned
    hasInteractedWithUsersByPM
    hasInteractedWithUsresByComment
    deletedAccount
  }
}
`;
export const listUserProfiles = `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      bio
      location
      memberOfCommunities {
        id
        creator
        rules
        locations
        keywords
        bannedMembers
        hidden
      }
      creatorOfCommunities {
        id
        creator
        rules
        locations
        keywords
        bannedMembers
        hidden
      }
      organizerOfCommunities {
        id
        creator
        rules
        locations
        keywords
        bannedMembers
        hidden
      }
      picture
      accountCreatedDate
      reputationScore
      achievements {
        id
        description
        creator
        pictures
        keywords
        hidden
        date
      }
      isSiteWideBanned
      hasInteractedWithUsersByPM
      hasInteractedWithUsresByComment
      deletedAccount
    }
    nextToken
  }
}
`;
