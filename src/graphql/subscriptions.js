/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommunity = `subscription OnCreateCommunity {
  onCreateCommunity {
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
export const onUpdateCommunity = `subscription OnUpdateCommunity {
  onUpdateCommunity {
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
export const onDeleteCommunity = `subscription OnDeleteCommunity {
  onDeleteCommunity {
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
export const onCreateRule = `subscription OnCreateRule {
  onCreateRule {
    id
    communityId
    summary
    explanation
  }
}
`;
export const onUpdateRule = `subscription OnUpdateRule {
  onUpdateRule {
    id
    communityId
    summary
    explanation
  }
}
`;
export const onDeleteRule = `subscription OnDeleteRule {
  onDeleteRule {
    id
    communityId
    summary
    explanation
  }
}
`;
export const onCreateBan = `subscription OnCreateBan {
  onCreateBan {
    id
    user
    isSitewideBan
    community
    createdDate
    expirationDate
  }
}
`;
export const onUpdateBan = `subscription OnUpdateBan {
  onUpdateBan {
    id
    user
    isSitewideBan
    community
    createdDate
    expirationDate
  }
}
`;
export const onDeleteBan = `subscription OnDeleteBan {
  onDeleteBan {
    id
    user
    isSitewideBan
    community
    createdDate
    expirationDate
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateDiscussion = `subscription OnCreateDiscussion {
  onCreateDiscussion {
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
export const onUpdateDiscussion = `subscription OnUpdateDiscussion {
  onUpdateDiscussion {
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
export const onDeleteDiscussion = `subscription OnDeleteDiscussion {
  onDeleteDiscussion {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreatePrivateMessage = `subscription OnCreatePrivateMessage {
  onCreatePrivateMessage {
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
export const onUpdatePrivateMessage = `subscription OnUpdatePrivateMessage {
  onUpdatePrivateMessage {
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
export const onDeletePrivateMessage = `subscription OnDeletePrivateMessage {
  onDeletePrivateMessage {
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
export const onCreateReport = `subscription OnCreateReport {
  onCreateReport {
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
export const onUpdateReport = `subscription OnUpdateReport {
  onUpdateReport {
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
export const onDeleteReport = `subscription OnDeleteReport {
  onDeleteReport {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateProfile = `subscription OnCreateProfile {
  onCreateProfile {
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
export const onUpdateProfile = `subscription OnUpdateProfile {
  onUpdateProfile {
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
export const onDeleteProfile = `subscription OnDeleteProfile {
  onDeleteProfile {
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
