
    const data = `enum AnimeStatus {
  airing
  upcoming
  finished
  cancelled
}

enum AnimeFormat {
  tv
  movie
}

type Anime {
  title: String!
  description: String!
  minutesPerEpisode: Int!
  episodeCount: Int!
  genre: [Genre!]!
  tags: [Tag!]
  id: ID!
  status: AnimeStatus!
  isoAired: String!
  format: AnimeFormat!
  coverImage: String!
  bannerImage: String
}

type Genre {
  averageRating: Float!
  name: String!
  id: ID!
}

input GenreInput {
  name: String!
}

type Tag {
  id: ID!
  name: String!
}

input TagInput {
  name: String!
  description: String
}

input RateGenreInput {
  rating: Float!
  id: ID!
}

input SearchAnimeInput {
  searchText: String!
  limit: Int
}

input SearchGenreInput {
  searchText: String!
  limit: Int
}

input RateAnimeInput {
  animeId: ID!
  genre: [RateGenreInput!]!
  tags: [ID!]
}

input RecommendAnimeInputGenreInput {
  proportion: Float!
  id: ID!
}

input RecommendAnimeInput {
  genre: [RecommendAnimeInputGenreInput!]!
  tags: [ID!]
  blackList: [ID!]
  moodPoint: Int
}

input AnimeInput {
  title: String!
  description: String!
  minutesPerEpisode: Int!
  episodeCount: Int!
  genre: [GenreInput!]!
  tags: [TagInput!]
  id: ID!
  status: AnimeStatus!
  isoAired: String!
  coverImage: String!
  bannerImage: String
  format: AnimeFormat!
}

input CreateAnimeInput {
  anime: [AnimeInput!]!
}

type Query {
  searchAnime(input: SearchAnimeInput!): [Anime!]!
  searchGenre(input: SearchGenreInput!): [Genre!]!
  searchTags(input: SearchGenreInput!): [Tag!]!
  recommendAnime(input: RecommendAnimeInput!): [Anime!]!
}

type Mutation {
  rateAnime(input: RateAnimeInput!): Boolean!
  createAnime(input: CreateAnimeInput!): Boolean!
  _initSchema(input: Boolean!): Boolean!
}
`
    export default data
    