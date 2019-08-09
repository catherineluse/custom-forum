// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCommunity = `query GetCommunity($id: ID!) {
  getCommunity(id: $id) {
    id
    url
    name
    description
    creator
    created_date
    rules
    locations
    hidden
    hidden_date
    sitewide_reasons_for_being_hidden
    keywords
    flagged_comments {
      id
      content
      author
      thread_id
      created_date
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      community_reasons_for_being_hidden
      contributed_to_discussion
      did_not_contribute_to_discussion
      agree
      disagree
      funny
      date_last_modified
      parent_comment_id
    }
    flagged_discussions {
      id
      headline
      creator {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      created_date
      date_last_edited
      description
      locked
      hidden
      sitewide_reasons_for_being_hidden
      community_reasons_for_being_hidden
      hidden_date
      upvotes
      downvotes
      keywords
    }
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
      created_date
      rules
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      flagged_comments {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      flagged_discussions {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
    }
    nextToken
  }
}
`;
export const getBan = `query GetBan($id: ID!) {
  getBan(id: $id) {
    id
    user {
      id
      username
      real_sounding_name
      bio
      location
      picture
      reputation
      account_created_date
      birth_date
      bans {
        id
        is_sitewide_ban
        createdDate
        expirationDate
      }
      member_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      moderator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      creator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
    }
    is_sitewide_ban
    community {
      id
      url
      name
      description
      creator
      created_date
      rules
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      flagged_comments {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      flagged_discussions {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
    }
    createdDate
    expirationDate
  }
}
`;
export const listBans = `query ListBans($filter: ModelBanFilterInput, $limit: Int, $nextToken: String) {
  listBans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      is_sitewide_ban
      community {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
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
    author
    thread_id
    created_date
    hidden
    hidden_date
    sitewide_reasons_for_being_hidden
    community_reasons_for_being_hidden
    contributed_to_discussion
    did_not_contribute_to_discussion
    agree
    disagree
    funny
    date_last_modified
    parent_comment_id
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
      author
      thread_id
      created_date
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      community_reasons_for_being_hidden
      contributed_to_discussion
      did_not_contribute_to_discussion
      agree
      disagree
      funny
      date_last_modified
      parent_comment_id
    }
    nextToken
  }
}
`;
export const getDiscussion = `query GetDiscussion($id: ID!) {
  getDiscussion(id: $id) {
    id
    headline
    creator {
      id
      username
      real_sounding_name
      bio
      location
      picture
      reputation
      account_created_date
      birth_date
      bans {
        id
        is_sitewide_ban
        createdDate
        expirationDate
      }
      member_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      moderator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      creator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
    }
    created_date
    date_last_edited
    description
    locked
    hidden
    sitewide_reasons_for_being_hidden
    community_reasons_for_being_hidden
    hidden_date
    upvotes
    downvotes
    keywords
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
      headline
      creator {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      created_date
      date_last_edited
      description
      locked
      hidden
      sitewide_reasons_for_being_hidden
      community_reasons_for_being_hidden
      hidden_date
      upvotes
      downvotes
      keywords
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
    start_time
    end_time
    place {
      id
      url
      name
      description
      creator
      created_date
      rules
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      flagged_comments {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      flagged_discussions {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
    }
    organizer {
      id
      username
      real_sounding_name
      bio
      location
      picture
      reputation
      account_created_date
      birth_date
      bans {
        id
        is_sitewide_ban
        createdDate
        expirationDate
      }
      member_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      moderator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      creator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
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
      start_time
      end_time
      place {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      organizer {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
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
      username
      real_sounding_name
      bio
      location
      picture
      reputation
      account_created_date
      birth_date
      bans {
        id
        is_sitewide_ban
        createdDate
        expirationDate
      }
      member_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      moderator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      creator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
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
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
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
    comment {
      id
      content
      author
      thread_id
      created_date
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      community_reasons_for_being_hidden
      contributed_to_discussion
      did_not_contribute_to_discussion
      agree
      disagree
      funny
      date_last_modified
      parent_comment_id
    }
    discussion {
      id
      headline
      creator {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      created_date
      date_last_edited
      description
      locked
      hidden
      sitewide_reasons_for_being_hidden
      community_reasons_for_being_hidden
      hidden_date
      upvotes
      downvotes
      keywords
    }
    message {
      id
      title
      content
      author {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      sentDate
    }
    complaint
    community {
      id
      url
      name
      description
      creator
      created_date
      rules
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      flagged_comments {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      flagged_discussions {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
    }
    broken_sitewide_rules
    broken_community_rules
    author {
      id
      username
      real_sounding_name
      bio
      location
      picture
      reputation
      account_created_date
      birth_date
      bans {
        id
        is_sitewide_ban
        createdDate
        expirationDate
      }
      member_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      moderator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      creator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
    }
    created_date
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
      comment {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      discussion {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
      message {
        id
        title
        content
        sentDate
      }
      complaint
      community {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      broken_sitewide_rules
      broken_community_rules
      author {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      created_date
      resolved
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    real_sounding_name
    bio
    location
    picture
    reputation
    account_created_date
    birth_date
    bans {
      id
      user {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      is_sitewide_ban
      community {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      createdDate
      expirationDate
    }
    member_of {
      id
      url
      name
      description
      creator
      created_date
      rules
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      flagged_comments {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      flagged_discussions {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
    }
    moderator_of {
      id
      url
      name
      description
      creator
      created_date
      rules
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      flagged_comments {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      flagged_discussions {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
    }
    creator_of {
      id
      url
      name
      description
      creator
      created_date
      rules
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      flagged_comments {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      flagged_discussions {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
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
      username
      real_sounding_name
      bio
      location
      picture
      reputation
      account_created_date
      birth_date
      bans {
        id
        is_sitewide_ban
        createdDate
        expirationDate
      }
      member_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      moderator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      creator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
    }
    nextToken
  }
}
`;
export const searchCommunitys = `query SearchCommunitys(
  $filter: SearchableCommunityFilterInput
  $sort: SearchableCommunitySortInput
  $limit: Int
  $nextToken: Int
) {
  searchCommunitys(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      url
      name
      description
      creator
      created_date
      rules
      locations
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      keywords
      flagged_comments {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      flagged_discussions {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
    }
    nextToken
  }
}
`;
export const searchBans = `query SearchBans(
  $filter: SearchableBanFilterInput
  $sort: SearchableBanSortInput
  $limit: Int
  $nextToken: Int
) {
  searchBans(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      user {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      is_sitewide_ban
      community {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      createdDate
      expirationDate
    }
    nextToken
  }
}
`;
export const searchComments = `query SearchComments(
  $filter: SearchableCommentFilterInput
  $sort: SearchableCommentSortInput
  $limit: Int
  $nextToken: Int
) {
  searchComments(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      author
      thread_id
      created_date
      hidden
      hidden_date
      sitewide_reasons_for_being_hidden
      community_reasons_for_being_hidden
      contributed_to_discussion
      did_not_contribute_to_discussion
      agree
      disagree
      funny
      date_last_modified
      parent_comment_id
    }
    nextToken
  }
}
`;
export const searchDiscussions = `query SearchDiscussions(
  $filter: SearchableDiscussionFilterInput
  $sort: SearchableDiscussionSortInput
  $limit: Int
  $nextToken: Int
) {
  searchDiscussions(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      headline
      creator {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      created_date
      date_last_edited
      description
      locked
      hidden
      sitewide_reasons_for_being_hidden
      community_reasons_for_being_hidden
      hidden_date
      upvotes
      downvotes
      keywords
    }
    nextToken
  }
}
`;
export const searchEvents = `query SearchEvents(
  $filter: SearchableEventFilterInput
  $sort: SearchableEventSortInput
  $limit: Int
  $nextToken: Int
) {
  searchEvents(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      picture
      start_time
      end_time
      place {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      organizer {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
    }
    nextToken
  }
}
`;
export const searchPrivateMessages = `query SearchPrivateMessages(
  $filter: SearchablePrivateMessageFilterInput
  $sort: SearchablePrivateMessageSortInput
  $limit: Int
  $nextToken: Int
) {
  searchPrivateMessages(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      content
      author {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      sentDate
    }
    nextToken
  }
}
`;
export const searchReports = `query SearchReports(
  $filter: SearchableReportFilterInput
  $sort: SearchableReportSortInput
  $limit: Int
  $nextToken: Int
) {
  searchReports(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      creator
      comment {
        id
        content
        author
        thread_id
        created_date
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        contributed_to_discussion
        did_not_contribute_to_discussion
        agree
        disagree
        funny
        date_last_modified
        parent_comment_id
      }
      discussion {
        id
        headline
        created_date
        date_last_edited
        description
        locked
        hidden
        sitewide_reasons_for_being_hidden
        community_reasons_for_being_hidden
        hidden_date
        upvotes
        downvotes
        keywords
      }
      message {
        id
        title
        content
        sentDate
      }
      complaint
      community {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      broken_sitewide_rules
      broken_community_rules
      author {
        id
        username
        real_sounding_name
        bio
        location
        picture
        reputation
        account_created_date
        birth_date
      }
      created_date
      resolved
    }
    nextToken
  }
}
`;
export const searchUsers = `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: SearchableUserSortInput
  $limit: Int
  $nextToken: Int
) {
  searchUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      username
      real_sounding_name
      bio
      location
      picture
      reputation
      account_created_date
      birth_date
      bans {
        id
        is_sitewide_ban
        createdDate
        expirationDate
      }
      member_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      moderator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
      creator_of {
        id
        url
        name
        description
        creator
        created_date
        rules
        locations
        hidden
        hidden_date
        sitewide_reasons_for_being_hidden
        keywords
      }
    }
    nextToken
  }
}
`;
