/* eslint-disable */
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
    tags
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
        email
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
    moderation_level
    number_of_users
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
      tags
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
      moderation_level
      number_of_users
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
      email
      profiles {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
      }
      default_profile {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
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
      tags
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
      moderation_level
      number_of_users
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
        email
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
        tags
        moderation_level
        number_of_users
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
      email
      profiles {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
      }
      default_profile {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
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
        email
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
      tags
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
      moderation_level
      number_of_users
    }
    organizer {
      id
      email
      profiles {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
      }
      default_profile {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
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
        tags
        moderation_level
        number_of_users
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
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
      }
      default_profile {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
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
        email
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
        email
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
      tags
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
      moderation_level
      number_of_users
    }
    broken_sitewide_rules
    broken_community_rules
    author {
      id
      email
      profiles {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
      }
      default_profile {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
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
        tags
        moderation_level
        number_of_users
      }
      broken_sitewide_rules
      broken_community_rules
      author {
        id
        email
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
    email
    profiles {
      id
      username
      real_sounding_name
      bio
      pronouns
      location
      picture
      reputation
      account_created_date
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
        tags
        moderation_level
        number_of_users
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
        tags
        moderation_level
        number_of_users
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
        tags
        moderation_level
        number_of_users
      }
    }
    default_profile {
      id
      username
      real_sounding_name
      bio
      pronouns
      location
      picture
      reputation
      account_created_date
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
        tags
        moderation_level
        number_of_users
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
        tags
        moderation_level
        number_of_users
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
        tags
        moderation_level
        number_of_users
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
      email
      profiles {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
      }
      default_profile {
        id
        username
        real_sounding_name
        bio
        pronouns
        location
        picture
        reputation
        account_created_date
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
    real_sounding_name
    bio
    pronouns
    location
    picture
    reputation
    account_created_date
    bans {
      id
      user {
        id
        email
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
        tags
        moderation_level
        number_of_users
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
      tags
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
      moderation_level
      number_of_users
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
      tags
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
      moderation_level
      number_of_users
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
      tags
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
      moderation_level
      number_of_users
    }
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
      real_sounding_name
      bio
      pronouns
      location
      picture
      reputation
      account_created_date
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
        tags
        moderation_level
        number_of_users
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
        tags
        moderation_level
        number_of_users
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
        tags
        moderation_level
        number_of_users
      }
    }
    nextToken
  }
}
`;
