import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Anime = {
  __typename?: 'Anime';
  title: Scalars['String'];
  description: Scalars['String'];
  minutesPerEpisode: Scalars['Int'];
  episodeCount: Scalars['Int'];
  genre: Array<Genre>;
  tags?: Maybe<Array<Tag>>;
  id: Scalars['ID'];
  status: AnimeStatus;
  isoAired: Scalars['String'];
  coverImage: Scalars['String'];
  bannerImage?: Maybe<Scalars['String']>;
};

export type AnimeInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  minutesPerEpisode: Scalars['Int'];
  episodeCount: Scalars['Int'];
  genre: Array<GenreInput>;
  tags?: Maybe<Array<TagInput>>;
  id: Scalars['ID'];
  status: AnimeStatus;
  isoAired: Scalars['String'];
  coverImage: Scalars['String'];
  bannerImage?: Maybe<Scalars['String']>;
};

export enum AnimeStatus {
  Airing = 'airing',
  Upcoming = 'upcoming',
  Finished = 'finished',
  Cancelled = 'cancelled'
}

export type CreateAnimeInput = {
  anime: Array<AnimeInput>;
};

export type Genre = {
  __typename?: 'Genre';
  averageRating: Scalars['Float'];
  name: Scalars['String'];
  id: Scalars['ID'];
};

export type GenreInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  rateAnime: Scalars['Boolean'];
  createAnime: Scalars['Boolean'];
};


export type MutationRateAnimeArgs = {
  input: RateAnimeInput;
};


export type MutationCreateAnimeArgs = {
  input: CreateAnimeInput;
};

export type Query = {
  __typename?: 'Query';
  searchAnime: Array<Anime>;
  searchGenre: Array<Genre>;
  searchTags: Array<Tag>;
  recommendAnime: Array<Anime>;
};


export type QuerySearchAnimeArgs = {
  input: SearchAnimeInput;
};


export type QuerySearchGenreArgs = {
  input: SearchGenreInput;
};


export type QuerySearchTagsArgs = {
  input: SearchGenreInput;
};


export type QueryRecommendAnimeArgs = {
  input: RecommendAnimeInput;
};

export type RateAnimeInput = {
  animeId: Scalars['ID'];
  genre: Array<RateGenreInput>;
  tags?: Maybe<Array<Scalars['ID']>>;
};

export type RateGenreInput = {
  rating: Scalars['Float'];
  id: Scalars['ID'];
};

export type RecommendAnimeInput = {
  genre: Array<RecommendAnimeInputGenreInput>;
  tags?: Maybe<Array<Scalars['ID']>>;
  blackList?: Maybe<Array<Scalars['ID']>>;
  moodPoint?: Maybe<Scalars['Int']>;
};

export type RecommendAnimeInputGenreInput = {
  proportion: Scalars['Float'];
  id: Scalars['ID'];
};

export type SearchAnimeInput = {
  searchText: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};

export type SearchGenreInput = {
  searchText: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TagInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  SearchAnimeInput: SearchAnimeInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Anime: ResolverTypeWrapper<Anime>;
  Genre: ResolverTypeWrapper<Genre>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Tag: ResolverTypeWrapper<Tag>;
  AnimeStatus: AnimeStatus;
  SearchGenreInput: SearchGenreInput;
  RecommendAnimeInput: RecommendAnimeInput;
  RecommendAnimeInputGenreInput: RecommendAnimeInputGenreInput;
  Mutation: ResolverTypeWrapper<{}>;
  RateAnimeInput: RateAnimeInput;
  RateGenreInput: RateGenreInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateAnimeInput: CreateAnimeInput;
  AnimeInput: AnimeInput;
  GenreInput: GenreInput;
  TagInput: TagInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  SearchAnimeInput: SearchAnimeInput;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Anime: Anime;
  Genre: Genre;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Tag: Tag;
  SearchGenreInput: SearchGenreInput;
  RecommendAnimeInput: RecommendAnimeInput;
  RecommendAnimeInputGenreInput: RecommendAnimeInputGenreInput;
  Mutation: {};
  RateAnimeInput: RateAnimeInput;
  RateGenreInput: RateGenreInput;
  Boolean: Scalars['Boolean'];
  CreateAnimeInput: CreateAnimeInput;
  AnimeInput: AnimeInput;
  GenreInput: GenreInput;
  TagInput: TagInput;
};

export type AnimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Anime'] = ResolversParentTypes['Anime']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minutesPerEpisode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  episodeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  genre?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['Tag']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['AnimeStatus'], ParentType, ContextType>;
  isoAired?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coverImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = {
  averageRating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  rateAnime?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRateAnimeArgs, 'input'>>;
  createAnime?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateAnimeArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  searchAnime?: Resolver<Array<ResolversTypes['Anime']>, ParentType, ContextType, RequireFields<QuerySearchAnimeArgs, 'input'>>;
  searchGenre?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<QuerySearchGenreArgs, 'input'>>;
  searchTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QuerySearchTagsArgs, 'input'>>;
  recommendAnime?: Resolver<Array<ResolversTypes['Anime']>, ParentType, ContextType, RequireFields<QueryRecommendAnimeArgs, 'input'>>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Anime?: AnimeResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
