// type Ban @model @searchable {
//     id: ID
//     user: User
//     is_sitewide_ban: Boolean
//     community: Community
//     createdDate: AWSDate
//     expirationDate: AWSDate
//   }

// type Report @model @searchable {
//     id: ID
//     creator: ID
//     comment: Comment
//     discussion: Discussion
//     message: PrivateMessage
//     complaint: String!
//     community: Community
//     broken_sitewide_rules: [String]
//     broken_community_rules: [String]
//     author: User
//     createdDate: AWSDate
//     resolved: Boolean
//   }
