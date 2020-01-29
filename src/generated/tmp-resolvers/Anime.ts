// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { AnimeResolvers } from "../graphqlgen";

export const Anime: AnimeResolvers.Type = {
  ...AnimeResolvers.defaultResolvers,

  tags: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  subTags: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
