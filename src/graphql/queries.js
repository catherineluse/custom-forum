// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCommunity = `query GetCommunity($id: ID!) {
  getCommunity(id: $id) {
    id
    name
    creator
    rules
    locations
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
      name
      creator
      rules
      locations
      keywords
      bannedMembers
      hidden
    }
    nextToken
  }
}
`;
