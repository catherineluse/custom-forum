// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateModerationCase = `subscription OnCreateModerationCase {
  onCreateModerationCase {
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
export const onUpdateModerationCase = `subscription OnUpdateModerationCase {
  onUpdateModerationCase {
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
export const onDeleteModerationCase = `subscription OnDeleteModerationCase {
  onDeleteModerationCase {
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
export const onCreateModerationQueue = `subscription OnCreateModerationQueue {
  onCreateModerationQueue {
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
export const onUpdateModerationQueue = `subscription OnUpdateModerationQueue {
  onUpdateModerationQueue {
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
export const onDeleteModerationQueue = `subscription OnDeleteModerationQueue {
  onDeleteModerationQueue {
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
export const onCreatePrivateMessage = `subscription OnCreatePrivateMessage {
  onCreatePrivateMessage {
    id
    author
    recipient
    content
    date
  }
}
`;
export const onUpdatePrivateMessage = `subscription OnUpdatePrivateMessage {
  onUpdatePrivateMessage {
    id
    author
    recipient
    content
    date
  }
}
`;
export const onDeletePrivateMessage = `subscription OnDeletePrivateMessage {
  onDeletePrivateMessage {
    id
    author
    recipient
    content
    date
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateDiscussion = `subscription OnCreateDiscussion {
  onCreateDiscussion {
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
export const onUpdateDiscussion = `subscription OnUpdateDiscussion {
  onUpdateDiscussion {
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
export const onDeleteDiscussion = `subscription OnDeleteDiscussion {
  onDeleteDiscussion {
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
export const onCreateCommunity = `subscription OnCreateCommunity {
  onCreateCommunity {
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
export const onUpdateCommunity = `subscription OnUpdateCommunity {
  onUpdateCommunity {
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
export const onDeleteCommunity = `subscription OnDeleteCommunity {
  onDeleteCommunity {
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
export const onCreateAchievement = `subscription OnCreateAchievement {
  onCreateAchievement {
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
export const onUpdateAchievement = `subscription OnUpdateAchievement {
  onUpdateAchievement {
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
export const onDeleteAchievement = `subscription OnDeleteAchievement {
  onDeleteAchievement {
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
export const onCreateUserProfile = `subscription OnCreateUserProfile {
  onCreateUserProfile {
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
export const onUpdateUserProfile = `subscription OnUpdateUserProfile {
  onUpdateUserProfile {
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
export const onDeleteUserProfile = `subscription OnDeleteUserProfile {
  onDeleteUserProfile {
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
