import { Resolvers, Anime, AnimeStatus } from "../../generated/resolver-types";

const Query: Resolvers["Query"] = {
  async recommendAnime(_, { input }) {
    return [];
  },
  async searchAnime(_, { input }, context) {
    return await context.connector.searchAnime(input)
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
  async createAnime(_, { input }, context) {
    if (context.me?.role !== 'INTERNAL') {
      return false
    }

    return await context.connector.createDbAnime(input);
  },
  async _initSchema(_, { input }, context) {
    if (context.me?.role !== 'INTERNAL' || !input) {
      return false
    }
    return await context.connector.schemaInit()
  }
};

export default {
  Query,
  Mutation,
} as Resolvers;
