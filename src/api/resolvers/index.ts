import { Resolvers, Anime, AnimeStatus } from "../../generated/resolver-types";

const Query: Resolvers["Query"] = {
  async recommendAnime(_, { input }) {
    return [];
  },
  async searchAnime(_, { input: { limit, searchText } }) {
    return [];
  },
  async searchGenre(_, { input }) {
    return [];
  },
  async searchTags(_, { input }) {
    return [];
  },
};

const Mutation: Resolvers["Mutation"] = {
  async rateAnime(_, { input }) {
    return true;
  },
  async createAnime(_, { input: { anime } }) {
    return true;
  },
};

export default {
  Query,
  Mutation,
} as Resolvers;
