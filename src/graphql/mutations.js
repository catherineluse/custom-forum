// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createModerationCase = `mutation CreateModerationCase($input: CreateModerationCaseInput!) {
  createModerationCase(input: $input) {
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
export const updateModerationCase = `mutation UpdateModerationCase($input: UpdateModerationCaseInput!) {
  updateModerationCase(input: $input) {
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
export const deleteModerationCase = `mutation DeleteModerationCase($input: DeleteModerationCaseInput!) {
  deleteModerationCase(input: $input) {
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
export const createModerationQueue = `mutation CreateModerationQueue($input: CreateModerationQueueInput!) {
  createModerationQueue(input: $input) {
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
export const updateModerationQueue = `mutation UpdateModerationQueue($input: UpdateModerationQueueInput!) {
  updateModerationQueue(input: $input) {
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
export const deleteModerationQueue = `mutation DeleteModerationQueue($input: DeleteModerationQueueInput!) {
  deleteModerationQueue(input: $input) {
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
export const createPrivateMessage = `mutation CreatePrivateMessage($input: CreatePrivateMessageInput!) {
  createPrivateMessage(input: $input) {
    id
    author
    recipient
    content
    date
  }
}
`;
export const updatePrivateMessage = `mutation UpdatePrivateMessage($input: UpdatePrivateMessageInput!) {
  updatePrivateMessage(input: $input) {
    id
    author
    recipient
    content
    date
  }
}
`;
export const deletePrivateMessage = `mutation DeletePrivateMessage($input: DeletePrivateMessageInput!) {
  deletePrivateMessage(input: $input) {
    id
    author
    recipient
    content
    date
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createDiscussion = `mutation CreateDiscussion($input: CreateDiscussionInput!) {
  createDiscussion(input: $input) {
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
export const updateDiscussion = `mutation UpdateDiscussion($input: UpdateDiscussionInput!) {
  updateDiscussion(input: $input) {
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
export const deleteDiscussion = `mutation DeleteDiscussion($input: DeleteDiscussionInput!) {
  deleteDiscussion(input: $input) {
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
export const createCommunity = `mutation CreateCommunity($input: CreateCommunityInput!) {
  createCommunity(input: $input) {
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
export const updateCommunity = `mutation UpdateCommunity($input: UpdateCommunityInput!) {
  updateCommunity(input: $input) {
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
export const deleteCommunity = `mutation DeleteCommunity($input: DeleteCommunityInput!) {
  deleteCommunity(input: $input) {
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
export const createAchievement = `mutation CreateAchievement($input: CreateAchievementInput!) {
  createAchievement(input: $input) {
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
export const updateAchievement = `mutation UpdateAchievement($input: UpdateAchievementInput!) {
  updateAchievement(input: $input) {
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
export const deleteAchievement = `mutation DeleteAchievement($input: DeleteAchievementInput!) {
  deleteAchievement(input: $input) {
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
export const createUserProfile = `mutation CreateUserProfile($input: CreateUserProfileInput!) {
  createUserProfile(input: $input) {
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
export const updateUserProfile = `mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
  updateUserProfile(input: $input) {
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
export const deleteUserProfile = `mutation DeleteUserProfile($input: DeleteUserProfileInput!) {
  deleteUserProfile(input: $input) {
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
