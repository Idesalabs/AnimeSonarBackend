import { QueryResolvers, MutationResolvers } from '../generated/graphqlgen';

const Query: QueryResolvers.Type = {
    async recommendAnime(_, { input }) {
        return []
    },
    async searchAnime(_, { input }) {
        return []
    },
    async searchSubTags(_, { input }) {
        return []
    },
    async searchTags(_, { input }) {
        return []
    }
}

const Mutation: MutationResolvers.Type = {
    async rateAnime(_, { input }) {
        return true
    }
}

export default {
    Query,
    Mutation
}

