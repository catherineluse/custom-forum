// type User @model @searchable {
//     id: ID
//     profiles: [Profile]
//     default_profile: Profile
//     community_profile_mappings: [CommunityProfileMapping]
//   }

// type Profile @model @searchable {
//     id: ID
//     username: String!
//     real_sounding_name: String
//     bio: String
//     location: String
//     picture: String
//     reputation: Int
//     account_created_date: AWSDate
//     birth_date: AWSDate
//     bans: [Ban]
//     member_of: [Community]
//     moderator_of: [Community]
//     creator_of: [Community]
//   }
