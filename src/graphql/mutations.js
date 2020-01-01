/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCommunity = `mutation CreateCommunity($input: CreateCommunityInput!) {
  createCommunity(input: $input) {
    id
    url
    name
    description
    creator
    created_date
    rules {
      id
      community_id
      summary
      explanation
    }
    locations
    hidden
    hidden_date
    sitewide_reasons_for_being_hidden
    keywords
    tags
    flagged_comments {
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
    flagged_discussions {
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
    moderation_level
    number_of_users
  }
}
`;
export const updateCommunity = `mutation UpdateCommunity($input: UpdateCommunityInput!) {
  updateCommunity(input: $input) {
    id
    url
    name
    description
    creator
    created_date
    rules {
      id
      community_id
      summary
      explanation
    }
    locations
    hidden
    hidden_date
    sitewide_reasons_for_being_hidden
    keywords
    tags
    flagged_comments {
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
    flagged_discussions {
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
    moderation_level
    number_of_users
  }
}
`;
export const deleteCommunity = `mutation DeleteCommunity($input: DeleteCommunityInput!) {
  deleteCommunity(input: $input) {
    id
    url
    name
    description
    creator
    created_date
    rules {
      id
      community_id
      summary
      explanation
    }
    locations
    hidden
    hidden_date
    sitewide_reasons_for_being_hidden
    keywords
    tags
    flagged_comments {
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
    flagged_discussions {
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
    moderation_level
    number_of_users
  }
}
`;
export const createRule = `mutation CreateRule($input: CreateRuleInput!) {
  createRule(input: $input) {
    id
    community_id
    summary
    explanation
  }
}
`;
export const updateRule = `mutation UpdateRule($input: UpdateRuleInput!) {
  updateRule(input: $input) {
    id
    community_id
    summary
    explanation
  }
}
`;
export const deleteRule = `mutation DeleteRule($input: DeleteRuleInput!) {
  deleteRule(input: $input) {
    id
    community_id
    summary
    explanation
  }
}
`;
export const createBan = `mutation CreateBan($input: CreateBanInput!) {
  createBan(input: $input) {
    id
    user
    isSitewideBan
    community
    createdDate
    expirationDate
  }
}
`;
export const updateBan = `mutation UpdateBan($input: UpdateBanInput!) {
  updateBan(input: $input) {
    id
    user
    isSitewideBan
    community
    createdDate
    expirationDate
  }
}
`;
export const deleteBan = `mutation DeleteBan($input: DeleteBanInput!) {
  deleteBan(input: $input) {
    id
    user
    isSitewideBan
    community
    createdDate
    expirationDate
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createDiscussion = `mutation CreateDiscussion($input: CreateDiscussionInput!) {
  createDiscussion(input: $input) {
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
export const updateDiscussion = `mutation UpdateDiscussion($input: UpdateDiscussionInput!) {
  updateDiscussion(input: $input) {
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
export const deleteDiscussion = `mutation DeleteDiscussion($input: DeleteDiscussionInput!) {
  deleteDiscussion(input: $input) {
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
      created_date
      rules {
        id
        community_id
        summary
        explanation
      }
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      tags
      flagged_comments {
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
      flagged_discussions {
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
      moderation_level
      number_of_users
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
      created_date
      rules {
        id
        community_id
        summary
        explanation
      }
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      tags
      flagged_comments {
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
      flagged_discussions {
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
      moderation_level
      number_of_users
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
      created_date
      rules {
        id
        community_id
        summary
        explanation
      }
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      tags
      flagged_comments {
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
      flagged_discussions {
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
      moderation_level
      number_of_users
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
export const createPrivateMessage = `mutation CreatePrivateMessage($input: CreatePrivateMessageInput!) {
  createPrivateMessage(input: $input) {
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
export const updatePrivateMessage = `mutation UpdatePrivateMessage($input: UpdatePrivateMessageInput!) {
  updatePrivateMessage(input: $input) {
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
export const deletePrivateMessage = `mutation DeletePrivateMessage($input: DeletePrivateMessageInput!) {
  deletePrivateMessage(input: $input) {
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
export const createReport = `mutation CreateReport($input: CreateReportInput!) {
  createReport(input: $input) {
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
      created_date
      rules {
        id
        community_id
        summary
        explanation
      }
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      tags
      flagged_comments {
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
      flagged_discussions {
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
      moderation_level
      number_of_users
    }
    brokenSitewideRules
    brokenCommunityRules
    createdDate
    resolved
  }
}
`;
export const updateReport = `mutation UpdateReport($input: UpdateReportInput!) {
  updateReport(input: $input) {
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
      created_date
      rules {
        id
        community_id
        summary
        explanation
      }
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      tags
      flagged_comments {
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
      flagged_discussions {
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
      moderation_level
      number_of_users
    }
    brokenSitewideRules
    brokenCommunityRules
    createdDate
    resolved
  }
}
`;
export const deleteReport = `mutation DeleteReport($input: DeleteReportInput!) {
  deleteReport(input: $input) {
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
      created_date
      rules {
        id
        community_id
        summary
        explanation
      }
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      tags
      flagged_comments {
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
      flagged_discussions {
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
      moderation_level
      number_of_users
    }
    brokenSitewideRules
    brokenCommunityRules
    createdDate
    resolved
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createProfile = `mutation CreateProfile($input: CreateProfileInput!) {
  createProfile(input: $input) {
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
export const updateProfile = `mutation UpdateProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
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
export const deleteProfile = `mutation DeleteProfile($input: DeleteProfileInput!) {
  deleteProfile(input: $input) {
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
