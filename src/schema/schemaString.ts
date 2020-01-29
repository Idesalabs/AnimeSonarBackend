
    const data = `type Anime {
  title: String!
  description: String!
  minutesPerEpisode: Int!
  episodeCount: Int!
  tags: [Tag!]!
  subTags: [SubTag!]
  id: ID!
}

type Tag {
  averageRating: Float!
  name: String!
  id: ID!
}

type SubTag {
  id: ID!
  name: String!
}

input TagInput {
  rating: Float!
  id: ID!
}

input SearchAnimeInput {
  searchText: String!
  limit: String
}

input SearchTagsInput {
  searchText: String!
  limit: String
}

input RateAnimeInput {
  animeId: ID!
  tags: [TagInput!]!
  subTags: [ID!]
}

input RecommendAnimeInputTagInput {
  proportion: Float!
  id: ID!
}

input RecommendAnimeInput {
  tags: [RecommendAnimeInputTagInput!]!
  subTags: [String!]
  blackList: [ID!]
  moodPoint: Int
}

type Query {
  searchAnime(input: SearchAnimeInput!): [Anime!]!
  searchTags(input: SearchTagsInput!): [Tag!]!
  searchSubTags(input: SearchTagsInput!): [SubTag!]!
  recommendAnime(input: RecommendAnimeInput!): [Anime!]!
}

type Mutation {
  rateAnime(input: RateAnimeInput!): Boolean!
}
`
    export default data
    