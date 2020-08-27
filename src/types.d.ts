import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Json: any;
  /** ISO 3166-1 alpha-2 country code */
  CountryCode: any;
  /** 8 digit long date integer (YYYYMMDD). Unknown dates represented by 0. E.g. 2016: 20160000, May 1976: 19760500 */
  FuzzyDateInt: any;
};

/** Notification for when a activity is liked */
export type ActivityLikeNotification = {
  __typename?: 'ActivityLikeNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who liked to the activity */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity which was liked */
  activityId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who liked the activity */
  user?: Maybe<User>;
};

/** Notification for when authenticated user is @ mentioned in activity or reply */
export type ActivityMentionNotification = {
  __typename?: 'ActivityMentionNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity where mentioned */
  activityId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<User>;
};

/** Notification for when a user is send an activity message */
export type ActivityMessageNotification = {
  __typename?: 'ActivityMessageNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The if of the user who send the message */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity message */
  activityId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The message activity */
  message?: Maybe<MessageActivity>;
  /** The user who sent the message */
  user?: Maybe<User>;
};

/** Replay to an activity item */
export type ActivityReply = {
  __typename?: 'ActivityReply';
  /** The id of the reply */
  id: Scalars['Int'];
  /** The id of the replies creator */
  userId?: Maybe<Scalars['Int']>;
  /** The id of the parent activity */
  activityId?: Maybe<Scalars['Int']>;
  /** The reply text */
  text?: Maybe<Scalars['String']>;
  /** The amount of likes the reply has */
  likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the reply */
  isLiked?: Maybe<Scalars['Boolean']>;
  /** The time the reply was created at */
  createdAt: Scalars['Int'];
  /** The user who created reply */
  user?: Maybe<User>;
  /** The users who liked the reply */
  likes?: Maybe<Array<Maybe<User>>>;
};


/** Replay to an activity item */
export type ActivityReplyTextArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** Notification for when a activity reply is liked */
export type ActivityReplyLikeNotification = {
  __typename?: 'ActivityReplyLikeNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who liked to the activity reply */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity where the reply which was liked */
  activityId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who liked the activity reply */
  user?: Maybe<User>;
};

/** Notification for when a user replies to the authenticated users activity */
export type ActivityReplyNotification = {
  __typename?: 'ActivityReplyNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who replied to the activity */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity which was replied too */
  activityId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
};

/** Notification for when a user replies to activity the authenticated user has replied to */
export type ActivityReplySubscribedNotification = {
  __typename?: 'ActivityReplySubscribedNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who replied to the activity */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity which was replied too */
  activityId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
};

/** Activity sort enums */
export enum ActivitySort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

/** Activity type enum. */
export enum ActivityType {
  /** A text activity */
  Text = 'TEXT',
  /** A anime list update activity */
  AnimeList = 'ANIME_LIST',
  /** A manga list update activity */
  MangaList = 'MANGA_LIST',
  /** A text message activity sent to another user */
  Message = 'MESSAGE',
  /** Anime & Manga list update, only used in query arguments */
  MediaList = 'MEDIA_LIST'
}

/** Activity union type */
export type ActivityUnion = TextActivity | ListActivity | MessageActivity;

/** Notification for when an episode of anime airs */
export type AiringNotification = {
  __typename?: 'AiringNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the aired anime */
  animeId: Scalars['Int'];
  /** The episode number that just aired */
  episode: Scalars['Int'];
  /** The notification context text */
  contexts?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The associated media of the airing schedule */
  media?: Maybe<Media>;
};

/** Score & Watcher stats for airing anime by episode and mid-week */
export type AiringProgression = {
  __typename?: 'AiringProgression';
  /** The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates. */
  episode?: Maybe<Scalars['Float']>;
  /** The average score for the media */
  score?: Maybe<Scalars['Float']>;
  /** The amount of users watching the anime */
  watching?: Maybe<Scalars['Int']>;
};

/** Media Airing Schedule */
export type AiringSchedule = {
  __typename?: 'AiringSchedule';
  /** The id of the airing schedule item */
  id: Scalars['Int'];
  /** The time the episode airs at */
  airingAt: Scalars['Int'];
  /** Seconds until episode starts airing */
  timeUntilAiring: Scalars['Int'];
  /** The airing episode number */
  episode: Scalars['Int'];
  /** The associate media id of the airing episode */
  mediaId: Scalars['Int'];
  /** The associate media of the airing episode */
  media?: Maybe<Media>;
};

export type AiringScheduleConnection = {
  __typename?: 'AiringScheduleConnection';
  edges?: Maybe<Array<Maybe<AiringScheduleEdge>>>;
  nodes?: Maybe<Array<Maybe<AiringSchedule>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** AiringSchedule connection edge */
export type AiringScheduleEdge = {
  __typename?: 'AiringScheduleEdge';
  node?: Maybe<AiringSchedule>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']>;
};

export type AiringScheduleInput = {
  airingAt?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  timeUntilAiring?: Maybe<Scalars['Int']>;
};

/** Airing schedule sort enums */
export enum AiringSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Time = 'TIME',
  TimeDesc = 'TIME_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC'
}

export type AniChartHighlightInput = {
  mediaId?: Maybe<Scalars['Int']>;
  highlight?: Maybe<Scalars['String']>;
};

export type AniChartUser = {
  __typename?: 'AniChartUser';
  user?: Maybe<User>;
  settings?: Maybe<Scalars['Json']>;
  highlights?: Maybe<Scalars['Json']>;
};

/** A character that features in an anime or manga */
export type Character = {
  __typename?: 'Character';
  /** The id of the character */
  id: Scalars['Int'];
  /** The names of the character */
  name?: Maybe<CharacterName>;
  /** Character images */
  image?: Maybe<CharacterImage>;
  /** A general description of the character */
  description?: Maybe<Scalars['String']>;
  /** If the character is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean'];
  /** The url for the character page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** Media that includes the character */
  media?: Maybe<MediaConnection>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars['Int']>;
  /** The amount of user's who have favourited the character */
  favourites?: Maybe<Scalars['Int']>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']>;
};


/** A character that features in an anime or manga */
export type CharacterDescriptionArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};


/** A character that features in an anime or manga */
export type CharacterMediaArgs = {
  sort?: Maybe<Array<Maybe<MediaSort>>>;
  type?: Maybe<MediaType>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  edges?: Maybe<Array<Maybe<CharacterEdge>>>;
  nodes?: Maybe<Array<Maybe<Character>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Character connection edge */
export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  node?: Maybe<Character>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
  /** The media the character is in */
  media?: Maybe<Array<Maybe<Media>>>;
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']>;
};


/** Character connection edge */
export type CharacterEdgeVoiceActorsArgs = {
  language?: Maybe<StaffLanguage>;
  sort?: Maybe<Array<Maybe<StaffSort>>>;
};

export type CharacterImage = {
  __typename?: 'CharacterImage';
  /** The character's image of media at its largest size */
  large?: Maybe<Scalars['String']>;
  /** The character's image of media at medium size */
  medium?: Maybe<Scalars['String']>;
};

/** The names of the character */
export type CharacterName = {
  __typename?: 'CharacterName';
  /** The character's given name */
  first?: Maybe<Scalars['String']>;
  /** The character's surname */
  last?: Maybe<Scalars['String']>;
  /** The character's full name */
  full?: Maybe<Scalars['String']>;
  /** The character's full name in their native language */
  native?: Maybe<Scalars['String']>;
  /** Other names the character might be referred to as */
  alternative?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The names of the character */
export type CharacterNameInput = {
  /** The character's given name */
  first?: Maybe<Scalars['String']>;
  /** The character's surname */
  last?: Maybe<Scalars['String']>;
  /** The character's full name in their native language */
  native?: Maybe<Scalars['String']>;
  /** Other names the character might be referred by */
  alternative?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The role the character plays in the media */
export enum CharacterRole {
  /** A primary character role in the media */
  Main = 'MAIN',
  /** A supporting character role in the media */
  Supporting = 'SUPPORTING',
  /** A background character in the media */
  Background = 'BACKGROUND'
}

/** Character sort enums */
export enum CharacterSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
}

/** A submission for a character that features in an anime or manga */
export type CharacterSubmission = {
  __typename?: 'CharacterSubmission';
  /** The id of the submission */
  id: Scalars['Int'];
  /** Character that the submission is referencing */
  character?: Maybe<Character>;
  /** The character submission changes */
  submission?: Maybe<Character>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Int']>;
};

export type CharacterSubmissionConnection = {
  __typename?: 'CharacterSubmissionConnection';
  edges?: Maybe<Array<Maybe<CharacterSubmissionEdge>>>;
  nodes?: Maybe<Array<Maybe<CharacterSubmission>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** CharacterSubmission connection edge */
export type CharacterSubmissionEdge = {
  __typename?: 'CharacterSubmissionEdge';
  node?: Maybe<CharacterSubmission>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
  /** The submitted voice actors of the character */
  submittedVoiceActors?: Maybe<Array<Maybe<StaffSubmission>>>;
};


/** Deleted data type */
export type Deleted = {
  __typename?: 'Deleted';
  /** If an item has been successfully deleted */
  deleted?: Maybe<Scalars['Boolean']>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type Favourites = {
  __typename?: 'Favourites';
  /** Favourite anime */
  anime?: Maybe<MediaConnection>;
  /** Favourite manga */
  manga?: Maybe<MediaConnection>;
  /** Favourite characters */
  characters?: Maybe<CharacterConnection>;
  /** Favourite staff */
  staff?: Maybe<StaffConnection>;
  /** Favourite studios */
  studios?: Maybe<StudioConnection>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesAnimeArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesMangaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesCharactersArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStaffArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStudiosArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

/** Notification for when the authenticated user is followed by another user */
export type FollowingNotification = {
  __typename?: 'FollowingNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who followed the authenticated user */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  user?: Maybe<User>;
};

/** User's format statistics */
export type FormatStats = {
  __typename?: 'FormatStats';
  format?: Maybe<MediaFormat>;
  amount?: Maybe<Scalars['Int']>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDate = {
  __typename?: 'FuzzyDate';
  /** Numeric Year (2017) */
  year?: Maybe<Scalars['Int']>;
  /** Numeric Month (3) */
  month?: Maybe<Scalars['Int']>;
  /** Numeric Day (24) */
  day?: Maybe<Scalars['Int']>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDateInput = {
  /** Numeric Year (2017) */
  year?: Maybe<Scalars['Int']>;
  /** Numeric Month (3) */
  month?: Maybe<Scalars['Int']>;
  /** Numeric Day (24) */
  day?: Maybe<Scalars['Int']>;
};


/** User's genre statistics */
export type GenreStats = {
  __typename?: 'GenreStats';
  genre?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  meanScore?: Maybe<Scalars['Int']>;
  /** The amount of time in minutes the genre has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']>;
};

/** Page of data (Used for internal use only) */
export type InternalPage = {
  __typename?: 'InternalPage';
  mediaSubmissions?: Maybe<Array<Maybe<MediaSubmission>>>;
  characterSubmissions?: Maybe<Array<Maybe<CharacterSubmission>>>;
  staffSubmissions?: Maybe<Array<Maybe<StaffSubmission>>>;
  revisionHistory?: Maybe<Array<Maybe<RevisionHistory>>>;
  reports?: Maybe<Array<Maybe<Report>>>;
  modActions?: Maybe<Array<Maybe<ModAction>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
  users?: Maybe<Array<Maybe<User>>>;
  media?: Maybe<Array<Maybe<Media>>>;
  characters?: Maybe<Array<Maybe<Character>>>;
  staff?: Maybe<Array<Maybe<Staff>>>;
  studios?: Maybe<Array<Maybe<Studio>>>;
  mediaList?: Maybe<Array<Maybe<MediaList>>>;
  airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>;
  mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>;
  notifications?: Maybe<Array<Maybe<NotificationUnion>>>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  activities?: Maybe<Array<Maybe<ActivityUnion>>>;
  activityReplies?: Maybe<Array<Maybe<ActivityReply>>>;
  threads?: Maybe<Array<Maybe<Thread>>>;
  threadComments?: Maybe<Array<Maybe<ThreadComment>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  recommendations?: Maybe<Array<Maybe<Recommendation>>>;
  likes?: Maybe<Array<Maybe<User>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaSubmissionsArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  submissionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  status?: Maybe<SubmissionStatus>;
  type?: Maybe<MediaType>;
  sort?: Maybe<Array<Maybe<SubmissionSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageCharacterSubmissionsArgs = {
  characterId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  status?: Maybe<SubmissionStatus>;
  sort?: Maybe<Array<Maybe<SubmissionSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageStaffSubmissionsArgs = {
  staffId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  status?: Maybe<SubmissionStatus>;
  sort?: Maybe<Array<Maybe<SubmissionSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageRevisionHistoryArgs = {
  userId?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  characterId?: Maybe<Scalars['Int']>;
  staffId?: Maybe<Scalars['Int']>;
  studioId?: Maybe<Scalars['Int']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageModActionsArgs = {
  userId?: Maybe<Scalars['Int']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageUsersArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<UserSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaArgs = {
  id?: Maybe<Scalars['Int']>;
  idMal?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['FuzzyDateInt']>;
  endDate?: Maybe<Scalars['FuzzyDateInt']>;
  season?: Maybe<MediaSeason>;
  seasonYear?: Maybe<Scalars['Int']>;
  type?: Maybe<MediaType>;
  format?: Maybe<MediaFormat>;
  status?: Maybe<MediaStatus>;
  episodes?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  chapters?: Maybe<Scalars['Int']>;
  volumes?: Maybe<Scalars['Int']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  genre?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  minimumTagRank?: Maybe<Scalars['Int']>;
  tagCategory?: Maybe<Scalars['String']>;
  onList?: Maybe<Scalars['Boolean']>;
  licensedBy?: Maybe<Scalars['String']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  source?: Maybe<MediaSource>;
  countryOfOrigin?: Maybe<Scalars['CountryCode']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  idMal_not?: Maybe<Scalars['Int']>;
  idMal_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  idMal_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_like?: Maybe<Scalars['String']>;
  endDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_like?: Maybe<Scalars['String']>;
  format_in?: Maybe<Array<Maybe<MediaFormat>>>;
  format_not?: Maybe<MediaFormat>;
  format_not_in?: Maybe<Array<Maybe<MediaFormat>>>;
  status_in?: Maybe<Array<Maybe<MediaStatus>>>;
  status_not?: Maybe<MediaStatus>;
  status_not_in?: Maybe<Array<Maybe<MediaStatus>>>;
  episodes_greater?: Maybe<Scalars['Int']>;
  episodes_lesser?: Maybe<Scalars['Int']>;
  duration_greater?: Maybe<Scalars['Int']>;
  duration_lesser?: Maybe<Scalars['Int']>;
  chapters_greater?: Maybe<Scalars['Int']>;
  chapters_lesser?: Maybe<Scalars['Int']>;
  volumes_greater?: Maybe<Scalars['Int']>;
  volumes_lesser?: Maybe<Scalars['Int']>;
  genre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  genre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tag_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tag_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagCategory_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagCategory_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  licensedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  averageScore_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  source_in?: Maybe<Array<Maybe<MediaSource>>>;
  sort?: Maybe<Array<Maybe<MediaSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageCharactersArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<CharacterSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageStaffArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<StaffSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageStudiosArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<StudioSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaListArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  status?: Maybe<MediaListStatus>;
  mediaId?: Maybe<Scalars['Int']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt?: Maybe<Scalars['FuzzyDateInt']>;
  compareWithAuthList?: Maybe<Scalars['Boolean']>;
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  status_in?: Maybe<Array<Maybe<MediaListStatus>>>;
  status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>;
  status_not?: Maybe<MediaListStatus>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notes_like?: Maybe<Scalars['String']>;
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_like?: Maybe<Scalars['String']>;
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_like?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<MediaListSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageAiringSchedulesArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  airingAt?: Maybe<Scalars['Int']>;
  notYetAired?: Maybe<Scalars['Boolean']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  episode_not?: Maybe<Scalars['Int']>;
  episode_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  episode_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  airingAt_greater?: Maybe<Scalars['Int']>;
  airingAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<AiringSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaTrendsArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  trending?: Maybe<Scalars['Int']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  releasing?: Maybe<Scalars['Boolean']>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  date_greater?: Maybe<Scalars['Int']>;
  date_lesser?: Maybe<Scalars['Int']>;
  trending_greater?: Maybe<Scalars['Int']>;
  trending_lesser?: Maybe<Scalars['Int']>;
  trending_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  averageScore_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  episode_not?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<MediaTrendSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageNotificationsArgs = {
  type?: Maybe<NotificationType>;
  resetNotificationCount?: Maybe<Scalars['Boolean']>;
  type_in?: Maybe<Array<Maybe<NotificationType>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageFollowersArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<Array<Maybe<UserSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageFollowingArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<Array<Maybe<UserSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageActivitiesArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  messengerId?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  type?: Maybe<ActivityType>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  hasReplies?: Maybe<Scalars['Boolean']>;
  hasRepliesOrTypeText?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userId_not?: Maybe<Scalars['Int']>;
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  messengerId_not?: Maybe<Scalars['Int']>;
  messengerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  messengerId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type_not?: Maybe<ActivityType>;
  type_in?: Maybe<Array<Maybe<ActivityType>>>;
  type_not_in?: Maybe<Array<Maybe<ActivityType>>>;
  createdAt_greater?: Maybe<Scalars['Int']>;
  createdAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<ActivitySort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageActivityRepliesArgs = {
  id?: Maybe<Scalars['Int']>;
  activityId?: Maybe<Scalars['Int']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageThreadsArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  replyUserId?: Maybe<Scalars['Int']>;
  subscribed?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['Int']>;
  mediaCategoryId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<ThreadSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageThreadCommentsArgs = {
  id?: Maybe<Scalars['Int']>;
  threadId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<ThreadCommentSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageReviewsArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  mediaType?: Maybe<MediaType>;
  sort?: Maybe<Array<Maybe<ReviewSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageRecommendationsArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  mediaRecommendationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  onList?: Maybe<Scalars['Boolean']>;
  rating_greater?: Maybe<Scalars['Int']>;
  rating_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<RecommendationSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageLikesArgs = {
  likeableId?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};


/** Types that can be liked */
export enum LikeableType {
  Thread = 'THREAD',
  ThreadComment = 'THREAD_COMMENT',
  Activity = 'ACTIVITY',
  ActivityReply = 'ACTIVITY_REPLY'
}

/** Likeable union type */
export type LikeableUnion = ListActivity | TextActivity | MessageActivity | ActivityReply | Thread | ThreadComment;

/** User list activity (anime & manga updates) */
export type ListActivity = {
  __typename?: 'ListActivity';
  /** The id of the activity */
  id: Scalars['Int'];
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars['Int']>;
  /** The type of activity */
  type?: Maybe<ActivityType>;
  /** The number of activity replies */
  replyCount: Scalars['Int'];
  /** The list item's textual status */
  status?: Maybe<Scalars['String']>;
  /** The list progress made */
  progress?: Maybe<Scalars['String']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']>;
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** The time the activity was created at */
  createdAt: Scalars['Int'];
  /** The owner of the activity */
  user?: Maybe<User>;
  /** The associated media to the activity update */
  media?: Maybe<Media>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
};

/** User's list score statistics */
export type ListScoreStats = {
  __typename?: 'ListScoreStats';
  meanScore?: Maybe<Scalars['Int']>;
  standardDeviation?: Maybe<Scalars['Int']>;
};

/** Anime or Manga */
export type Media = {
  __typename?: 'Media';
  /** The id of the media */
  id: Scalars['Int'];
  /** The mal id of the media */
  idMal?: Maybe<Scalars['Int']>;
  /** The official titles of the media in various languages */
  title?: Maybe<MediaTitle>;
  /** The type of the media; anime or manga */
  type?: Maybe<MediaType>;
  /** The format the media was released in */
  format?: Maybe<MediaFormat>;
  /** The current releasing status of the media */
  status?: Maybe<MediaStatus>;
  /** Short description of the media's story and characters */
  description?: Maybe<Scalars['String']>;
  /** The first official release date of the media */
  startDate?: Maybe<FuzzyDate>;
  /** The last official release date of the media */
  endDate?: Maybe<FuzzyDate>;
  /** The season the media was initially released in */
  season?: Maybe<MediaSeason>;
  /** The season year the media was initially released in */
  seasonYear?: Maybe<Scalars['Int']>;
  /** The year & season the media was initially released in */
  seasonInt?: Maybe<Scalars['Int']>;
  /** The amount of episodes the anime has when complete */
  episodes?: Maybe<Scalars['Int']>;
  /** The general length of each anime episode in minutes */
  duration?: Maybe<Scalars['Int']>;
  /** The amount of chapters the manga has when complete */
  chapters?: Maybe<Scalars['Int']>;
  /** The amount of volumes the manga has when complete */
  volumes?: Maybe<Scalars['Int']>;
  /** Where the media was created. (ISO 3166-1 alpha-2) */
  countryOfOrigin?: Maybe<Scalars['CountryCode']>;
  /** If the media is officially licensed or a self-published doujin release */
  isLicensed?: Maybe<Scalars['Boolean']>;
  /** Source type the media was adapted from. */
  source?: Maybe<MediaSource>;
  /** Official Twitter hashtags for the media */
  hashtag?: Maybe<Scalars['String']>;
  /** Media trailer or advertisement */
  trailer?: Maybe<MediaTrailer>;
  /** When the media's data was last updated */
  updatedAt?: Maybe<Scalars['Int']>;
  /** The cover images of the media */
  coverImage?: Maybe<MediaCoverImage>;
  /** The banner image of the media */
  bannerImage?: Maybe<Scalars['String']>;
  /** The genres of the media */
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Alternative titles of the media */
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars['Int']>;
  /** Mean score of all the user's scores of the media */
  meanScore?: Maybe<Scalars['Int']>;
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars['Int']>;
  /** Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons. */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** The amount of related activity in the past hour */
  trending?: Maybe<Scalars['Int']>;
  /** The amount of user's who have favourited the media */
  favourites?: Maybe<Scalars['Int']>;
  /** List of tags that describes elements and themes of the media */
  tags?: Maybe<Array<Maybe<MediaTag>>>;
  /** Other media in the same or connecting franchise */
  relations?: Maybe<MediaConnection>;
  /** The characters in the media */
  characters?: Maybe<CharacterConnection>;
  /** The staff who produced the media */
  staff?: Maybe<StaffConnection>;
  /** The companies who produced the media */
  studios?: Maybe<StudioConnection>;
  /** If the media is marked as favourite by the current authenticated user */
  isFavourite: Scalars['Boolean'];
  /** If the media is intended only for 18+ adult audiences */
  isAdult?: Maybe<Scalars['Boolean']>;
  /** The media's next episode airing schedule */
  nextAiringEpisode?: Maybe<AiringSchedule>;
  /** The media's entire airing schedule */
  airingSchedule?: Maybe<AiringScheduleConnection>;
  /** The media's daily trend stats */
  trends?: Maybe<MediaTrendConnection>;
  /** External links to another site related to the media */
  externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>;
  /** Data and links to legal streaming episodes on external sites */
  streamingEpisodes?: Maybe<Array<Maybe<MediaStreamingEpisode>>>;
  /** The ranking of the media in a particular time span and format compared to other media */
  rankings?: Maybe<Array<Maybe<MediaRank>>>;
  /** The authenticated user's media list entry for the media */
  mediaListEntry?: Maybe<MediaList>;
  /** User reviews of the media */
  reviews?: Maybe<ReviewConnection>;
  /** User recommendations for similar media */
  recommendations?: Maybe<RecommendationConnection>;
  stats?: Maybe<MediaStats>;
  /** The url for the media page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** If the media should have forum thread automatically created for it on airing episode release */
  autoCreateForumThread?: Maybe<Scalars['Boolean']>;
  /** If the media is blocked from being recommended to/from */
  isRecommendationBlocked?: Maybe<Scalars['Boolean']>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']>;
};


/** Anime or Manga */
export type MediaDescriptionArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};


/** Anime or Manga */
export type MediaSourceArgs = {
  version?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaCharactersArgs = {
  sort?: Maybe<Array<Maybe<CharacterSort>>>;
  role?: Maybe<CharacterRole>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaStaffArgs = {
  sort?: Maybe<Array<Maybe<StaffSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaStudiosArgs = {
  sort?: Maybe<Array<Maybe<StudioSort>>>;
  isMain?: Maybe<Scalars['Boolean']>;
};


/** Anime or Manga */
export type MediaAiringScheduleArgs = {
  notYetAired?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaTrendsArgs = {
  sort?: Maybe<Array<Maybe<MediaTrendSort>>>;
  releasing?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaReviewsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<ReviewSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaRecommendationsArgs = {
  sort?: Maybe<Array<Maybe<RecommendationSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

/** Internal - Media characters separated */
export type MediaCharacter = {
  __typename?: 'MediaCharacter';
  /** The id of the connection */
  id?: Maybe<Scalars['Int']>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  /** The characters in the media voiced by the parent actor */
  character?: Maybe<Character>;
  /** The voice actor of the character */
  voiceActor?: Maybe<Staff>;
};

export type MediaConnection = {
  __typename?: 'MediaConnection';
  edges?: Maybe<Array<Maybe<MediaEdge>>>;
  nodes?: Maybe<Array<Maybe<Media>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

export type MediaCoverImage = {
  __typename?: 'MediaCoverImage';
  /** The cover image url of the media at its largest size. If this size isn't available, large will be provided instead. */
  extraLarge?: Maybe<Scalars['String']>;
  /** The cover image url of the media at a large size */
  large?: Maybe<Scalars['String']>;
  /** The cover image url of the media at medium size */
  medium?: Maybe<Scalars['String']>;
  /** Average #hex color of cover image */
  color?: Maybe<Scalars['String']>;
};

/** Media connection edge */
export type MediaEdge = {
  __typename?: 'MediaEdge';
  node?: Maybe<Media>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']>;
  /** The type of relation to the parent model */
  relationType?: Maybe<MediaRelation>;
  /** If the studio is the main animation studio of the media (For Studio->MediaConnection field only) */
  isMainStudio: Scalars['Boolean'];
  /** The characters in the media voiced by the parent actor */
  characters?: Maybe<Array<Maybe<Character>>>;
  /** The characters role in the media */
  characterRole?: Maybe<CharacterRole>;
  /** The role of the staff member in the production of the media */
  staffRole?: Maybe<Scalars['String']>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
  /** The order the media should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']>;
};


/** Media connection edge */
export type MediaEdgeRelationTypeArgs = {
  version?: Maybe<Scalars['Int']>;
};


/** Media connection edge */
export type MediaEdgeVoiceActorsArgs = {
  language?: Maybe<StaffLanguage>;
  sort?: Maybe<Array<Maybe<StaffSort>>>;
};

/** An external link to another site related to the media */
export type MediaExternalLink = {
  __typename?: 'MediaExternalLink';
  /** The id of the external link */
  id: Scalars['Int'];
  /** The url of the external link */
  url: Scalars['String'];
  /** The site location of the external link */
  site: Scalars['String'];
};

/** An external link to another site related to the media */
export type MediaExternalLinkInput = {
  /** The id of the external link */
  id: Scalars['Int'];
  /** The url of the external link */
  url: Scalars['String'];
  /** The site location of the external link */
  site: Scalars['String'];
};

/** The format the media was released in */
export enum MediaFormat {
  /** Anime broadcast on television */
  Tv = 'TV',
  /** Anime which are under 15 minutes in length and broadcast on television */
  TvShort = 'TV_SHORT',
  /** Anime movies with a theatrical release */
  Movie = 'MOVIE',
  /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
  Special = 'SPECIAL',
  /**
   * (Original Video Animation) Anime that have been released directly on
   * DVD/Blu-ray without originally going through a theatrical release or
   * television broadcast
   */
  Ova = 'OVA',
  /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
  Ona = 'ONA',
  /** Short anime released as a music video */
  Music = 'MUSIC',
  /** Professionally published manga with more than one chapter */
  Manga = 'MANGA',
  /** Written books released as a series of light novels */
  Novel = 'NOVEL',
  /** Manga with just one chapter */
  OneShot = 'ONE_SHOT'
}

/** List of anime or manga */
export type MediaList = {
  __typename?: 'MediaList';
  /** The id of the list entry */
  id: Scalars['Int'];
  /** The id of the user owner of the list entry */
  userId: Scalars['Int'];
  /** The id of the media */
  mediaId: Scalars['Int'];
  /** The watching/reading status */
  status?: Maybe<MediaListStatus>;
  /** The score of the entry */
  score?: Maybe<Scalars['Float']>;
  /** The amount of episodes/chapters consumed by the user */
  progress?: Maybe<Scalars['Int']>;
  /** The amount of volumes read by the user */
  progressVolumes?: Maybe<Scalars['Int']>;
  /** The amount of times the user has rewatched/read the media */
  repeat?: Maybe<Scalars['Int']>;
  /** Priority of planning */
  priority?: Maybe<Scalars['Int']>;
  /** If the entry should only be visible to authenticated user */
  private?: Maybe<Scalars['Boolean']>;
  /** Text notes */
  notes?: Maybe<Scalars['String']>;
  /** If the entry shown be hidden from non-custom lists */
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']>;
  /** Map of booleans for which custom lists the entry are in */
  customLists?: Maybe<Scalars['Json']>;
  /** Map of advanced scores with name keys */
  advancedScores?: Maybe<Scalars['Json']>;
  /** When the entry was started by the user */
  startedAt?: Maybe<FuzzyDate>;
  /** When the entry was completed by the user */
  completedAt?: Maybe<FuzzyDate>;
  /** When the entry data was last updated */
  updatedAt?: Maybe<Scalars['Int']>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars['Int']>;
  media?: Maybe<Media>;
  user?: Maybe<User>;
};


/** List of anime or manga */
export type MediaListScoreArgs = {
  format?: Maybe<ScoreFormat>;
};


/** List of anime or manga */
export type MediaListCustomListsArgs = {
  asArray?: Maybe<Scalars['Boolean']>;
};

/** List of anime or manga */
export type MediaListCollection = {
  __typename?: 'MediaListCollection';
  /** Grouped media list entries */
  lists?: Maybe<Array<Maybe<MediaListGroup>>>;
  /** The owner of the list */
  user?: Maybe<User>;
  /** If there is another chunk */
  hasNextChunk?: Maybe<Scalars['Boolean']>;
  /**
   * A map of media list entry arrays grouped by status
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  statusLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
  /**
   * A map of media list entry arrays grouped by custom lists
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  customLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
};


/** List of anime or manga */
export type MediaListCollectionStatusListsArgs = {
  asArray?: Maybe<Scalars['Boolean']>;
};


/** List of anime or manga */
export type MediaListCollectionCustomListsArgs = {
  asArray?: Maybe<Scalars['Boolean']>;
};

/** List group of anime or manga entries */
export type MediaListGroup = {
  __typename?: 'MediaListGroup';
  /** Media list entries */
  entries?: Maybe<Array<Maybe<MediaList>>>;
  name?: Maybe<Scalars['String']>;
  isCustomList?: Maybe<Scalars['Boolean']>;
  isSplitCompletedList?: Maybe<Scalars['Boolean']>;
  status?: Maybe<MediaListStatus>;
};

/** A user's list options */
export type MediaListOptions = {
  __typename?: 'MediaListOptions';
  /** The score format the user is using for media lists */
  scoreFormat?: Maybe<ScoreFormat>;
  /** The default order list rows should be displayed in */
  rowOrder?: Maybe<Scalars['String']>;
  /** (Site only) If the user should be using legacy css-supporting list versions */
  useLegacyLists?: Maybe<Scalars['Boolean']>;
  /** The user's anime list options */
  animeList?: Maybe<MediaListTypeOptions>;
  /** The user's manga list options */
  mangaList?: Maybe<MediaListTypeOptions>;
  /**
   * The list theme options for both lists
   * @deprecated No longer used
   */
  sharedTheme?: Maybe<Scalars['Json']>;
  /**
   * If the shared theme should be used instead of the individual list themes
   * @deprecated No longer used
   */
  sharedThemeEnabled?: Maybe<Scalars['Boolean']>;
};

/** A user's list options for anime or manga lists */
export type MediaListOptionsInput = {
  /** The order each list should be displayed in */
  sectionOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']>;
  /** The names of the user's custom lists */
  customLists?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The names of the user's advanced scoring sections */
  advancedScoring?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: Maybe<Scalars['Boolean']>;
  /** list theme */
  theme?: Maybe<Scalars['String']>;
};

/** Media list sort enums */
export enum MediaListSort {
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  ProgressVolumes = 'PROGRESS_VOLUMES',
  ProgressVolumesDesc = 'PROGRESS_VOLUMES_DESC',
  Repeat = 'REPEAT',
  RepeatDesc = 'REPEAT_DESC',
  Priority = 'PRIORITY',
  PriorityDesc = 'PRIORITY_DESC',
  StartedOn = 'STARTED_ON',
  StartedOnDesc = 'STARTED_ON_DESC',
  FinishedOn = 'FINISHED_ON',
  FinishedOnDesc = 'FINISHED_ON_DESC',
  AddedTime = 'ADDED_TIME',
  AddedTimeDesc = 'ADDED_TIME_DESC',
  UpdatedTime = 'UPDATED_TIME',
  UpdatedTimeDesc = 'UPDATED_TIME_DESC',
  MediaTitleRomaji = 'MEDIA_TITLE_ROMAJI',
  MediaTitleRomajiDesc = 'MEDIA_TITLE_ROMAJI_DESC',
  MediaTitleEnglish = 'MEDIA_TITLE_ENGLISH',
  MediaTitleEnglishDesc = 'MEDIA_TITLE_ENGLISH_DESC',
  MediaTitleNative = 'MEDIA_TITLE_NATIVE',
  MediaTitleNativeDesc = 'MEDIA_TITLE_NATIVE_DESC',
  MediaPopularity = 'MEDIA_POPULARITY',
  MediaPopularityDesc = 'MEDIA_POPULARITY_DESC'
}

/** Media list watching/reading status enum. */
export enum MediaListStatus {
  /** Currently watching/reading */
  Current = 'CURRENT',
  /** Planning to watch/read */
  Planning = 'PLANNING',
  /** Finished watching/reading */
  Completed = 'COMPLETED',
  /** Stopped watching/reading before completing */
  Dropped = 'DROPPED',
  /** Paused watching/reading */
  Paused = 'PAUSED',
  /** Re-watching/reading */
  Repeating = 'REPEATING'
}

/** A user's list options for anime or manga lists */
export type MediaListTypeOptions = {
  __typename?: 'MediaListTypeOptions';
  /** The order each list should be displayed in */
  sectionOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']>;
  /**
   * The list theme options
   * @deprecated This field has not yet been fully implemented and may change without warning
   */
  theme?: Maybe<Scalars['Json']>;
  /** The names of the user's custom lists */
  customLists?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The names of the user's advanced scoring sections */
  advancedScoring?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: Maybe<Scalars['Boolean']>;
};

/** The ranking of a media in a particular time span and format compared to other media */
export type MediaRank = {
  __typename?: 'MediaRank';
  /** The id of the rank */
  id: Scalars['Int'];
  /** The numerical rank of the media */
  rank: Scalars['Int'];
  /** The type of ranking */
  type: MediaRankType;
  /** The format the media is ranked within */
  format: MediaFormat;
  /** The year the media is ranked within */
  year?: Maybe<Scalars['Int']>;
  /** The season the media is ranked within */
  season?: Maybe<MediaSeason>;
  /** If the ranking is based on all time instead of a season/year */
  allTime?: Maybe<Scalars['Boolean']>;
  /** String that gives context to the ranking type and time span */
  context: Scalars['String'];
};

/** The type of ranking */
export enum MediaRankType {
  /** Ranking is based on the media's ratings/score */
  Rated = 'RATED',
  /** Ranking is based on the media's popularity */
  Popular = 'POPULAR'
}

/** Type of relation media has to its parent. */
export enum MediaRelation {
  /** An adaption of this media into a different format */
  Adaptation = 'ADAPTATION',
  /** Released before the relation */
  Prequel = 'PREQUEL',
  /** Released after the relation */
  Sequel = 'SEQUEL',
  /** The media a side story is from */
  Parent = 'PARENT',
  /** A side story of the parent media */
  SideStory = 'SIDE_STORY',
  /** Shares at least 1 character */
  Character = 'CHARACTER',
  /** A shortened and summarized version */
  Summary = 'SUMMARY',
  /** An alternative version of the same media */
  Alternative = 'ALTERNATIVE',
  /** An alternative version of the media with a different primary focus */
  SpinOff = 'SPIN_OFF',
  /** Other */
  Other = 'OTHER',
  /** Version 2 only. The source material the media was adapted from */
  Source = 'SOURCE',
  /** Version 2 only. */
  Compilation = 'COMPILATION',
  /** Version 2 only. */
  Contains = 'CONTAINS'
}

export enum MediaSeason {
  /** Months December to February */
  Winter = 'WINTER',
  /** Months March to May */
  Spring = 'SPRING',
  /** Months June to August */
  Summer = 'SUMMER',
  /** Months September to November */
  Fall = 'FALL'
}

/** Media sort enums */
export enum MediaSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC',
  TitleEnglish = 'TITLE_ENGLISH',
  TitleEnglishDesc = 'TITLE_ENGLISH_DESC',
  TitleNative = 'TITLE_NATIVE',
  TitleNativeDesc = 'TITLE_NATIVE_DESC',
  Type = 'TYPE',
  TypeDesc = 'TYPE_DESC',
  Format = 'FORMAT',
  FormatDesc = 'FORMAT_DESC',
  StartDate = 'START_DATE',
  StartDateDesc = 'START_DATE_DESC',
  EndDate = 'END_DATE',
  EndDateDesc = 'END_DATE_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Episodes = 'EPISODES',
  EpisodesDesc = 'EPISODES_DESC',
  Duration = 'DURATION',
  DurationDesc = 'DURATION_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  Chapters = 'CHAPTERS',
  ChaptersDesc = 'CHAPTERS_DESC',
  Volumes = 'VOLUMES',
  VolumesDesc = 'VOLUMES_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
}

/** Source type the media was adapted from */
export enum MediaSource {
  /** An original production not based of another work */
  Original = 'ORIGINAL',
  /** Asian comic book */
  Manga = 'MANGA',
  /** Written work published in volumes */
  LightNovel = 'LIGHT_NOVEL',
  /** Video game driven primary by text and narrative */
  VisualNovel = 'VISUAL_NOVEL',
  /** Video game */
  VideoGame = 'VIDEO_GAME',
  /** Other */
  Other = 'OTHER',
  /** Version 2 only. Written works not published in volumes */
  Novel = 'NOVEL',
  /** Version 2 only. Self-published works */
  Doujinshi = 'DOUJINSHI',
  /** Version 2 only. Japanese Anime */
  Anime = 'ANIME'
}

/** A media's statistics */
export type MediaStats = {
  __typename?: 'MediaStats';
  scoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  statusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
  /** @deprecated Replaced by MediaTrends */
  airingProgression?: Maybe<Array<Maybe<AiringProgression>>>;
};

/** The current releasing status of the media */
export enum MediaStatus {
  /** Has completed and is no longer being released */
  Finished = 'FINISHED',
  /** Currently releasing */
  Releasing = 'RELEASING',
  /** To be released at a later date */
  NotYetReleased = 'NOT_YET_RELEASED',
  /** Ended before the work could be finished */
  Cancelled = 'CANCELLED'
}

/** Data and links to legal streaming episodes on external sites */
export type MediaStreamingEpisode = {
  __typename?: 'MediaStreamingEpisode';
  /** Title of the episode */
  title?: Maybe<Scalars['String']>;
  /** Url of episode image thumbnail */
  thumbnail?: Maybe<Scalars['String']>;
  /** The url of the episode */
  url?: Maybe<Scalars['String']>;
  /** The site location of the streaming episodes */
  site?: Maybe<Scalars['String']>;
};

/** Media submission */
export type MediaSubmission = {
  __typename?: 'MediaSubmission';
  /** The id of the submission */
  id: Scalars['Int'];
  /** User submitter of the submission */
  submitter?: Maybe<User>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  submitterStats?: Maybe<Scalars['Json']>;
  notes?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  changes?: Maybe<Array<Maybe<Scalars['String']>>>;
  media?: Maybe<Media>;
  submission?: Maybe<Media>;
  characters?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  staff?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  studios?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  relations?: Maybe<Array<Maybe<MediaEdge>>>;
  externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>;
  createdAt?: Maybe<Scalars['Int']>;
};

/** Media submission with comparison to current data */
export type MediaSubmissionComparison = {
  __typename?: 'MediaSubmissionComparison';
  submission?: Maybe<MediaSubmissionEdge>;
  character?: Maybe<MediaCharacter>;
  staff?: Maybe<StaffEdge>;
  studio?: Maybe<StudioEdge>;
};

export type MediaSubmissionEdge = {
  __typename?: 'MediaSubmissionEdge';
  /** The id of the direct submission */
  id?: Maybe<Scalars['Int']>;
  characterRole?: Maybe<CharacterRole>;
  staffRole?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  character?: Maybe<Character>;
  characterSubmission?: Maybe<Character>;
  voiceActor?: Maybe<Staff>;
  voiceActorSubmission?: Maybe<Staff>;
  staff?: Maybe<Staff>;
  staffSubmission?: Maybe<Staff>;
  studio?: Maybe<Studio>;
  media?: Maybe<Media>;
};

/** A tag that describes a theme or element of the media */
export type MediaTag = {
  __typename?: 'MediaTag';
  /** The id of the tag */
  id: Scalars['Int'];
  /** The name of the tag */
  name: Scalars['String'];
  /** A general description of the tag */
  description?: Maybe<Scalars['String']>;
  /** The categories of tags this tag belongs to */
  category?: Maybe<Scalars['String']>;
  /** The relevance ranking of the tag out of the 100 for this media */
  rank?: Maybe<Scalars['Int']>;
  /** If the tag could be a spoiler for any media */
  isGeneralSpoiler?: Maybe<Scalars['Boolean']>;
  /** If the tag is a spoiler for this media */
  isMediaSpoiler?: Maybe<Scalars['Boolean']>;
  /** If the tag is only for adult 18+ media */
  isAdult?: Maybe<Scalars['Boolean']>;
};

/** The official titles of the media in various languages */
export type MediaTitle = {
  __typename?: 'MediaTitle';
  /** The romanization of the native language title */
  romaji?: Maybe<Scalars['String']>;
  /** The official english title */
  english?: Maybe<Scalars['String']>;
  /** Official title in it's native language */
  native?: Maybe<Scalars['String']>;
  /** The currently authenticated users preferred title language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']>;
};


/** The official titles of the media in various languages */
export type MediaTitleRomajiArgs = {
  stylised?: Maybe<Scalars['Boolean']>;
};


/** The official titles of the media in various languages */
export type MediaTitleEnglishArgs = {
  stylised?: Maybe<Scalars['Boolean']>;
};


/** The official titles of the media in various languages */
export type MediaTitleNativeArgs = {
  stylised?: Maybe<Scalars['Boolean']>;
};

/** The official titles of the media in various languages */
export type MediaTitleInput = {
  /** The romanization of the native language title */
  romaji?: Maybe<Scalars['String']>;
  /** The official english title */
  english?: Maybe<Scalars['String']>;
  /** Official title in it's native language */
  native?: Maybe<Scalars['String']>;
};

/** Media trailer or advertisement */
export type MediaTrailer = {
  __typename?: 'MediaTrailer';
  /** The trailer video id */
  id?: Maybe<Scalars['String']>;
  /** The site the video is hosted by (Currently either youtube or dailymotion) */
  site?: Maybe<Scalars['String']>;
  /** The url for the thumbnail image of the video */
  thumbnail?: Maybe<Scalars['String']>;
};

/** Daily media statistics */
export type MediaTrend = {
  __typename?: 'MediaTrend';
  /** The id of the tag */
  mediaId: Scalars['Int'];
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int'];
  /** The amount of media activity on the day */
  trending: Scalars['Int'];
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars['Int']>;
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars['Int']>;
  /** The number of users with watching/reading the media */
  inProgress?: Maybe<Scalars['Int']>;
  /** If the media was being released at this time */
  releasing: Scalars['Boolean'];
  /** The episode number of the anime released on this day */
  episode?: Maybe<Scalars['Int']>;
  /** The related media */
  media?: Maybe<Media>;
};

export type MediaTrendConnection = {
  __typename?: 'MediaTrendConnection';
  edges?: Maybe<Array<Maybe<MediaTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<MediaTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Media trend connection edge */
export type MediaTrendEdge = {
  __typename?: 'MediaTrendEdge';
  node?: Maybe<MediaTrend>;
};

/** Media trend sort enums */
export enum MediaTrendSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC'
}

/** Media type enum, anime or manga. */
export enum MediaType {
  /** Japanese Anime */
  Anime = 'ANIME',
  /** Asian comic */
  Manga = 'MANGA'
}

/** User message activity */
export type MessageActivity = {
  __typename?: 'MessageActivity';
  /** The id of the activity */
  id: Scalars['Int'];
  /** The user id of the activity's recipient */
  recipientId?: Maybe<Scalars['Int']>;
  /** The user id of the activity's sender */
  messengerId?: Maybe<Scalars['Int']>;
  /** The type of the activity */
  type?: Maybe<ActivityType>;
  /** The number of activity replies */
  replyCount: Scalars['Int'];
  /** The message text (Markdown) */
  message?: Maybe<Scalars['String']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']>;
  /** If the message is private and only viewable to the sender and recipients */
  isPrivate?: Maybe<Scalars['Boolean']>;
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** The time the activity was created at */
  createdAt: Scalars['Int'];
  /** The user who the activity message was sent to */
  recipient?: Maybe<User>;
  /** The user who sent the activity message */
  messenger?: Maybe<User>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
};


/** User message activity */
export type MessageActivityMessageArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

export type ModAction = {
  __typename?: 'ModAction';
  /** The id of the action */
  id: Scalars['Int'];
  user?: Maybe<User>;
  mod?: Maybe<User>;
  type?: Maybe<ModActionType>;
  objectId?: Maybe<Scalars['Int']>;
  objectType?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  createdAt: Scalars['Int'];
};

export enum ModActionType {
  Note = 'NOTE',
  Ban = 'BAN',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Expire = 'EXPIRE',
  Report = 'REPORT',
  Reset = 'RESET',
  Anon = 'ANON'
}

export type Mutation = {
  __typename?: 'Mutation';
  UpdateUser?: Maybe<User>;
  /** Create or update a media list entry */
  SaveMediaListEntry?: Maybe<MediaList>;
  /** Update multiple media list entries to the same values */
  UpdateMediaListEntries?: Maybe<Array<Maybe<MediaList>>>;
  /** Delete a media list entry */
  DeleteMediaListEntry?: Maybe<Deleted>;
  /** Delete a custom list and remove the list entries from it */
  DeleteCustomList?: Maybe<Deleted>;
  /** Create or update text activity for the currently authenticated user */
  SaveTextActivity?: Maybe<TextActivity>;
  /** Create or update message activity for the currently authenticated user */
  SaveMessageActivity?: Maybe<MessageActivity>;
  /** Update list activity (Mod Only) */
  SaveListActivity?: Maybe<ListActivity>;
  /** Delete an activity item of the authenticated users */
  DeleteActivity?: Maybe<Deleted>;
  /** Toggle the subscription of an activity item */
  ToggleActivitySubscription?: Maybe<ActivityUnion>;
  /** Create or update an activity reply */
  SaveActivityReply?: Maybe<ActivityReply>;
  /** Delete an activity reply of the authenticated users */
  DeleteActivityReply?: Maybe<Deleted>;
  /**
   * Add or remove a like from a likeable type.
   *                           Returns all the users who liked the same model
   */
  ToggleLike?: Maybe<Array<Maybe<User>>>;
  /** Add or remove a like from a likeable type. */
  ToggleLikeV2?: Maybe<LikeableUnion>;
  /** Toggle the un/following of a user */
  ToggleFollow?: Maybe<User>;
  /** Favourite or unfavourite an anime, manga, character, staff member, or studio */
  ToggleFavourite?: Maybe<Favourites>;
  /** Update the order favourites are displayed in */
  UpdateFavouriteOrder?: Maybe<Favourites>;
  /** Create or update a review */
  SaveReview?: Maybe<Review>;
  /** Delete a review */
  DeleteReview?: Maybe<Deleted>;
  /** Rate a review */
  RateReview?: Maybe<Review>;
  /** Recommendation a media */
  SaveRecommendation?: Maybe<Recommendation>;
  /** Create or update a forum thread */
  SaveThread?: Maybe<Thread>;
  /** Delete a thread */
  DeleteThread?: Maybe<Deleted>;
  /** Toggle the subscription of a forum thread */
  ToggleThreadSubscription?: Maybe<Thread>;
  /** Create or update a thread comment */
  SaveThreadComment?: Maybe<ThreadComment>;
  /** Delete a thread comment */
  DeleteThreadComment?: Maybe<Deleted>;
  UpdateAniChartSettings?: Maybe<Scalars['Json']>;
  UpdateAniChartHighlights?: Maybe<Scalars['Json']>;
};


export type MutationUpdateUserArgs = {
  about?: Maybe<Scalars['String']>;
  titleLanguage?: Maybe<UserTitleLanguage>;
  displayAdultContent?: Maybe<Scalars['Boolean']>;
  airingNotifications?: Maybe<Scalars['Boolean']>;
  scoreFormat?: Maybe<ScoreFormat>;
  rowOrder?: Maybe<Scalars['String']>;
  profileColor?: Maybe<Scalars['String']>;
  donatorBadge?: Maybe<Scalars['String']>;
  notificationOptions?: Maybe<Array<Maybe<NotificationOptionInput>>>;
  animeListOptions?: Maybe<MediaListOptionsInput>;
  mangaListOptions?: Maybe<MediaListOptionsInput>;
};


export type MutationSaveMediaListEntryArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  status?: Maybe<MediaListStatus>;
  score?: Maybe<Scalars['Float']>;
  scoreRaw?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  progressVolumes?: Maybe<Scalars['Int']>;
  repeat?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']>;
  customLists?: Maybe<Array<Maybe<Scalars['String']>>>;
  advancedScores?: Maybe<Array<Maybe<Scalars['Float']>>>;
  startedAt?: Maybe<FuzzyDateInput>;
  completedAt?: Maybe<FuzzyDateInput>;
};


export type MutationUpdateMediaListEntriesArgs = {
  status?: Maybe<MediaListStatus>;
  score?: Maybe<Scalars['Float']>;
  scoreRaw?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  progressVolumes?: Maybe<Scalars['Int']>;
  repeat?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']>;
  advancedScores?: Maybe<Array<Maybe<Scalars['Float']>>>;
  startedAt?: Maybe<FuzzyDateInput>;
  completedAt?: Maybe<FuzzyDateInput>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type MutationDeleteMediaListEntryArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationDeleteCustomListArgs = {
  customList?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
};


export type MutationSaveTextActivityArgs = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  locked?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveMessageActivityArgs = {
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  recipientId?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  locked?: Maybe<Scalars['Boolean']>;
  asMod?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveListActivityArgs = {
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteActivityArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationToggleActivitySubscriptionArgs = {
  activityId?: Maybe<Scalars['Int']>;
  subscribe?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveActivityReplyArgs = {
  id?: Maybe<Scalars['Int']>;
  activityId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  asMod?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteActivityReplyArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationToggleLikeArgs = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};


export type MutationToggleLikeV2Args = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};


export type MutationToggleFollowArgs = {
  userId?: Maybe<Scalars['Int']>;
};


export type MutationToggleFavouriteArgs = {
  animeId?: Maybe<Scalars['Int']>;
  mangaId?: Maybe<Scalars['Int']>;
  characterId?: Maybe<Scalars['Int']>;
  staffId?: Maybe<Scalars['Int']>;
  studioId?: Maybe<Scalars['Int']>;
};


export type MutationUpdateFavouriteOrderArgs = {
  animeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mangaIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  characterIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  staffIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  studioIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  animeOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mangaOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
  characterOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
  staffOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
  studioOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type MutationSaveReviewArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteReviewArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationRateReviewArgs = {
  reviewId?: Maybe<Scalars['Int']>;
  rating?: Maybe<ReviewRating>;
};


export type MutationSaveRecommendationArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  mediaRecommendationId?: Maybe<Scalars['Int']>;
  rating?: Maybe<RecommendationRating>;
};


export type MutationSaveThreadArgs = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaCategories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sticky?: Maybe<Scalars['Boolean']>;
  locked?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteThreadArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationToggleThreadSubscriptionArgs = {
  threadId?: Maybe<Scalars['Int']>;
  subscribe?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveThreadCommentArgs = {
  id?: Maybe<Scalars['Int']>;
  threadId?: Maybe<Scalars['Int']>;
  parentCommentId?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
};


export type MutationDeleteThreadCommentArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationUpdateAniChartSettingsArgs = {
  titleLanguage?: Maybe<Scalars['String']>;
  outgoingLinkProvider?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
};


export type MutationUpdateAniChartHighlightsArgs = {
  highlights?: Maybe<Array<Maybe<AniChartHighlightInput>>>;
};

/** Notification option */
export type NotificationOption = {
  __typename?: 'NotificationOption';
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** Whether this type of notification is enabled */
  enabled?: Maybe<Scalars['Boolean']>;
};

/** Notification option input */
export type NotificationOptionInput = {
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** Whether this type of notification is enabled */
  enabled?: Maybe<Scalars['Boolean']>;
};

/** Notification type enum */
export enum NotificationType {
  /** A user has sent you message */
  ActivityMessage = 'ACTIVITY_MESSAGE',
  /** A user has replied to your activity */
  ActivityReply = 'ACTIVITY_REPLY',
  /** A user has followed you */
  Following = 'FOLLOWING',
  /** A user has mentioned you in their activity */
  ActivityMention = 'ACTIVITY_MENTION',
  /** A user has mentioned you in a forum comment */
  ThreadCommentMention = 'THREAD_COMMENT_MENTION',
  /** A user has commented in one of your subscribed forum threads */
  ThreadSubscribed = 'THREAD_SUBSCRIBED',
  /** A user has replied to your forum comment */
  ThreadCommentReply = 'THREAD_COMMENT_REPLY',
  /** An anime you are currently watching has aired */
  Airing = 'AIRING',
  /** A user has liked your activity */
  ActivityLike = 'ACTIVITY_LIKE',
  /** A user has liked your activity reply */
  ActivityReplyLike = 'ACTIVITY_REPLY_LIKE',
  /** A user has liked your forum thread */
  ThreadLike = 'THREAD_LIKE',
  /** A user has liked your forum comment */
  ThreadCommentLike = 'THREAD_COMMENT_LIKE',
  /** A user has replied to activity you have also replied to */
  ActivityReplySubscribed = 'ACTIVITY_REPLY_SUBSCRIBED',
  /** A new anime or manga has been added to the site where its related media is on the user's list */
  RelatedMediaAddition = 'RELATED_MEDIA_ADDITION'
}

/** Notification union type */
export type NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification;

/** Page of data */
export type Page = {
  __typename?: 'Page';
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
  users?: Maybe<Array<Maybe<User>>>;
  media?: Maybe<Array<Maybe<Media>>>;
  characters?: Maybe<Array<Maybe<Character>>>;
  staff?: Maybe<Array<Maybe<Staff>>>;
  studios?: Maybe<Array<Maybe<Studio>>>;
  mediaList?: Maybe<Array<Maybe<MediaList>>>;
  airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>;
  mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>;
  notifications?: Maybe<Array<Maybe<NotificationUnion>>>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  activities?: Maybe<Array<Maybe<ActivityUnion>>>;
  activityReplies?: Maybe<Array<Maybe<ActivityReply>>>;
  threads?: Maybe<Array<Maybe<Thread>>>;
  threadComments?: Maybe<Array<Maybe<ThreadComment>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  recommendations?: Maybe<Array<Maybe<Recommendation>>>;
  likes?: Maybe<Array<Maybe<User>>>;
};


/** Page of data */
export type PageUsersArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<UserSort>>>;
};


/** Page of data */
export type PageMediaArgs = {
  id?: Maybe<Scalars['Int']>;
  idMal?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['FuzzyDateInt']>;
  endDate?: Maybe<Scalars['FuzzyDateInt']>;
  season?: Maybe<MediaSeason>;
  seasonYear?: Maybe<Scalars['Int']>;
  type?: Maybe<MediaType>;
  format?: Maybe<MediaFormat>;
  status?: Maybe<MediaStatus>;
  episodes?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  chapters?: Maybe<Scalars['Int']>;
  volumes?: Maybe<Scalars['Int']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  genre?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  minimumTagRank?: Maybe<Scalars['Int']>;
  tagCategory?: Maybe<Scalars['String']>;
  onList?: Maybe<Scalars['Boolean']>;
  licensedBy?: Maybe<Scalars['String']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  source?: Maybe<MediaSource>;
  countryOfOrigin?: Maybe<Scalars['CountryCode']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  idMal_not?: Maybe<Scalars['Int']>;
  idMal_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  idMal_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_like?: Maybe<Scalars['String']>;
  endDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_like?: Maybe<Scalars['String']>;
  format_in?: Maybe<Array<Maybe<MediaFormat>>>;
  format_not?: Maybe<MediaFormat>;
  format_not_in?: Maybe<Array<Maybe<MediaFormat>>>;
  status_in?: Maybe<Array<Maybe<MediaStatus>>>;
  status_not?: Maybe<MediaStatus>;
  status_not_in?: Maybe<Array<Maybe<MediaStatus>>>;
  episodes_greater?: Maybe<Scalars['Int']>;
  episodes_lesser?: Maybe<Scalars['Int']>;
  duration_greater?: Maybe<Scalars['Int']>;
  duration_lesser?: Maybe<Scalars['Int']>;
  chapters_greater?: Maybe<Scalars['Int']>;
  chapters_lesser?: Maybe<Scalars['Int']>;
  volumes_greater?: Maybe<Scalars['Int']>;
  volumes_lesser?: Maybe<Scalars['Int']>;
  genre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  genre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tag_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tag_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagCategory_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagCategory_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  licensedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  averageScore_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  source_in?: Maybe<Array<Maybe<MediaSource>>>;
  sort?: Maybe<Array<Maybe<MediaSort>>>;
};


/** Page of data */
export type PageCharactersArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<CharacterSort>>>;
};


/** Page of data */
export type PageStaffArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<StaffSort>>>;
};


/** Page of data */
export type PageStudiosArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<StudioSort>>>;
};


/** Page of data */
export type PageMediaListArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  status?: Maybe<MediaListStatus>;
  mediaId?: Maybe<Scalars['Int']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt?: Maybe<Scalars['FuzzyDateInt']>;
  compareWithAuthList?: Maybe<Scalars['Boolean']>;
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  status_in?: Maybe<Array<Maybe<MediaListStatus>>>;
  status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>;
  status_not?: Maybe<MediaListStatus>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notes_like?: Maybe<Scalars['String']>;
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_like?: Maybe<Scalars['String']>;
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_like?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<MediaListSort>>>;
};


/** Page of data */
export type PageAiringSchedulesArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  airingAt?: Maybe<Scalars['Int']>;
  notYetAired?: Maybe<Scalars['Boolean']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  episode_not?: Maybe<Scalars['Int']>;
  episode_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  episode_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  airingAt_greater?: Maybe<Scalars['Int']>;
  airingAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<AiringSort>>>;
};


/** Page of data */
export type PageMediaTrendsArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  trending?: Maybe<Scalars['Int']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  releasing?: Maybe<Scalars['Boolean']>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  date_greater?: Maybe<Scalars['Int']>;
  date_lesser?: Maybe<Scalars['Int']>;
  trending_greater?: Maybe<Scalars['Int']>;
  trending_lesser?: Maybe<Scalars['Int']>;
  trending_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  averageScore_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  episode_not?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<MediaTrendSort>>>;
};


/** Page of data */
export type PageNotificationsArgs = {
  type?: Maybe<NotificationType>;
  resetNotificationCount?: Maybe<Scalars['Boolean']>;
  type_in?: Maybe<Array<Maybe<NotificationType>>>;
};


/** Page of data */
export type PageFollowersArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<Array<Maybe<UserSort>>>;
};


/** Page of data */
export type PageFollowingArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<Array<Maybe<UserSort>>>;
};


/** Page of data */
export type PageActivitiesArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  messengerId?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  type?: Maybe<ActivityType>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  hasReplies?: Maybe<Scalars['Boolean']>;
  hasRepliesOrTypeText?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userId_not?: Maybe<Scalars['Int']>;
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  messengerId_not?: Maybe<Scalars['Int']>;
  messengerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  messengerId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type_not?: Maybe<ActivityType>;
  type_in?: Maybe<Array<Maybe<ActivityType>>>;
  type_not_in?: Maybe<Array<Maybe<ActivityType>>>;
  createdAt_greater?: Maybe<Scalars['Int']>;
  createdAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<ActivitySort>>>;
};


/** Page of data */
export type PageActivityRepliesArgs = {
  id?: Maybe<Scalars['Int']>;
  activityId?: Maybe<Scalars['Int']>;
};


/** Page of data */
export type PageThreadsArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  replyUserId?: Maybe<Scalars['Int']>;
  subscribed?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['Int']>;
  mediaCategoryId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<ThreadSort>>>;
};


/** Page of data */
export type PageThreadCommentsArgs = {
  id?: Maybe<Scalars['Int']>;
  threadId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<ThreadCommentSort>>>;
};


/** Page of data */
export type PageReviewsArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  mediaType?: Maybe<MediaType>;
  sort?: Maybe<Array<Maybe<ReviewSort>>>;
};


/** Page of data */
export type PageRecommendationsArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  mediaRecommendationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  onList?: Maybe<Scalars['Boolean']>;
  rating_greater?: Maybe<Scalars['Int']>;
  rating_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<RecommendationSort>>>;
};


/** Page of data */
export type PageLikesArgs = {
  likeableId?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The total number of items */
  total?: Maybe<Scalars['Int']>;
  /** The count on a page */
  perPage?: Maybe<Scalars['Int']>;
  /** The current page */
  currentPage?: Maybe<Scalars['Int']>;
  /** The last page */
  lastPage?: Maybe<Scalars['Int']>;
  /** If there is another page */
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

/** Provides the parsed markdown as html */
export type ParsedMarkdown = {
  __typename?: 'ParsedMarkdown';
  /** The parsed markdown as html */
  html?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Page?: Maybe<Page>;
  /** Media query */
  Media?: Maybe<Media>;
  /** Media Trend query */
  MediaTrend?: Maybe<MediaTrend>;
  /** Airing schedule query */
  AiringSchedule?: Maybe<AiringSchedule>;
  /** Character query */
  Character?: Maybe<Character>;
  /** Staff query */
  Staff?: Maybe<Staff>;
  /** Media list query */
  MediaList?: Maybe<MediaList>;
  /**
   * Media list collection query, provides list pre-grouped by status & custom
   * lists. User ID and Media Type arguments required.
   */
  MediaListCollection?: Maybe<MediaListCollection>;
  /** Collection of all the possible media genres */
  GenreCollection?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Collection of all the possible media tags */
  MediaTagCollection?: Maybe<Array<Maybe<MediaTag>>>;
  /** User query */
  User?: Maybe<User>;
  /** Get the currently authenticated user */
  Viewer?: Maybe<User>;
  /** Notification query */
  Notification?: Maybe<NotificationUnion>;
  /** Studio query */
  Studio?: Maybe<Studio>;
  /** Review query */
  Review?: Maybe<Review>;
  /** Activity query */
  Activity?: Maybe<ActivityUnion>;
  /** Activity reply query */
  ActivityReply?: Maybe<ActivityReply>;
  /** Follow query */
  Following?: Maybe<User>;
  /** Follow query */
  Follower?: Maybe<User>;
  /** Thread query */
  Thread?: Maybe<Thread>;
  /** Comment query */
  ThreadComment?: Maybe<Array<Maybe<ThreadComment>>>;
  /** Recommendation query */
  Recommendation?: Maybe<Recommendation>;
  /** Like query */
  Like?: Maybe<User>;
  /** Provide AniList markdown to be converted to html (Requires auth) */
  Markdown?: Maybe<ParsedMarkdown>;
  AniChartUser?: Maybe<AniChartUser>;
  /** Site statistics query */
  SiteStatistics?: Maybe<SiteStatistics>;
};


export type QueryPageArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type QueryMediaArgs = {
  id?: Maybe<Scalars['Int']>;
  idMal?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['FuzzyDateInt']>;
  endDate?: Maybe<Scalars['FuzzyDateInt']>;
  season?: Maybe<MediaSeason>;
  seasonYear?: Maybe<Scalars['Int']>;
  type?: Maybe<MediaType>;
  format?: Maybe<MediaFormat>;
  status?: Maybe<MediaStatus>;
  episodes?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  chapters?: Maybe<Scalars['Int']>;
  volumes?: Maybe<Scalars['Int']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  genre?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  minimumTagRank?: Maybe<Scalars['Int']>;
  tagCategory?: Maybe<Scalars['String']>;
  onList?: Maybe<Scalars['Boolean']>;
  licensedBy?: Maybe<Scalars['String']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  source?: Maybe<MediaSource>;
  countryOfOrigin?: Maybe<Scalars['CountryCode']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  idMal_not?: Maybe<Scalars['Int']>;
  idMal_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  idMal_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_like?: Maybe<Scalars['String']>;
  endDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_like?: Maybe<Scalars['String']>;
  format_in?: Maybe<Array<Maybe<MediaFormat>>>;
  format_not?: Maybe<MediaFormat>;
  format_not_in?: Maybe<Array<Maybe<MediaFormat>>>;
  status_in?: Maybe<Array<Maybe<MediaStatus>>>;
  status_not?: Maybe<MediaStatus>;
  status_not_in?: Maybe<Array<Maybe<MediaStatus>>>;
  episodes_greater?: Maybe<Scalars['Int']>;
  episodes_lesser?: Maybe<Scalars['Int']>;
  duration_greater?: Maybe<Scalars['Int']>;
  duration_lesser?: Maybe<Scalars['Int']>;
  chapters_greater?: Maybe<Scalars['Int']>;
  chapters_lesser?: Maybe<Scalars['Int']>;
  volumes_greater?: Maybe<Scalars['Int']>;
  volumes_lesser?: Maybe<Scalars['Int']>;
  genre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  genre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tag_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tag_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagCategory_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagCategory_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  licensedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  averageScore_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  source_in?: Maybe<Array<Maybe<MediaSource>>>;
  sort?: Maybe<Array<Maybe<MediaSort>>>;
};


export type QueryMediaTrendArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  trending?: Maybe<Scalars['Int']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  releasing?: Maybe<Scalars['Boolean']>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  date_greater?: Maybe<Scalars['Int']>;
  date_lesser?: Maybe<Scalars['Int']>;
  trending_greater?: Maybe<Scalars['Int']>;
  trending_lesser?: Maybe<Scalars['Int']>;
  trending_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  averageScore_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  episode_not?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<MediaTrendSort>>>;
};


export type QueryAiringScheduleArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  airingAt?: Maybe<Scalars['Int']>;
  notYetAired?: Maybe<Scalars['Boolean']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  episode_not?: Maybe<Scalars['Int']>;
  episode_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  episode_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  airingAt_greater?: Maybe<Scalars['Int']>;
  airingAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<AiringSort>>>;
};


export type QueryCharacterArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<CharacterSort>>>;
};


export type QueryStaffArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<StaffSort>>>;
};


export type QueryMediaListArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  status?: Maybe<MediaListStatus>;
  mediaId?: Maybe<Scalars['Int']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt?: Maybe<Scalars['FuzzyDateInt']>;
  compareWithAuthList?: Maybe<Scalars['Boolean']>;
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  status_in?: Maybe<Array<Maybe<MediaListStatus>>>;
  status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>;
  status_not?: Maybe<MediaListStatus>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notes_like?: Maybe<Scalars['String']>;
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_like?: Maybe<Scalars['String']>;
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_like?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<MediaListSort>>>;
};


export type QueryMediaListCollectionArgs = {
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  status?: Maybe<MediaListStatus>;
  notes?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt?: Maybe<Scalars['FuzzyDateInt']>;
  forceSingleCompletedList?: Maybe<Scalars['Boolean']>;
  chunk?: Maybe<Scalars['Int']>;
  perChunk?: Maybe<Scalars['Int']>;
  status_in?: Maybe<Array<Maybe<MediaListStatus>>>;
  status_not_in?: Maybe<Array<Maybe<MediaListStatus>>>;
  status_not?: Maybe<MediaListStatus>;
  notes_like?: Maybe<Scalars['String']>;
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_like?: Maybe<Scalars['String']>;
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_like?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<MediaListSort>>>;
};


export type QueryMediaTagCollectionArgs = {
  status?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<UserSort>>>;
};


export type QueryNotificationArgs = {
  type?: Maybe<NotificationType>;
  resetNotificationCount?: Maybe<Scalars['Boolean']>;
  type_in?: Maybe<Array<Maybe<NotificationType>>>;
};


export type QueryStudioArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<StudioSort>>>;
};


export type QueryReviewArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  mediaType?: Maybe<MediaType>;
  sort?: Maybe<Array<Maybe<ReviewSort>>>;
};


export type QueryActivityArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  messengerId?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  type?: Maybe<ActivityType>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  hasReplies?: Maybe<Scalars['Boolean']>;
  hasRepliesOrTypeText?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userId_not?: Maybe<Scalars['Int']>;
  userId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  userId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  messengerId_not?: Maybe<Scalars['Int']>;
  messengerId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  messengerId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type_not?: Maybe<ActivityType>;
  type_in?: Maybe<Array<Maybe<ActivityType>>>;
  type_not_in?: Maybe<Array<Maybe<ActivityType>>>;
  createdAt_greater?: Maybe<Scalars['Int']>;
  createdAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<ActivitySort>>>;
};


export type QueryActivityReplyArgs = {
  id?: Maybe<Scalars['Int']>;
  activityId?: Maybe<Scalars['Int']>;
};


export type QueryFollowingArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<Array<Maybe<UserSort>>>;
};


export type QueryFollowerArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<Array<Maybe<UserSort>>>;
};


export type QueryThreadArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  replyUserId?: Maybe<Scalars['Int']>;
  subscribed?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['Int']>;
  mediaCategoryId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sort?: Maybe<Array<Maybe<ThreadSort>>>;
};


export type QueryThreadCommentArgs = {
  id?: Maybe<Scalars['Int']>;
  threadId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<ThreadCommentSort>>>;
};


export type QueryRecommendationArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  mediaRecommendationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  onList?: Maybe<Scalars['Boolean']>;
  rating_greater?: Maybe<Scalars['Int']>;
  rating_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<RecommendationSort>>>;
};


export type QueryLikeArgs = {
  likeableId?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};


export type QueryMarkdownArgs = {
  markdown: Scalars['String'];
};

/** Media recommendation */
export type Recommendation = {
  __typename?: 'Recommendation';
  /** The id of the recommendation */
  id: Scalars['Int'];
  /** Users rating of the recommendation */
  rating?: Maybe<Scalars['Int']>;
  /** The rating of the recommendation by currently authenticated user */
  userRating?: Maybe<RecommendationRating>;
  /** The media the recommendation is from */
  media?: Maybe<Media>;
  /** The recommended media */
  mediaRecommendation?: Maybe<Media>;
  /** The user that first created the recommendation */
  user?: Maybe<User>;
};

export type RecommendationConnection = {
  __typename?: 'RecommendationConnection';
  edges?: Maybe<Array<Maybe<RecommendationEdge>>>;
  nodes?: Maybe<Array<Maybe<Recommendation>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Recommendation connection edge */
export type RecommendationEdge = {
  __typename?: 'RecommendationEdge';
  node?: Maybe<Recommendation>;
};

/** Recommendation rating enums */
export enum RecommendationRating {
  NoRating = 'NO_RATING',
  RateUp = 'RATE_UP',
  RateDown = 'RATE_DOWN'
}

/** Recommendation sort enums */
export enum RecommendationSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC'
}

/** Notification for when new media is added to the site */
export type RelatedMediaAdditionNotification = {
  __typename?: 'RelatedMediaAdditionNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the new media */
  mediaId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The associated media of the airing schedule */
  media?: Maybe<Media>;
};

export type Report = {
  __typename?: 'Report';
  id: Scalars['Int'];
  reporter?: Maybe<User>;
  reported?: Maybe<User>;
  reason?: Maybe<Scalars['String']>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars['Int']>;
};

/** A Review that features in an anime or manga */
export type Review = {
  __typename?: 'Review';
  /** The id of the review */
  id: Scalars['Int'];
  /** The id of the review's creator */
  userId: Scalars['Int'];
  /** The id of the review's media */
  mediaId: Scalars['Int'];
  /** For which type of media the review is for */
  mediaType?: Maybe<MediaType>;
  /** A short summary of the review */
  summary?: Maybe<Scalars['String']>;
  /** The main review body text */
  body?: Maybe<Scalars['String']>;
  /** The total user rating of the review */
  rating?: Maybe<Scalars['Int']>;
  /** The amount of user ratings of the review */
  ratingAmount?: Maybe<Scalars['Int']>;
  /** The rating of the review by currently authenticated user */
  userRating?: Maybe<ReviewRating>;
  /** The review score of the media */
  score?: Maybe<Scalars['Int']>;
  /** If the review is not yet publicly published and is only viewable by creator */
  private?: Maybe<Scalars['Boolean']>;
  /** The url for the review page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** The time of the thread creation */
  createdAt: Scalars['Int'];
  /** The time of the thread last update */
  updatedAt: Scalars['Int'];
  /** The creator of the review */
  user?: Maybe<User>;
  /** The media the review is of */
  media?: Maybe<Media>;
};


/** A Review that features in an anime or manga */
export type ReviewBodyArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<Review>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Review connection edge */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  node?: Maybe<Review>;
};

/** Review rating enums */
export enum ReviewRating {
  NoVote = 'NO_VOTE',
  UpVote = 'UP_VOTE',
  DownVote = 'DOWN_VOTE'
}

/** Review sort enums */
export enum ReviewSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Feed of mod edit activity */
export type RevisionHistory = {
  __typename?: 'RevisionHistory';
  /** The id of the media */
  id: Scalars['Int'];
  /** The action taken on the objects */
  action?: Maybe<RevisionHistoryAction>;
  /** A JSON object of the fields that changed */
  changes?: Maybe<Scalars['Json']>;
  /** The user who made the edit to the object */
  user?: Maybe<User>;
  /** The media the mod feed entry references */
  media?: Maybe<Media>;
  /** The character the mod feed entry references */
  character?: Maybe<Character>;
  /** The staff member the mod feed entry references */
  staff?: Maybe<Staff>;
  /** The studio the mod feed entry references */
  studio?: Maybe<Studio>;
  /** When the mod feed entry was created */
  createdAt?: Maybe<Scalars['Int']>;
};

/** Revision history actions */
export enum RevisionHistoryAction {
  Create = 'CREATE',
  Edit = 'EDIT'
}

/** A user's list score distribution. */
export type ScoreDistribution = {
  __typename?: 'ScoreDistribution';
  score?: Maybe<Scalars['Int']>;
  /** The amount of list entries with this score */
  amount?: Maybe<Scalars['Int']>;
};

/** Media list scoring type */
export enum ScoreFormat {
  /** An integer from 0-100 */
  Point_100 = 'POINT_100',
  /** A float from 0-10 with 1 decimal place */
  Point_10Decimal = 'POINT_10_DECIMAL',
  /** An integer from 0-10 */
  Point_10 = 'POINT_10',
  /** An integer from 0-5. Should be represented in Stars */
  Point_5 = 'POINT_5',
  /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
  Point_3 = 'POINT_3'
}

export type SiteStatistics = {
  __typename?: 'SiteStatistics';
  users?: Maybe<SiteTrendConnection>;
  anime?: Maybe<SiteTrendConnection>;
  manga?: Maybe<SiteTrendConnection>;
  characters?: Maybe<SiteTrendConnection>;
  staff?: Maybe<SiteTrendConnection>;
  studios?: Maybe<SiteTrendConnection>;
  reviews?: Maybe<SiteTrendConnection>;
};


export type SiteStatisticsUsersArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsAnimeArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsMangaArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsCharactersArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsStaffArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsStudiosArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsReviewsArgs = {
  sort?: Maybe<Array<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

/** Daily site statistics */
export type SiteTrend = {
  __typename?: 'SiteTrend';
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int'];
  count: Scalars['Int'];
  /** The change from yesterday */
  change: Scalars['Int'];
};

export type SiteTrendConnection = {
  __typename?: 'SiteTrendConnection';
  edges?: Maybe<Array<Maybe<SiteTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<SiteTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Site trend connection edge */
export type SiteTrendEdge = {
  __typename?: 'SiteTrendEdge';
  node?: Maybe<SiteTrend>;
};

/** Site trend sort enums */
export enum SiteTrendSort {
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Change = 'CHANGE',
  ChangeDesc = 'CHANGE_DESC'
}

/** Voice actors or production staff */
export type Staff = {
  __typename?: 'Staff';
  /** The id of the staff member */
  id: Scalars['Int'];
  /** The names of the staff member */
  name?: Maybe<StaffName>;
  /** The primary language of the staff member */
  language?: Maybe<StaffLanguage>;
  /** The staff images */
  image?: Maybe<StaffImage>;
  /** A general description of the staff member */
  description?: Maybe<Scalars['String']>;
  /** If the staff member is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean'];
  /** The url for the staff page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** Media where the staff member has a production role */
  staffMedia?: Maybe<MediaConnection>;
  /** Characters voiced by the actor */
  characters?: Maybe<CharacterConnection>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars['Int']>;
  /** Staff member that the submission is referencing */
  staff?: Maybe<Staff>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
  /** Status of the submission */
  submissionStatus?: Maybe<Scalars['Int']>;
  /** Inner details of submission status */
  submissionNotes?: Maybe<Scalars['String']>;
  /** The amount of user's who have favourited the staff member */
  favourites?: Maybe<Scalars['Int']>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']>;
};


/** Voice actors or production staff */
export type StaffDescriptionArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};


/** Voice actors or production staff */
export type StaffStaffMediaArgs = {
  sort?: Maybe<Array<Maybe<MediaSort>>>;
  type?: Maybe<MediaType>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Voice actors or production staff */
export type StaffCharactersArgs = {
  sort?: Maybe<Array<Maybe<CharacterSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

export type StaffConnection = {
  __typename?: 'StaffConnection';
  edges?: Maybe<Array<Maybe<StaffEdge>>>;
  nodes?: Maybe<Array<Maybe<Staff>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Staff connection edge */
export type StaffEdge = {
  __typename?: 'StaffEdge';
  node?: Maybe<Staff>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']>;
  /** The role of the staff member in the production of the media */
  role?: Maybe<Scalars['String']>;
  /** The order the staff should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']>;
};

export type StaffImage = {
  __typename?: 'StaffImage';
  /** The person's image of media at its largest size */
  large?: Maybe<Scalars['String']>;
  /** The person's image of media at medium size */
  medium?: Maybe<Scalars['String']>;
};

/** The primary language of the voice actor */
export enum StaffLanguage {
  /** Japanese */
  Japanese = 'JAPANESE',
  /** English */
  English = 'ENGLISH',
  /** Korean */
  Korean = 'KOREAN',
  /** Italian */
  Italian = 'ITALIAN',
  /** Spanish */
  Spanish = 'SPANISH',
  /** Portuguese */
  Portuguese = 'PORTUGUESE',
  /** French */
  French = 'FRENCH',
  /** German */
  German = 'GERMAN',
  /** Hebrew */
  Hebrew = 'HEBREW',
  /** Hungarian */
  Hungarian = 'HUNGARIAN'
}

/** The names of the staff member */
export type StaffName = {
  __typename?: 'StaffName';
  /** The person's given name */
  first?: Maybe<Scalars['String']>;
  /** The person's surname */
  last?: Maybe<Scalars['String']>;
  /** The person's full name */
  full?: Maybe<Scalars['String']>;
  /** The person's full name in their native language */
  native?: Maybe<Scalars['String']>;
  /** Other names the staff member might be referred to as (pen names) */
  alternative?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The names of the staff member */
export type StaffNameInput = {
  /** The person's given name */
  first?: Maybe<Scalars['String']>;
  /** The person's surname */
  last?: Maybe<Scalars['String']>;
  /** The person's full name in their native language */
  native?: Maybe<Scalars['String']>;
  /** Other names the character might be referred by */
  alternative?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Staff sort enums */
export enum StaffSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  Language = 'LANGUAGE',
  LanguageDesc = 'LANGUAGE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
}

/** User's staff statistics */
export type StaffStats = {
  __typename?: 'StaffStats';
  staff?: Maybe<Staff>;
  amount?: Maybe<Scalars['Int']>;
  meanScore?: Maybe<Scalars['Int']>;
  /** The amount of time in minutes the staff member has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']>;
};

/** A submission for a staff that features in an anime or manga */
export type StaffSubmission = {
  __typename?: 'StaffSubmission';
  /** The id of the submission */
  id: Scalars['Int'];
  /** Staff that the submission is referencing */
  staff?: Maybe<Staff>;
  /** The staff submission changes */
  submission?: Maybe<Staff>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Int']>;
};

/** The distribution of the watching/reading status of media or a user's list */
export type StatusDistribution = {
  __typename?: 'StatusDistribution';
  /** The day the activity took place (Unix timestamp) */
  status?: Maybe<MediaListStatus>;
  /** The amount of entries with this status */
  amount?: Maybe<Scalars['Int']>;
};

/** Animation or production company */
export type Studio = {
  __typename?: 'Studio';
  /** The id of the studio */
  id: Scalars['Int'];
  /** The name of the studio */
  name: Scalars['String'];
  /** If the studio is an animation studio or a different kind of company */
  isAnimationStudio: Scalars['Boolean'];
  /** The media the studio has worked on */
  media?: Maybe<MediaConnection>;
  /** The url for the studio page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** If the studio is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean'];
  /** The amount of user's who have favourited the studio */
  favourites?: Maybe<Scalars['Int']>;
};


/** Animation or production company */
export type StudioMediaArgs = {
  sort?: Maybe<Array<Maybe<MediaSort>>>;
  isMain?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

export type StudioConnection = {
  __typename?: 'StudioConnection';
  edges?: Maybe<Array<Maybe<StudioEdge>>>;
  nodes?: Maybe<Array<Maybe<Studio>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Studio connection edge */
export type StudioEdge = {
  __typename?: 'StudioEdge';
  node?: Maybe<Studio>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']>;
  /** If the studio is the main animation studio of the anime */
  isMain: Scalars['Boolean'];
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']>;
};

/** Studio sort enums */
export enum StudioSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
}

/** User's studio statistics */
export type StudioStats = {
  __typename?: 'StudioStats';
  studio?: Maybe<Studio>;
  amount?: Maybe<Scalars['Int']>;
  meanScore?: Maybe<Scalars['Int']>;
  /** The amount of time in minutes the studio's works have been watched by the user */
  timeWatched?: Maybe<Scalars['Int']>;
};

/** Submission sort enums */
export enum SubmissionSort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

/** Submission status */
export enum SubmissionStatus {
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  PartiallyAccepted = 'PARTIALLY_ACCEPTED',
  Accepted = 'ACCEPTED'
}

/** User's tag statistics */
export type TagStats = {
  __typename?: 'TagStats';
  tag?: Maybe<MediaTag>;
  amount?: Maybe<Scalars['Int']>;
  meanScore?: Maybe<Scalars['Int']>;
  /** The amount of time in minutes the tag has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']>;
};

/** User text activity */
export type TextActivity = {
  __typename?: 'TextActivity';
  /** The id of the activity */
  id: Scalars['Int'];
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars['Int']>;
  /** The type of activity */
  type?: Maybe<ActivityType>;
  /** The number of activity replies */
  replyCount: Scalars['Int'];
  /** The status text (Markdown) */
  text?: Maybe<Scalars['String']>;
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']>;
  /** The time the activity was created at */
  createdAt: Scalars['Int'];
  /** The user who created the activity */
  user?: Maybe<User>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
};


/** User text activity */
export type TextActivityTextArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** Forum Thread */
export type Thread = {
  __typename?: 'Thread';
  /** The id of the thread */
  id: Scalars['Int'];
  /** The title of the thread */
  title?: Maybe<Scalars['String']>;
  /** The text body of the thread (Markdown) */
  body?: Maybe<Scalars['String']>;
  /** The id of the thread owner user */
  userId: Scalars['Int'];
  /** The id of the user who most recently commented on the thread */
  replyUserId?: Maybe<Scalars['Int']>;
  /** The id of the most recent comment on the thread */
  replyCommentId?: Maybe<Scalars['Int']>;
  /** The number of comments on the thread */
  replyCount?: Maybe<Scalars['Int']>;
  /** The number of times users have viewed the thread */
  viewCount?: Maybe<Scalars['Int']>;
  /** If the thread is locked and can receive comments */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** If the thread is stickied and should be displayed at the top of the page */
  isSticky?: Maybe<Scalars['Boolean']>;
  /** If the currently authenticated user is subscribed to the thread */
  isSubscribed?: Maybe<Scalars['Boolean']>;
  /** The amount of likes the thread has */
  likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the thread */
  isLiked?: Maybe<Scalars['Boolean']>;
  /** The time of the last reply */
  repliedAt?: Maybe<Scalars['Int']>;
  /** The time of the thread creation */
  createdAt: Scalars['Int'];
  /** The time of the thread last update */
  updatedAt: Scalars['Int'];
  /** The owner of the thread */
  user?: Maybe<User>;
  /** The user to last reply to the thread */
  replyUser?: Maybe<User>;
  /** The users who liked the thread */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The url for the thread page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** The categories of the thread */
  categories?: Maybe<Array<Maybe<ThreadCategory>>>;
  /** The media categories of the thread */
  mediaCategories?: Maybe<Array<Maybe<Media>>>;
};


/** Forum Thread */
export type ThreadBodyArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** A forum thread category */
export type ThreadCategory = {
  __typename?: 'ThreadCategory';
  /** The id of the category */
  id: Scalars['Int'];
  /** The name of the category */
  name: Scalars['String'];
};

/** Forum Thread Comment */
export type ThreadComment = {
  __typename?: 'ThreadComment';
  /** The id of the comment */
  id: Scalars['Int'];
  /** The user id of the comment's owner */
  userId?: Maybe<Scalars['Int']>;
  /** The id of thread the comment belongs to */
  threadId?: Maybe<Scalars['Int']>;
  /** The text content of the comment (Markdown) */
  comment?: Maybe<Scalars['String']>;
  /** The amount of likes the comment has */
  likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the comment */
  isLiked?: Maybe<Scalars['Boolean']>;
  /** The url for the comment page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** The time of the comments creation */
  createdAt: Scalars['Int'];
  /** The time of the comments last update */
  updatedAt: Scalars['Int'];
  /** The thread the comment belongs to */
  thread?: Maybe<Thread>;
  /** The user who created the comment */
  user?: Maybe<User>;
  /** The users who liked the comment */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The comment's child reply comments */
  childComments?: Maybe<Scalars['Json']>;
};


/** Forum Thread Comment */
export type ThreadCommentCommentArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** Notification for when a thread comment is liked */
export type ThreadCommentLikeNotification = {
  __typename?: 'ThreadCommentLikeNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who liked to the activity */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the activity which was liked */
  commentId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The thread comment that was liked */
  comment?: Maybe<ThreadComment>;
  /** The user who liked the activity */
  user?: Maybe<User>;
};

/** Notification for when authenticated user is @ mentioned in a forum thread comment */
export type ThreadCommentMentionNotification = {
  __typename?: 'ThreadCommentMentionNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the comment where mentioned */
  commentId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The thread comment that included the @ mention */
  comment?: Maybe<ThreadComment>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<User>;
};

/** Notification for when a user replies to your forum thread comment */
export type ThreadCommentReplyNotification = {
  __typename?: 'ThreadCommentReplyNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who create the comment reply */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the reply comment */
  commentId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The reply thread comment */
  comment?: Maybe<ThreadComment>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
};

/** Thread comments sort enums */
export enum ThreadCommentSort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
}

/** Notification for when a user replies to a subscribed forum thread */
export type ThreadCommentSubscribedNotification = {
  __typename?: 'ThreadCommentSubscribedNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who commented on the thread */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the new comment in the subscribed thread */
  commentId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The reply thread comment */
  comment?: Maybe<ThreadComment>;
  /** The user who replied to the subscribed thread */
  user?: Maybe<User>;
};

/** Notification for when a thread is liked */
export type ThreadLikeNotification = {
  __typename?: 'ThreadLikeNotification';
  /** The id of the Notification */
  id: Scalars['Int'];
  /** The id of the user who liked to the activity */
  userId: Scalars['Int'];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The id of the thread which was liked */
  threadId: Scalars['Int'];
  /** The notification context text */
  context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The liked thread comment */
  comment?: Maybe<ThreadComment>;
  /** The user who liked the activity */
  user?: Maybe<User>;
};

/** Thread sort enums */
export enum ThreadSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Title = 'TITLE',
  TitleDesc = 'TITLE_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  RepliedAt = 'REPLIED_AT',
  RepliedAtDesc = 'REPLIED_AT_DESC',
  ReplyCount = 'REPLY_COUNT',
  ReplyCountDesc = 'REPLY_COUNT_DESC',
  ViewCount = 'VIEW_COUNT',
  ViewCountDesc = 'VIEW_COUNT_DESC',
  IsSticky = 'IS_STICKY',
  SearchMatch = 'SEARCH_MATCH'
}

/** A user */
export type User = {
  __typename?: 'User';
  /** The id of the user */
  id: Scalars['Int'];
  /** The name of the user */
  name: Scalars['String'];
  /** The bio written by user (Markdown) */
  about?: Maybe<Scalars['String']>;
  /** The user's avatar images */
  avatar?: Maybe<UserAvatar>;
  /** The user's banner images */
  bannerImage?: Maybe<Scalars['String']>;
  /** If the authenticated user if following this user */
  isFollowing?: Maybe<Scalars['Boolean']>;
  /** If this user if following the authenticated user */
  isFollower?: Maybe<Scalars['Boolean']>;
  /** If the user is blocked by the authenticated user */
  isBlocked?: Maybe<Scalars['Boolean']>;
  bans?: Maybe<Scalars['Json']>;
  /** The user's general options */
  options?: Maybe<UserOptions>;
  /** The user's media list options */
  mediaListOptions?: Maybe<MediaListOptions>;
  /** The users favourites */
  favourites?: Maybe<Favourites>;
  /** The users anime & manga list statistics */
  statistics?: Maybe<UserStatisticTypes>;
  /** The number of unread notifications the user has */
  unreadNotificationCount?: Maybe<Scalars['Int']>;
  /** The url for the user page on the AniList website */
  siteUrl?: Maybe<Scalars['String']>;
  /** The donation tier of the user */
  donatorTier?: Maybe<Scalars['Int']>;
  /** Custom donation badge text */
  donatorBadge?: Maybe<Scalars['String']>;
  /** If the user is a moderator or data moderator */
  moderatorStatus?: Maybe<Scalars['String']>;
  /** When the user's data was last updated */
  updatedAt?: Maybe<Scalars['Int']>;
  /**
   * The user's statistics
   * @deprecated Deprecated. Replaced with statistics field.
   */
  stats?: Maybe<UserStats>;
};


/** A user */
export type UserAboutArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};


/** A user */
export type UserFavouritesArgs = {
  page?: Maybe<Scalars['Int']>;
};

/** A user's activity history stats. */
export type UserActivityHistory = {
  __typename?: 'UserActivityHistory';
  /** The day the activity took place (Unix timestamp) */
  date?: Maybe<Scalars['Int']>;
  /** The amount of activity on the day */
  amount?: Maybe<Scalars['Int']>;
  /** The level of activity represented on a 1-10 scale */
  level?: Maybe<Scalars['Int']>;
};

/** A user's avatars */
export type UserAvatar = {
  __typename?: 'UserAvatar';
  /** The avatar of user at its largest size */
  large?: Maybe<Scalars['String']>;
  /** The avatar of user at medium size */
  medium?: Maybe<Scalars['String']>;
};

export type UserCountryStatistic = {
  __typename?: 'UserCountryStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  country?: Maybe<Scalars['CountryCode']>;
};

export type UserFormatStatistic = {
  __typename?: 'UserFormatStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  format?: Maybe<MediaFormat>;
};

export type UserGenreStatistic = {
  __typename?: 'UserGenreStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  genre?: Maybe<Scalars['String']>;
};

export type UserLengthStatistic = {
  __typename?: 'UserLengthStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  length?: Maybe<Scalars['String']>;
};

/** User data for moderators */
export type UserModData = {
  __typename?: 'UserModData';
  alts?: Maybe<Array<Maybe<User>>>;
  bans?: Maybe<Scalars['Json']>;
  ip?: Maybe<Scalars['Json']>;
  counts?: Maybe<Scalars['Json']>;
};

/** A user's general options */
export type UserOptions = {
  __typename?: 'UserOptions';
  /** The language the user wants to see media titles in */
  titleLanguage?: Maybe<UserTitleLanguage>;
  /** Whether the user has enabled viewing of 18+ content */
  displayAdultContent?: Maybe<Scalars['Boolean']>;
  /** Whether the user receives notifications when a show they are watching aires */
  airingNotifications?: Maybe<Scalars['Boolean']>;
  /** Profile highlight color (blue, purple, pink, orange, red, green, gray) */
  profileColor?: Maybe<Scalars['String']>;
  /** Notification options */
  notificationOptions?: Maybe<Array<Maybe<NotificationOption>>>;
};

export type UserReleaseYearStatistic = {
  __typename?: 'UserReleaseYearStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  releaseYear?: Maybe<Scalars['Int']>;
};

export type UserScoreStatistic = {
  __typename?: 'UserScoreStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  score?: Maybe<Scalars['Int']>;
};

/** User sort enums */
export enum UserSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Username = 'USERNAME',
  UsernameDesc = 'USERNAME_DESC',
  WatchedTime = 'WATCHED_TIME',
  WatchedTimeDesc = 'WATCHED_TIME_DESC',
  ChaptersRead = 'CHAPTERS_READ',
  ChaptersReadDesc = 'CHAPTERS_READ_DESC',
  SearchMatch = 'SEARCH_MATCH'
}

export type UserStaffStatistic = {
  __typename?: 'UserStaffStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  staff?: Maybe<Staff>;
};

export type UserStartYearStatistic = {
  __typename?: 'UserStartYearStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  startYear?: Maybe<Scalars['Int']>;
};

export type UserStatistics = {
  __typename?: 'UserStatistics';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  standardDeviation: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  episodesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  volumesRead: Scalars['Int'];
  formats?: Maybe<Array<Maybe<UserFormatStatistic>>>;
  statuses?: Maybe<Array<Maybe<UserStatusStatistic>>>;
  scores?: Maybe<Array<Maybe<UserScoreStatistic>>>;
  lengths?: Maybe<Array<Maybe<UserLengthStatistic>>>;
  releaseYears?: Maybe<Array<Maybe<UserReleaseYearStatistic>>>;
  startYears?: Maybe<Array<Maybe<UserStartYearStatistic>>>;
  genres?: Maybe<Array<Maybe<UserGenreStatistic>>>;
  tags?: Maybe<Array<Maybe<UserTagStatistic>>>;
  countries?: Maybe<Array<Maybe<UserCountryStatistic>>>;
  voiceActors?: Maybe<Array<Maybe<UserVoiceActorStatistic>>>;
  staff?: Maybe<Array<Maybe<UserStaffStatistic>>>;
  studios?: Maybe<Array<Maybe<UserStudioStatistic>>>;
};


export type UserStatisticsFormatsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsStatusesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsScoresArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsLengthsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsReleaseYearsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsStartYearsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsGenresArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsTagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsCountriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsVoiceActorsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsStaffArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsStudiosArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<UserStatisticsSort>>>;
};

/** User statistics sort enum */
export enum UserStatisticsSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  MeanScore = 'MEAN_SCORE',
  MeanScoreDesc = 'MEAN_SCORE_DESC'
}

export type UserStatisticTypes = {
  __typename?: 'UserStatisticTypes';
  anime?: Maybe<UserStatistics>;
  manga?: Maybe<UserStatistics>;
};

/** A user's statistics */
export type UserStats = {
  __typename?: 'UserStats';
  /** The amount of anime the user has watched in minutes */
  watchedTime?: Maybe<Scalars['Int']>;
  /** The amount of manga chapters the user has read */
  chaptersRead?: Maybe<Scalars['Int']>;
  activityHistory?: Maybe<Array<Maybe<UserActivityHistory>>>;
  animeStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
  mangaStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
  animeScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  mangaScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  animeListScores?: Maybe<ListScoreStats>;
  mangaListScores?: Maybe<ListScoreStats>;
  favouredGenresOverview?: Maybe<Array<Maybe<GenreStats>>>;
  favouredGenres?: Maybe<Array<Maybe<GenreStats>>>;
  favouredTags?: Maybe<Array<Maybe<TagStats>>>;
  favouredActors?: Maybe<Array<Maybe<StaffStats>>>;
  favouredStaff?: Maybe<Array<Maybe<StaffStats>>>;
  favouredStudios?: Maybe<Array<Maybe<StudioStats>>>;
  favouredYears?: Maybe<Array<Maybe<YearStats>>>;
  favouredFormats?: Maybe<Array<Maybe<FormatStats>>>;
};

export type UserStatusStatistic = {
  __typename?: 'UserStatusStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  status?: Maybe<MediaListStatus>;
};

export type UserStudioStatistic = {
  __typename?: 'UserStudioStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  studio?: Maybe<Studio>;
};

export type UserTagStatistic = {
  __typename?: 'UserTagStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  tag?: Maybe<MediaTag>;
};

/** The language the user wants to see media titles in */
export enum UserTitleLanguage {
  /** The romanization of the native language title */
  Romaji = 'ROMAJI',
  /** The official english title */
  English = 'ENGLISH',
  /** Official title in it's native language */
  Native = 'NATIVE',
  /** The romanization of the native language title, stylised by media creator */
  RomajiStylised = 'ROMAJI_STYLISED',
  /** The official english title, stylised by media creator */
  EnglishStylised = 'ENGLISH_STYLISED',
  /** Official title in it's native language, stylised by media creator */
  NativeStylised = 'NATIVE_STYLISED'
}

export type UserVoiceActorStatistic = {
  __typename?: 'UserVoiceActorStatistic';
  count: Scalars['Int'];
  meanScore: Scalars['Float'];
  minutesWatched: Scalars['Int'];
  chaptersRead: Scalars['Int'];
  mediaIds: Array<Maybe<Scalars['Int']>>;
  voiceActor?: Maybe<Staff>;
  characterIds: Array<Maybe<Scalars['Int']>>;
};

/** User's year statistics */
export type YearStats = {
  __typename?: 'YearStats';
  year?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
  meanScore?: Maybe<Scalars['Int']>;
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
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Page: ResolverTypeWrapper<Omit<Page, 'notifications' | 'activities'> & { notifications?: Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>, activities?: Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>> }>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UserSort: UserSort;
  User: ResolverTypeWrapper<User>;
  UserAvatar: ResolverTypeWrapper<UserAvatar>;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  UserOptions: ResolverTypeWrapper<UserOptions>;
  UserTitleLanguage: UserTitleLanguage;
  NotificationOption: ResolverTypeWrapper<NotificationOption>;
  NotificationType: NotificationType;
  MediaListOptions: ResolverTypeWrapper<MediaListOptions>;
  ScoreFormat: ScoreFormat;
  MediaListTypeOptions: ResolverTypeWrapper<MediaListTypeOptions>;
  Favourites: ResolverTypeWrapper<Favourites>;
  MediaConnection: ResolverTypeWrapper<MediaConnection>;
  MediaEdge: ResolverTypeWrapper<MediaEdge>;
  Media: ResolverTypeWrapper<Media>;
  MediaTitle: ResolverTypeWrapper<MediaTitle>;
  MediaType: MediaType;
  MediaFormat: MediaFormat;
  MediaStatus: MediaStatus;
  FuzzyDate: ResolverTypeWrapper<FuzzyDate>;
  MediaSeason: MediaSeason;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']>;
  MediaSource: MediaSource;
  MediaTrailer: ResolverTypeWrapper<MediaTrailer>;
  MediaCoverImage: ResolverTypeWrapper<MediaCoverImage>;
  MediaTag: ResolverTypeWrapper<MediaTag>;
  CharacterSort: CharacterSort;
  CharacterRole: CharacterRole;
  CharacterConnection: ResolverTypeWrapper<CharacterConnection>;
  CharacterEdge: ResolverTypeWrapper<CharacterEdge>;
  Character: ResolverTypeWrapper<Character>;
  CharacterName: ResolverTypeWrapper<CharacterName>;
  CharacterImage: ResolverTypeWrapper<CharacterImage>;
  MediaSort: MediaSort;
  StaffLanguage: StaffLanguage;
  StaffSort: StaffSort;
  Staff: ResolverTypeWrapper<Staff>;
  StaffName: ResolverTypeWrapper<StaffName>;
  StaffImage: ResolverTypeWrapper<StaffImage>;
  StaffConnection: ResolverTypeWrapper<StaffConnection>;
  StaffEdge: ResolverTypeWrapper<StaffEdge>;
  StudioSort: StudioSort;
  StudioConnection: ResolverTypeWrapper<StudioConnection>;
  StudioEdge: ResolverTypeWrapper<StudioEdge>;
  Studio: ResolverTypeWrapper<Studio>;
  AiringSchedule: ResolverTypeWrapper<AiringSchedule>;
  AiringScheduleConnection: ResolverTypeWrapper<AiringScheduleConnection>;
  AiringScheduleEdge: ResolverTypeWrapper<AiringScheduleEdge>;
  MediaTrendSort: MediaTrendSort;
  MediaTrendConnection: ResolverTypeWrapper<MediaTrendConnection>;
  MediaTrendEdge: ResolverTypeWrapper<MediaTrendEdge>;
  MediaTrend: ResolverTypeWrapper<MediaTrend>;
  MediaExternalLink: ResolverTypeWrapper<MediaExternalLink>;
  MediaStreamingEpisode: ResolverTypeWrapper<MediaStreamingEpisode>;
  MediaRank: ResolverTypeWrapper<MediaRank>;
  MediaRankType: MediaRankType;
  MediaList: ResolverTypeWrapper<MediaList>;
  MediaListStatus: MediaListStatus;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ReviewSort: ReviewSort;
  ReviewConnection: ResolverTypeWrapper<ReviewConnection>;
  ReviewEdge: ResolverTypeWrapper<ReviewEdge>;
  Review: ResolverTypeWrapper<Review>;
  ReviewRating: ReviewRating;
  RecommendationSort: RecommendationSort;
  RecommendationConnection: ResolverTypeWrapper<RecommendationConnection>;
  RecommendationEdge: ResolverTypeWrapper<RecommendationEdge>;
  Recommendation: ResolverTypeWrapper<Recommendation>;
  RecommendationRating: RecommendationRating;
  MediaStats: ResolverTypeWrapper<MediaStats>;
  ScoreDistribution: ResolverTypeWrapper<ScoreDistribution>;
  StatusDistribution: ResolverTypeWrapper<StatusDistribution>;
  AiringProgression: ResolverTypeWrapper<AiringProgression>;
  MediaRelation: MediaRelation;
  UserStatisticTypes: ResolverTypeWrapper<UserStatisticTypes>;
  UserStatistics: ResolverTypeWrapper<UserStatistics>;
  UserStatisticsSort: UserStatisticsSort;
  UserFormatStatistic: ResolverTypeWrapper<UserFormatStatistic>;
  UserStatusStatistic: ResolverTypeWrapper<UserStatusStatistic>;
  UserScoreStatistic: ResolverTypeWrapper<UserScoreStatistic>;
  UserLengthStatistic: ResolverTypeWrapper<UserLengthStatistic>;
  UserReleaseYearStatistic: ResolverTypeWrapper<UserReleaseYearStatistic>;
  UserStartYearStatistic: ResolverTypeWrapper<UserStartYearStatistic>;
  UserGenreStatistic: ResolverTypeWrapper<UserGenreStatistic>;
  UserTagStatistic: ResolverTypeWrapper<UserTagStatistic>;
  UserCountryStatistic: ResolverTypeWrapper<UserCountryStatistic>;
  UserVoiceActorStatistic: ResolverTypeWrapper<UserVoiceActorStatistic>;
  UserStaffStatistic: ResolverTypeWrapper<UserStaffStatistic>;
  UserStudioStatistic: ResolverTypeWrapper<UserStudioStatistic>;
  UserStats: ResolverTypeWrapper<UserStats>;
  UserActivityHistory: ResolverTypeWrapper<UserActivityHistory>;
  ListScoreStats: ResolverTypeWrapper<ListScoreStats>;
  GenreStats: ResolverTypeWrapper<GenreStats>;
  TagStats: ResolverTypeWrapper<TagStats>;
  StaffStats: ResolverTypeWrapper<StaffStats>;
  StudioStats: ResolverTypeWrapper<StudioStats>;
  YearStats: ResolverTypeWrapper<YearStats>;
  FormatStats: ResolverTypeWrapper<FormatStats>;
  FuzzyDateInt: ResolverTypeWrapper<Scalars['FuzzyDateInt']>;
  MediaListSort: MediaListSort;
  AiringSort: AiringSort;
  NotificationUnion: ResolversTypes['AiringNotification'] | ResolversTypes['FollowingNotification'] | ResolversTypes['ActivityMessageNotification'] | ResolversTypes['ActivityMentionNotification'] | ResolversTypes['ActivityReplyNotification'] | ResolversTypes['ActivityReplySubscribedNotification'] | ResolversTypes['ActivityLikeNotification'] | ResolversTypes['ActivityReplyLikeNotification'] | ResolversTypes['ThreadCommentMentionNotification'] | ResolversTypes['ThreadCommentReplyNotification'] | ResolversTypes['ThreadCommentSubscribedNotification'] | ResolversTypes['ThreadCommentLikeNotification'] | ResolversTypes['ThreadLikeNotification'] | ResolversTypes['RelatedMediaAdditionNotification'];
  AiringNotification: ResolverTypeWrapper<AiringNotification>;
  FollowingNotification: ResolverTypeWrapper<FollowingNotification>;
  ActivityMessageNotification: ResolverTypeWrapper<ActivityMessageNotification>;
  MessageActivity: ResolverTypeWrapper<MessageActivity>;
  ActivityType: ActivityType;
  ActivityReply: ResolverTypeWrapper<ActivityReply>;
  ActivityMentionNotification: ResolverTypeWrapper<Omit<ActivityMentionNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityUnion: ResolversTypes['TextActivity'] | ResolversTypes['ListActivity'] | ResolversTypes['MessageActivity'];
  TextActivity: ResolverTypeWrapper<TextActivity>;
  ListActivity: ResolverTypeWrapper<ListActivity>;
  ActivityReplyNotification: ResolverTypeWrapper<Omit<ActivityReplyNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityReplySubscribedNotification: ResolverTypeWrapper<Omit<ActivityReplySubscribedNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityLikeNotification: ResolverTypeWrapper<Omit<ActivityLikeNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityReplyLikeNotification: ResolverTypeWrapper<Omit<ActivityReplyLikeNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ThreadCommentMentionNotification: ResolverTypeWrapper<ThreadCommentMentionNotification>;
  Thread: ResolverTypeWrapper<Thread>;
  ThreadCategory: ResolverTypeWrapper<ThreadCategory>;
  ThreadComment: ResolverTypeWrapper<ThreadComment>;
  ThreadCommentReplyNotification: ResolverTypeWrapper<ThreadCommentReplyNotification>;
  ThreadCommentSubscribedNotification: ResolverTypeWrapper<ThreadCommentSubscribedNotification>;
  ThreadCommentLikeNotification: ResolverTypeWrapper<ThreadCommentLikeNotification>;
  ThreadLikeNotification: ResolverTypeWrapper<ThreadLikeNotification>;
  RelatedMediaAdditionNotification: ResolverTypeWrapper<RelatedMediaAdditionNotification>;
  ActivitySort: ActivitySort;
  ThreadSort: ThreadSort;
  ThreadCommentSort: ThreadCommentSort;
  LikeableType: LikeableType;
  MediaListCollection: ResolverTypeWrapper<MediaListCollection>;
  MediaListGroup: ResolverTypeWrapper<MediaListGroup>;
  ParsedMarkdown: ResolverTypeWrapper<ParsedMarkdown>;
  AniChartUser: ResolverTypeWrapper<AniChartUser>;
  SiteStatistics: ResolverTypeWrapper<SiteStatistics>;
  SiteTrendSort: SiteTrendSort;
  SiteTrendConnection: ResolverTypeWrapper<SiteTrendConnection>;
  SiteTrendEdge: ResolverTypeWrapper<SiteTrendEdge>;
  SiteTrend: ResolverTypeWrapper<SiteTrend>;
  Mutation: ResolverTypeWrapper<{}>;
  NotificationOptionInput: NotificationOptionInput;
  MediaListOptionsInput: MediaListOptionsInput;
  FuzzyDateInput: FuzzyDateInput;
  Deleted: ResolverTypeWrapper<Deleted>;
  LikeableUnion: ResolversTypes['ListActivity'] | ResolversTypes['TextActivity'] | ResolversTypes['MessageActivity'] | ResolversTypes['ActivityReply'] | ResolversTypes['Thread'] | ResolversTypes['ThreadComment'];
  AniChartHighlightInput: AniChartHighlightInput;
  InternalPage: ResolverTypeWrapper<Omit<InternalPage, 'notifications' | 'activities'> & { notifications?: Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>, activities?: Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>> }>;
  SubmissionStatus: SubmissionStatus;
  SubmissionSort: SubmissionSort;
  MediaSubmission: ResolverTypeWrapper<MediaSubmission>;
  MediaSubmissionComparison: ResolverTypeWrapper<MediaSubmissionComparison>;
  MediaSubmissionEdge: ResolverTypeWrapper<MediaSubmissionEdge>;
  MediaCharacter: ResolverTypeWrapper<MediaCharacter>;
  CharacterSubmission: ResolverTypeWrapper<CharacterSubmission>;
  StaffSubmission: ResolverTypeWrapper<StaffSubmission>;
  RevisionHistory: ResolverTypeWrapper<RevisionHistory>;
  RevisionHistoryAction: RevisionHistoryAction;
  Report: ResolverTypeWrapper<Report>;
  ModAction: ResolverTypeWrapper<ModAction>;
  ModActionType: ModActionType;
  MediaTitleInput: MediaTitleInput;
  MediaExternalLinkInput: MediaExternalLinkInput;
  AiringScheduleInput: AiringScheduleInput;
  CharacterNameInput: CharacterNameInput;
  CharacterSubmissionConnection: ResolverTypeWrapper<CharacterSubmissionConnection>;
  CharacterSubmissionEdge: ResolverTypeWrapper<CharacterSubmissionEdge>;
  StaffNameInput: StaffNameInput;
  UserModData: ResolverTypeWrapper<UserModData>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  Page: Omit<Page, 'notifications' | 'activities'> & { notifications?: Maybe<Array<Maybe<ResolversParentTypes['NotificationUnion']>>>, activities?: Maybe<Array<Maybe<ResolversParentTypes['ActivityUnion']>>> };
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  User: User;
  UserAvatar: UserAvatar;
  Json: Scalars['Json'];
  UserOptions: UserOptions;
  NotificationOption: NotificationOption;
  MediaListOptions: MediaListOptions;
  MediaListTypeOptions: MediaListTypeOptions;
  Favourites: Favourites;
  MediaConnection: MediaConnection;
  MediaEdge: MediaEdge;
  Media: Media;
  MediaTitle: MediaTitle;
  FuzzyDate: FuzzyDate;
  CountryCode: Scalars['CountryCode'];
  MediaTrailer: MediaTrailer;
  MediaCoverImage: MediaCoverImage;
  MediaTag: MediaTag;
  CharacterConnection: CharacterConnection;
  CharacterEdge: CharacterEdge;
  Character: Character;
  CharacterName: CharacterName;
  CharacterImage: CharacterImage;
  Staff: Staff;
  StaffName: StaffName;
  StaffImage: StaffImage;
  StaffConnection: StaffConnection;
  StaffEdge: StaffEdge;
  StudioConnection: StudioConnection;
  StudioEdge: StudioEdge;
  Studio: Studio;
  AiringSchedule: AiringSchedule;
  AiringScheduleConnection: AiringScheduleConnection;
  AiringScheduleEdge: AiringScheduleEdge;
  MediaTrendConnection: MediaTrendConnection;
  MediaTrendEdge: MediaTrendEdge;
  MediaTrend: MediaTrend;
  MediaExternalLink: MediaExternalLink;
  MediaStreamingEpisode: MediaStreamingEpisode;
  MediaRank: MediaRank;
  MediaList: MediaList;
  Float: Scalars['Float'];
  ReviewConnection: ReviewConnection;
  ReviewEdge: ReviewEdge;
  Review: Review;
  RecommendationConnection: RecommendationConnection;
  RecommendationEdge: RecommendationEdge;
  Recommendation: Recommendation;
  MediaStats: MediaStats;
  ScoreDistribution: ScoreDistribution;
  StatusDistribution: StatusDistribution;
  AiringProgression: AiringProgression;
  UserStatisticTypes: UserStatisticTypes;
  UserStatistics: UserStatistics;
  UserFormatStatistic: UserFormatStatistic;
  UserStatusStatistic: UserStatusStatistic;
  UserScoreStatistic: UserScoreStatistic;
  UserLengthStatistic: UserLengthStatistic;
  UserReleaseYearStatistic: UserReleaseYearStatistic;
  UserStartYearStatistic: UserStartYearStatistic;
  UserGenreStatistic: UserGenreStatistic;
  UserTagStatistic: UserTagStatistic;
  UserCountryStatistic: UserCountryStatistic;
  UserVoiceActorStatistic: UserVoiceActorStatistic;
  UserStaffStatistic: UserStaffStatistic;
  UserStudioStatistic: UserStudioStatistic;
  UserStats: UserStats;
  UserActivityHistory: UserActivityHistory;
  ListScoreStats: ListScoreStats;
  GenreStats: GenreStats;
  TagStats: TagStats;
  StaffStats: StaffStats;
  StudioStats: StudioStats;
  YearStats: YearStats;
  FormatStats: FormatStats;
  FuzzyDateInt: Scalars['FuzzyDateInt'];
  NotificationUnion: ResolversParentTypes['AiringNotification'] | ResolversParentTypes['FollowingNotification'] | ResolversParentTypes['ActivityMessageNotification'] | ResolversParentTypes['ActivityMentionNotification'] | ResolversParentTypes['ActivityReplyNotification'] | ResolversParentTypes['ActivityReplySubscribedNotification'] | ResolversParentTypes['ActivityLikeNotification'] | ResolversParentTypes['ActivityReplyLikeNotification'] | ResolversParentTypes['ThreadCommentMentionNotification'] | ResolversParentTypes['ThreadCommentReplyNotification'] | ResolversParentTypes['ThreadCommentSubscribedNotification'] | ResolversParentTypes['ThreadCommentLikeNotification'] | ResolversParentTypes['ThreadLikeNotification'] | ResolversParentTypes['RelatedMediaAdditionNotification'];
  AiringNotification: AiringNotification;
  FollowingNotification: FollowingNotification;
  ActivityMessageNotification: ActivityMessageNotification;
  MessageActivity: MessageActivity;
  ActivityReply: ActivityReply;
  ActivityMentionNotification: Omit<ActivityMentionNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityUnion: ResolversParentTypes['TextActivity'] | ResolversParentTypes['ListActivity'] | ResolversParentTypes['MessageActivity'];
  TextActivity: TextActivity;
  ListActivity: ListActivity;
  ActivityReplyNotification: Omit<ActivityReplyNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityReplySubscribedNotification: Omit<ActivityReplySubscribedNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityLikeNotification: Omit<ActivityLikeNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityReplyLikeNotification: Omit<ActivityReplyLikeNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ThreadCommentMentionNotification: ThreadCommentMentionNotification;
  Thread: Thread;
  ThreadCategory: ThreadCategory;
  ThreadComment: ThreadComment;
  ThreadCommentReplyNotification: ThreadCommentReplyNotification;
  ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotification;
  ThreadCommentLikeNotification: ThreadCommentLikeNotification;
  ThreadLikeNotification: ThreadLikeNotification;
  RelatedMediaAdditionNotification: RelatedMediaAdditionNotification;
  MediaListCollection: MediaListCollection;
  MediaListGroup: MediaListGroup;
  ParsedMarkdown: ParsedMarkdown;
  AniChartUser: AniChartUser;
  SiteStatistics: SiteStatistics;
  SiteTrendConnection: SiteTrendConnection;
  SiteTrendEdge: SiteTrendEdge;
  SiteTrend: SiteTrend;
  Mutation: {};
  NotificationOptionInput: NotificationOptionInput;
  MediaListOptionsInput: MediaListOptionsInput;
  FuzzyDateInput: FuzzyDateInput;
  Deleted: Deleted;
  LikeableUnion: ResolversParentTypes['ListActivity'] | ResolversParentTypes['TextActivity'] | ResolversParentTypes['MessageActivity'] | ResolversParentTypes['ActivityReply'] | ResolversParentTypes['Thread'] | ResolversParentTypes['ThreadComment'];
  AniChartHighlightInput: AniChartHighlightInput;
  InternalPage: Omit<InternalPage, 'notifications' | 'activities'> & { notifications?: Maybe<Array<Maybe<ResolversParentTypes['NotificationUnion']>>>, activities?: Maybe<Array<Maybe<ResolversParentTypes['ActivityUnion']>>> };
  MediaSubmission: MediaSubmission;
  MediaSubmissionComparison: MediaSubmissionComparison;
  MediaSubmissionEdge: MediaSubmissionEdge;
  MediaCharacter: MediaCharacter;
  CharacterSubmission: CharacterSubmission;
  StaffSubmission: StaffSubmission;
  RevisionHistory: RevisionHistory;
  Report: Report;
  ModAction: ModAction;
  MediaTitleInput: MediaTitleInput;
  MediaExternalLinkInput: MediaExternalLinkInput;
  AiringScheduleInput: AiringScheduleInput;
  CharacterNameInput: CharacterNameInput;
  CharacterSubmissionConnection: CharacterSubmissionConnection;
  CharacterSubmissionEdge: CharacterSubmissionEdge;
  StaffNameInput: StaffNameInput;
  UserModData: UserModData;
};

export type ActivityLikeNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityLikeNotification'] = ResolversParentTypes['ActivityLikeNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityMentionNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityMentionNotification'] = ResolversParentTypes['ActivityMentionNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityMessageNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityMessageNotification'] = ResolversParentTypes['ActivityMessageNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['MessageActivity']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityReplyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityReply'] = ResolversParentTypes['ActivityReply']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ActivityReplyTextArgs, never>>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityReplyLikeNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityReplyLikeNotification'] = ResolversParentTypes['ActivityReplyLikeNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityReplyNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityReplyNotification'] = ResolversParentTypes['ActivityReplyNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityReplySubscribedNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityReplySubscribedNotification'] = ResolversParentTypes['ActivityReplySubscribedNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityUnion'] = ResolversParentTypes['ActivityUnion']> = {
  __resolveType: TypeResolveFn<'TextActivity' | 'ListActivity' | 'MessageActivity', ParentType, ContextType>;
};

export type AiringNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringNotification'] = ResolversParentTypes['AiringNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  animeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  episode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contexts?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AiringProgressionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringProgression'] = ResolversParentTypes['AiringProgression']> = {
  episode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  watching?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AiringScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringSchedule'] = ResolversParentTypes['AiringSchedule']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  airingAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeUntilAiring?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  episode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AiringScheduleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringScheduleConnection'] = ResolversParentTypes['AiringScheduleConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringScheduleEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringSchedule']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AiringScheduleEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringScheduleEdge'] = ResolversParentTypes['AiringScheduleEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AniChartUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AniChartUser'] = ResolversParentTypes['AniChartUser']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  highlights?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['CharacterName']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['CharacterImage']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<CharacterDescriptionArgs, never>>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<CharacterMediaArgs, never>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterConnection'] = ResolversParentTypes['CharacterConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterEdge'] = ResolversParentTypes['CharacterEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  voiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, RequireFields<CharacterEdgeVoiceActorsArgs, never>>;
  media?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
  favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterImage'] = ResolversParentTypes['CharacterImage']> = {
  large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterName'] = ResolversParentTypes['CharacterName']> = {
  first?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternative?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterSubmissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterSubmission'] = ResolversParentTypes['CharacterSubmission']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  submission?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterSubmissionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterSubmissionConnection'] = ResolversParentTypes['CharacterSubmissionConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterSubmissionEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterSubmission']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterSubmissionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterSubmissionEdge'] = ResolversParentTypes['CharacterSubmissionEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['CharacterSubmission']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  voiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType>;
  submittedVoiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffSubmission']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export type DeletedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deleted'] = ResolversParentTypes['Deleted']> = {
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FavouritesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Favourites'] = ResolversParentTypes['Favourites']> = {
  anime?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<FavouritesAnimeArgs, never>>;
  manga?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<FavouritesMangaArgs, never>>;
  characters?: Resolver<Maybe<ResolversTypes['CharacterConnection']>, ParentType, ContextType, RequireFields<FavouritesCharactersArgs, never>>;
  staff?: Resolver<Maybe<ResolversTypes['StaffConnection']>, ParentType, ContextType, RequireFields<FavouritesStaffArgs, never>>;
  studios?: Resolver<Maybe<ResolversTypes['StudioConnection']>, ParentType, ContextType, RequireFields<FavouritesStudiosArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FollowingNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowingNotification'] = ResolversParentTypes['FollowingNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FormatStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FormatStats'] = ResolversParentTypes['FormatStats']> = {
  format?: Resolver<Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FuzzyDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FuzzyDate'] = ResolversParentTypes['FuzzyDate']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface FuzzyDateIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FuzzyDateInt'], any> {
  name: 'FuzzyDateInt';
}

export type GenreStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenreStats'] = ResolversParentTypes['GenreStats']> = {
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type InternalPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['InternalPage'] = ResolversParentTypes['InternalPage']> = {
  mediaSubmissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSubmission']>>>, ParentType, ContextType, RequireFields<InternalPageMediaSubmissionsArgs, never>>;
  characterSubmissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CharacterSubmission']>>>, ParentType, ContextType, RequireFields<InternalPageCharacterSubmissionsArgs, never>>;
  staffSubmissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffSubmission']>>>, ParentType, ContextType, RequireFields<InternalPageStaffSubmissionsArgs, never>>;
  revisionHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['RevisionHistory']>>>, ParentType, ContextType, RequireFields<InternalPageRevisionHistoryArgs, never>>;
  reports?: Resolver<Maybe<Array<Maybe<ResolversTypes['Report']>>>, ParentType, ContextType>;
  modActions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ModAction']>>>, ParentType, ContextType, RequireFields<InternalPageModActionsArgs, never>>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPageUsersArgs, never>>;
  media?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType, RequireFields<InternalPageMediaArgs, never>>;
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType, RequireFields<InternalPageCharactersArgs, never>>;
  staff?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, RequireFields<InternalPageStaffArgs, never>>;
  studios?: Resolver<Maybe<Array<Maybe<ResolversTypes['Studio']>>>, ParentType, ContextType, RequireFields<InternalPageStudiosArgs, never>>;
  mediaList?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType, RequireFields<InternalPageMediaListArgs, never>>;
  airingSchedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringSchedule']>>>, ParentType, ContextType, RequireFields<InternalPageAiringSchedulesArgs, never>>;
  mediaTrends?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTrend']>>>, ParentType, ContextType, RequireFields<InternalPageMediaTrendsArgs, never>>;
  notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>, ParentType, ContextType, RequireFields<InternalPageNotificationsArgs, never>>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPageFollowersArgs, 'userId'>>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPageFollowingArgs, 'userId'>>;
  activities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>>, ParentType, ContextType, RequireFields<InternalPageActivitiesArgs, never>>;
  activityReplies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType, RequireFields<InternalPageActivityRepliesArgs, never>>;
  threads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Thread']>>>, ParentType, ContextType, RequireFields<InternalPageThreadsArgs, never>>;
  threadComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThreadComment']>>>, ParentType, ContextType, RequireFields<InternalPageThreadCommentsArgs, never>>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType, RequireFields<InternalPageReviewsArgs, never>>;
  recommendations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recommendation']>>>, ParentType, ContextType, RequireFields<InternalPageRecommendationsArgs, never>>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPageLikesArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type LikeableUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeableUnion'] = ResolversParentTypes['LikeableUnion']> = {
  __resolveType: TypeResolveFn<'ListActivity' | 'TextActivity' | 'MessageActivity' | 'ActivityReply' | 'Thread' | 'ThreadComment', ParentType, ContextType>;
};

export type ListActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListActivity'] = ResolversParentTypes['ListActivity']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ListScoreStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListScoreStats'] = ResolversParentTypes['ListScoreStats']> = {
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  standardDeviation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  idMal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['MediaTitle']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaStatus']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MediaDescriptionArgs, never>>;
  startDate?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['MediaSeason']>, ParentType, ContextType>;
  seasonYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  seasonInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chapters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countryOfOrigin?: Resolver<Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>;
  isLicensed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['MediaSource']>, ParentType, ContextType, RequireFields<MediaSourceArgs, never>>;
  hashtag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trailer?: Resolver<Maybe<ResolversTypes['MediaTrailer']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  coverImage?: Resolver<Maybe<ResolversTypes['MediaCoverImage']>, ParentType, ContextType>;
  bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  synonyms?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  averageScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  trending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTag']>>>, ParentType, ContextType>;
  relations?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType>;
  characters?: Resolver<Maybe<ResolversTypes['CharacterConnection']>, ParentType, ContextType, RequireFields<MediaCharactersArgs, never>>;
  staff?: Resolver<Maybe<ResolversTypes['StaffConnection']>, ParentType, ContextType, RequireFields<MediaStaffArgs, never>>;
  studios?: Resolver<Maybe<ResolversTypes['StudioConnection']>, ParentType, ContextType, RequireFields<MediaStudiosArgs, never>>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isAdult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nextAiringEpisode?: Resolver<Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType>;
  airingSchedule?: Resolver<Maybe<ResolversTypes['AiringScheduleConnection']>, ParentType, ContextType, RequireFields<MediaAiringScheduleArgs, never>>;
  trends?: Resolver<Maybe<ResolversTypes['MediaTrendConnection']>, ParentType, ContextType, RequireFields<MediaTrendsArgs, never>>;
  externalLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaExternalLink']>>>, ParentType, ContextType>;
  streamingEpisodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaStreamingEpisode']>>>, ParentType, ContextType>;
  rankings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaRank']>>>, ParentType, ContextType>;
  mediaListEntry?: Resolver<Maybe<ResolversTypes['MediaList']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<ResolversTypes['ReviewConnection']>, ParentType, ContextType, RequireFields<MediaReviewsArgs, never>>;
  recommendations?: Resolver<Maybe<ResolversTypes['RecommendationConnection']>, ParentType, ContextType, RequireFields<MediaRecommendationsArgs, never>>;
  stats?: Resolver<Maybe<ResolversTypes['MediaStats']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  autoCreateForumThread?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRecommendationBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  modNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaCharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaCharacter'] = ResolversParentTypes['MediaCharacter']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaConnection'] = ResolversParentTypes['MediaConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaCoverImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaCoverImage'] = ResolversParentTypes['MediaCoverImage']> = {
  extraLarge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaEdge'] = ResolversParentTypes['MediaEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relationType?: Resolver<Maybe<ResolversTypes['MediaRelation']>, ParentType, ContextType, RequireFields<MediaEdgeRelationTypeArgs, never>>;
  isMainStudio?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  characterRole?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  staffRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  voiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, RequireFields<MediaEdgeVoiceActorsArgs, never>>;
  favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaExternalLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaExternalLink'] = ResolversParentTypes['MediaExternalLink']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  site?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaList'] = ResolversParentTypes['MediaList']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MediaListScoreArgs, never>>;
  progress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progressVolumes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  repeat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hiddenFromStatusLists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  customLists?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, RequireFields<MediaListCustomListsArgs, never>>;
  advancedScores?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  startedAt?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaListCollection'] = ResolversParentTypes['MediaListCollection']> = {
  lists?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaListGroup']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  hasNextChunk?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  statusLists?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>>>, ParentType, ContextType, RequireFields<MediaListCollectionStatusListsArgs, never>>;
  customLists?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>>>, ParentType, ContextType, RequireFields<MediaListCollectionCustomListsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaListGroup'] = ResolversParentTypes['MediaListGroup']> = {
  entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isCustomList?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSplitCompletedList?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaListOptions'] = ResolversParentTypes['MediaListOptions']> = {
  scoreFormat?: Resolver<Maybe<ResolversTypes['ScoreFormat']>, ParentType, ContextType>;
  rowOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  useLegacyLists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  animeList?: Resolver<Maybe<ResolversTypes['MediaListTypeOptions']>, ParentType, ContextType>;
  mangaList?: Resolver<Maybe<ResolversTypes['MediaListTypeOptions']>, ParentType, ContextType>;
  sharedTheme?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  sharedThemeEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListTypeOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaListTypeOptions'] = ResolversParentTypes['MediaListTypeOptions']> = {
  sectionOrder?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  splitCompletedSectionByFormat?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  theme?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  customLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  advancedScoring?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  advancedScoringEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaRank'] = ResolversParentTypes['MediaRank']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MediaRankType'], ParentType, ContextType>;
  format?: Resolver<ResolversTypes['MediaFormat'], ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['MediaSeason']>, ParentType, ContextType>;
  allTime?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  context?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaStats'] = ResolversParentTypes['MediaStats']> = {
  scoreDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScoreDistribution']>>>, ParentType, ContextType>;
  statusDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusDistribution']>>>, ParentType, ContextType>;
  airingProgression?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringProgression']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaStreamingEpisodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaStreamingEpisode'] = ResolversParentTypes['MediaStreamingEpisode']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaSubmissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaSubmission'] = ResolversParentTypes['MediaSubmission']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>;
  submitterStats?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  changes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  submission?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
  staff?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
  studios?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
  relations?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaEdge']>>>, ParentType, ContextType>;
  externalLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaExternalLink']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaSubmissionComparisonResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaSubmissionComparison'] = ResolversParentTypes['MediaSubmissionComparison']> = {
  submission?: Resolver<Maybe<ResolversTypes['MediaSubmissionEdge']>, ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['MediaCharacter']>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['StaffEdge']>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes['StudioEdge']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaSubmissionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaSubmissionEdge'] = ResolversParentTypes['MediaSubmissionEdge']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  characterRole?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  staffRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isMain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  characterSubmission?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  voiceActorSubmission?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  staffSubmission?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTag'] = ResolversParentTypes['MediaTag']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isGeneralSpoiler?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMediaSpoiler?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isAdult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTitle'] = ResolversParentTypes['MediaTitle']> = {
  romaji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MediaTitleRomajiArgs, never>>;
  english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MediaTitleEnglishArgs, never>>;
  native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MediaTitleNativeArgs, never>>;
  userPreferred?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTrailerResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTrailer'] = ResolversParentTypes['MediaTrailer']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTrendResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTrend'] = ResolversParentTypes['MediaTrend']> = {
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trending?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  averageScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inProgress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  releasing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  episode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTrendConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTrendConnection'] = ResolversParentTypes['MediaTrendConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTrendEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTrend']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTrendEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTrendEdge'] = ResolversParentTypes['MediaTrendEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['MediaTrend']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageActivity'] = ResolversParentTypes['MessageActivity']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  recipientId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  messengerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MessageActivityMessageArgs, never>>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPrivate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  messenger?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ModActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModAction'] = ResolversParentTypes['ModAction']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  mod?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ModActionType']>, ParentType, ContextType>;
  objectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  objectType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  UpdateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, never>>;
  SaveMediaListEntry?: Resolver<Maybe<ResolversTypes['MediaList']>, ParentType, ContextType, RequireFields<MutationSaveMediaListEntryArgs, never>>;
  UpdateMediaListEntries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType, RequireFields<MutationUpdateMediaListEntriesArgs, never>>;
  DeleteMediaListEntry?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteMediaListEntryArgs, never>>;
  DeleteCustomList?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteCustomListArgs, never>>;
  SaveTextActivity?: Resolver<Maybe<ResolversTypes['TextActivity']>, ParentType, ContextType, RequireFields<MutationSaveTextActivityArgs, never>>;
  SaveMessageActivity?: Resolver<Maybe<ResolversTypes['MessageActivity']>, ParentType, ContextType, RequireFields<MutationSaveMessageActivityArgs, never>>;
  SaveListActivity?: Resolver<Maybe<ResolversTypes['ListActivity']>, ParentType, ContextType, RequireFields<MutationSaveListActivityArgs, never>>;
  DeleteActivity?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteActivityArgs, never>>;
  ToggleActivitySubscription?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType, RequireFields<MutationToggleActivitySubscriptionArgs, never>>;
  SaveActivityReply?: Resolver<Maybe<ResolversTypes['ActivityReply']>, ParentType, ContextType, RequireFields<MutationSaveActivityReplyArgs, never>>;
  DeleteActivityReply?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteActivityReplyArgs, never>>;
  ToggleLike?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationToggleLikeArgs, never>>;
  ToggleLikeV2?: Resolver<Maybe<ResolversTypes['LikeableUnion']>, ParentType, ContextType, RequireFields<MutationToggleLikeV2Args, never>>;
  ToggleFollow?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationToggleFollowArgs, never>>;
  ToggleFavourite?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType, RequireFields<MutationToggleFavouriteArgs, never>>;
  UpdateFavouriteOrder?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType, RequireFields<MutationUpdateFavouriteOrderArgs, never>>;
  SaveReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationSaveReviewArgs, never>>;
  DeleteReview?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteReviewArgs, never>>;
  RateReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationRateReviewArgs, never>>;
  SaveRecommendation?: Resolver<Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType, RequireFields<MutationSaveRecommendationArgs, never>>;
  SaveThread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<MutationSaveThreadArgs, never>>;
  DeleteThread?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteThreadArgs, never>>;
  ToggleThreadSubscription?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<MutationToggleThreadSubscriptionArgs, never>>;
  SaveThreadComment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType, RequireFields<MutationSaveThreadCommentArgs, never>>;
  DeleteThreadComment?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteThreadCommentArgs, never>>;
  UpdateAniChartSettings?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, RequireFields<MutationUpdateAniChartSettingsArgs, never>>;
  UpdateAniChartHighlights?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, RequireFields<MutationUpdateAniChartHighlightsArgs, never>>;
};

export type NotificationOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationOption'] = ResolversParentTypes['NotificationOption']> = {
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type NotificationUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationUnion'] = ResolversParentTypes['NotificationUnion']> = {
  __resolveType: TypeResolveFn<'AiringNotification' | 'FollowingNotification' | 'ActivityMessageNotification' | 'ActivityMentionNotification' | 'ActivityReplyNotification' | 'ActivityReplySubscribedNotification' | 'ActivityLikeNotification' | 'ActivityReplyLikeNotification' | 'ThreadCommentMentionNotification' | 'ThreadCommentReplyNotification' | 'ThreadCommentSubscribedNotification' | 'ThreadCommentLikeNotification' | 'ThreadLikeNotification' | 'RelatedMediaAdditionNotification', ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PageUsersArgs, never>>;
  media?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType, RequireFields<PageMediaArgs, never>>;
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType, RequireFields<PageCharactersArgs, never>>;
  staff?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, RequireFields<PageStaffArgs, never>>;
  studios?: Resolver<Maybe<Array<Maybe<ResolversTypes['Studio']>>>, ParentType, ContextType, RequireFields<PageStudiosArgs, never>>;
  mediaList?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType, RequireFields<PageMediaListArgs, never>>;
  airingSchedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['AiringSchedule']>>>, ParentType, ContextType, RequireFields<PageAiringSchedulesArgs, never>>;
  mediaTrends?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTrend']>>>, ParentType, ContextType, RequireFields<PageMediaTrendsArgs, never>>;
  notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationUnion']>>>, ParentType, ContextType, RequireFields<PageNotificationsArgs, never>>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PageFollowersArgs, 'userId'>>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PageFollowingArgs, 'userId'>>;
  activities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityUnion']>>>, ParentType, ContextType, RequireFields<PageActivitiesArgs, never>>;
  activityReplies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType, RequireFields<PageActivityRepliesArgs, never>>;
  threads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Thread']>>>, ParentType, ContextType, RequireFields<PageThreadsArgs, never>>;
  threadComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThreadComment']>>>, ParentType, ContextType, RequireFields<PageThreadCommentsArgs, never>>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType, RequireFields<PageReviewsArgs, never>>;
  recommendations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recommendation']>>>, ParentType, ContextType, RequireFields<PageRecommendationsArgs, never>>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PageLikesArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ParsedMarkdownResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParsedMarkdown'] = ResolversParentTypes['ParsedMarkdown']> = {
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  Page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryPageArgs, never>>;
  Media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<QueryMediaArgs, never>>;
  MediaTrend?: Resolver<Maybe<ResolversTypes['MediaTrend']>, ParentType, ContextType, RequireFields<QueryMediaTrendArgs, never>>;
  AiringSchedule?: Resolver<Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType, RequireFields<QueryAiringScheduleArgs, never>>;
  Character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, never>>;
  Staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType, RequireFields<QueryStaffArgs, never>>;
  MediaList?: Resolver<Maybe<ResolversTypes['MediaList']>, ParentType, ContextType, RequireFields<QueryMediaListArgs, never>>;
  MediaListCollection?: Resolver<Maybe<ResolversTypes['MediaListCollection']>, ParentType, ContextType, RequireFields<QueryMediaListCollectionArgs, never>>;
  GenreCollection?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  MediaTagCollection?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaTag']>>>, ParentType, ContextType, RequireFields<QueryMediaTagCollectionArgs, never>>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, never>>;
  Viewer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  Notification?: Resolver<Maybe<ResolversTypes['NotificationUnion']>, ParentType, ContextType, RequireFields<QueryNotificationArgs, never>>;
  Studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType, RequireFields<QueryStudioArgs, never>>;
  Review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryReviewArgs, never>>;
  Activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType, RequireFields<QueryActivityArgs, never>>;
  ActivityReply?: Resolver<Maybe<ResolversTypes['ActivityReply']>, ParentType, ContextType, RequireFields<QueryActivityReplyArgs, never>>;
  Following?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFollowingArgs, 'userId'>>;
  Follower?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFollowerArgs, 'userId'>>;
  Thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<QueryThreadArgs, never>>;
  ThreadComment?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThreadComment']>>>, ParentType, ContextType, RequireFields<QueryThreadCommentArgs, never>>;
  Recommendation?: Resolver<Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType, RequireFields<QueryRecommendationArgs, never>>;
  Like?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryLikeArgs, never>>;
  Markdown?: Resolver<Maybe<ResolversTypes['ParsedMarkdown']>, ParentType, ContextType, RequireFields<QueryMarkdownArgs, 'markdown'>>;
  AniChartUser?: Resolver<Maybe<ResolversTypes['AniChartUser']>, ParentType, ContextType>;
  SiteStatistics?: Resolver<Maybe<ResolversTypes['SiteStatistics']>, ParentType, ContextType>;
};

export type RecommendationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recommendation'] = ResolversParentTypes['Recommendation']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userRating?: Resolver<Maybe<ResolversTypes['RecommendationRating']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  mediaRecommendation?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RecommendationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecommendationConnection'] = ResolversParentTypes['RecommendationConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['RecommendationEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Recommendation']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RecommendationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecommendationEdge'] = ResolversParentTypes['RecommendationEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RelatedMediaAdditionNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelatedMediaAdditionNotification'] = ResolversParentTypes['RelatedMediaAdditionNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['Report'] = ResolversParentTypes['Report']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reporter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  reported?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaType?: Resolver<Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ReviewBodyArgs, never>>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ratingAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userRating?: Resolver<Maybe<ResolversTypes['ReviewRating']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReviewConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewConnection'] = ResolversParentTypes['ReviewConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReviewEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReviewEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewEdge'] = ResolversParentTypes['ReviewEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RevisionHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevisionHistory'] = ResolversParentTypes['RevisionHistory']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  action?: Resolver<Maybe<ResolversTypes['RevisionHistoryAction']>, ParentType, ContextType>;
  changes?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ScoreDistributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScoreDistribution'] = ResolversParentTypes['ScoreDistribution']> = {
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SiteStatisticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteStatistics'] = ResolversParentTypes['SiteStatistics']> = {
  users?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsUsersArgs, never>>;
  anime?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsAnimeArgs, never>>;
  manga?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsMangaArgs, never>>;
  characters?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsCharactersArgs, never>>;
  staff?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsStaffArgs, never>>;
  studios?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsStudiosArgs, never>>;
  reviews?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsReviewsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SiteTrendResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteTrend'] = ResolversParentTypes['SiteTrend']> = {
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SiteTrendConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteTrendConnection'] = ResolversParentTypes['SiteTrendConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SiteTrendEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['SiteTrend']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SiteTrendEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteTrendEdge'] = ResolversParentTypes['SiteTrendEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['SiteTrend']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffResolvers<ContextType = any, ParentType extends ResolversParentTypes['Staff'] = ResolversParentTypes['Staff']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['StaffName']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['StaffLanguage']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['StaffImage']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<StaffDescriptionArgs, never>>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffMedia?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<StaffStaffMediaArgs, never>>;
  characters?: Resolver<Maybe<ResolversTypes['CharacterConnection']>, ParentType, ContextType, RequireFields<StaffCharactersArgs, never>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  submissionStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  submissionNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffConnection'] = ResolversParentTypes['StaffConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffEdge'] = ResolversParentTypes['StaffEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffImage'] = ResolversParentTypes['StaffImage']> = {
  large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffName'] = ResolversParentTypes['StaffName']> = {
  first?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternative?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffStats'] = ResolversParentTypes['StaffStats']> = {
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffSubmissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffSubmission'] = ResolversParentTypes['StaffSubmission']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  submission?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StatusDistributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatusDistribution'] = ResolversParentTypes['StatusDistribution']> = {
  status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Studio'] = ResolversParentTypes['Studio']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAnimationStudio?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<StudioMediaArgs, never>>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StudioConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudioConnection'] = ResolversParentTypes['StudioConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['StudioEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Studio']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StudioEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudioEdge'] = ResolversParentTypes['StudioEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isMain?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StudioStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudioStats'] = ResolversParentTypes['StudioStats']> = {
  studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TagStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagStats'] = ResolversParentTypes['TagStats']> = {
  tag?: Resolver<Maybe<ResolversTypes['MediaTag']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TextActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextActivity'] = ResolversParentTypes['TextActivity']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<TextActivityTextArgs, never>>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thread'] = ResolversParentTypes['Thread']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ThreadBodyArgs, never>>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  replyUserId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replyCommentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replyCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  viewCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSticky?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  repliedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  replyUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThreadCategory']>>>, ParentType, ContextType>;
  mediaCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCategory'] = ResolversParentTypes['ThreadCategory']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadComment'] = ResolversParentTypes['ThreadComment']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ThreadCommentCommentArgs, never>>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  childComments?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentLikeNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCommentLikeNotification'] = ResolversParentTypes['ThreadCommentLikeNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentMentionNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCommentMentionNotification'] = ResolversParentTypes['ThreadCommentMentionNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentReplyNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCommentReplyNotification'] = ResolversParentTypes['ThreadCommentReplyNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentSubscribedNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCommentSubscribedNotification'] = ResolversParentTypes['ThreadCommentSubscribedNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadLikeNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadLikeNotification'] = ResolversParentTypes['ThreadLikeNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  threadId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<UserAboutArgs, never>>;
  avatar?: Resolver<Maybe<ResolversTypes['UserAvatar']>, ParentType, ContextType>;
  bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFollowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFollower?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bans?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['UserOptions']>, ParentType, ContextType>;
  mediaListOptions?: Resolver<Maybe<ResolversTypes['MediaListOptions']>, ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType, RequireFields<UserFavouritesArgs, never>>;
  statistics?: Resolver<Maybe<ResolversTypes['UserStatisticTypes']>, ParentType, ContextType>;
  unreadNotificationCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  donatorTier?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  donatorBadge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  moderatorStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['UserStats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserActivityHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserActivityHistory'] = ResolversParentTypes['UserActivityHistory']> = {
  date?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserAvatarResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAvatar'] = ResolversParentTypes['UserAvatar']> = {
  large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserCountryStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCountryStatistic'] = ResolversParentTypes['UserCountryStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserFormatStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserFormatStatistic'] = ResolversParentTypes['UserFormatStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserGenreStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGenreStatistic'] = ResolversParentTypes['UserGenreStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserLengthStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLengthStatistic'] = ResolversParentTypes['UserLengthStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserModDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserModData'] = ResolversParentTypes['UserModData']> = {
  alts?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  bans?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  counts?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOptions'] = ResolversParentTypes['UserOptions']> = {
  titleLanguage?: Resolver<Maybe<ResolversTypes['UserTitleLanguage']>, ParentType, ContextType>;
  displayAdultContent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  airingNotifications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  profileColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notificationOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['NotificationOption']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserReleaseYearStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserReleaseYearStatistic'] = ResolversParentTypes['UserReleaseYearStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  releaseYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserScoreStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserScoreStatistic'] = ResolversParentTypes['UserScoreStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStaffStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStaffStatistic'] = ResolversParentTypes['UserStaffStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStartYearStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStartYearStatistic'] = ResolversParentTypes['UserStartYearStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  startYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStatisticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStatistics'] = ResolversParentTypes['UserStatistics']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  standardDeviation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  episodesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volumesRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  formats?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserFormatStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsFormatsArgs, never>>;
  statuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserStatusStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsStatusesArgs, never>>;
  scores?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserScoreStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsScoresArgs, never>>;
  lengths?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserLengthStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsLengthsArgs, never>>;
  releaseYears?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserReleaseYearStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsReleaseYearsArgs, never>>;
  startYears?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserStartYearStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsStartYearsArgs, never>>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserGenreStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsGenresArgs, never>>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserTagStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsTagsArgs, never>>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserCountryStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsCountriesArgs, never>>;
  voiceActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserVoiceActorStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsVoiceActorsArgs, never>>;
  staff?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserStaffStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsStaffArgs, never>>;
  studios?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserStudioStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsStudiosArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStatisticTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStatisticTypes'] = ResolversParentTypes['UserStatisticTypes']> = {
  anime?: Resolver<Maybe<ResolversTypes['UserStatistics']>, ParentType, ContextType>;
  manga?: Resolver<Maybe<ResolversTypes['UserStatistics']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStats'] = ResolversParentTypes['UserStats']> = {
  watchedTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chaptersRead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activityHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserActivityHistory']>>>, ParentType, ContextType>;
  animeStatusDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusDistribution']>>>, ParentType, ContextType>;
  mangaStatusDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusDistribution']>>>, ParentType, ContextType>;
  animeScoreDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScoreDistribution']>>>, ParentType, ContextType>;
  mangaScoreDistribution?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScoreDistribution']>>>, ParentType, ContextType>;
  animeListScores?: Resolver<Maybe<ResolversTypes['ListScoreStats']>, ParentType, ContextType>;
  mangaListScores?: Resolver<Maybe<ResolversTypes['ListScoreStats']>, ParentType, ContextType>;
  favouredGenresOverview?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenreStats']>>>, ParentType, ContextType>;
  favouredGenres?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenreStats']>>>, ParentType, ContextType>;
  favouredTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['TagStats']>>>, ParentType, ContextType>;
  favouredActors?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffStats']>>>, ParentType, ContextType>;
  favouredStaff?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffStats']>>>, ParentType, ContextType>;
  favouredStudios?: Resolver<Maybe<Array<Maybe<ResolversTypes['StudioStats']>>>, ParentType, ContextType>;
  favouredYears?: Resolver<Maybe<Array<Maybe<ResolversTypes['YearStats']>>>, ParentType, ContextType>;
  favouredFormats?: Resolver<Maybe<Array<Maybe<ResolversTypes['FormatStats']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStatusStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStatusStatistic'] = ResolversParentTypes['UserStatusStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStudioStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStudioStatistic'] = ResolversParentTypes['UserStudioStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserTagStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserTagStatistic'] = ResolversParentTypes['UserTagStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['MediaTag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserVoiceActorStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVoiceActorStatistic'] = ResolversParentTypes['UserVoiceActorStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  characterIds?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type YearStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['YearStats'] = ResolversParentTypes['YearStats']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  ActivityLikeNotification?: ActivityLikeNotificationResolvers<ContextType>;
  ActivityMentionNotification?: ActivityMentionNotificationResolvers<ContextType>;
  ActivityMessageNotification?: ActivityMessageNotificationResolvers<ContextType>;
  ActivityReply?: ActivityReplyResolvers<ContextType>;
  ActivityReplyLikeNotification?: ActivityReplyLikeNotificationResolvers<ContextType>;
  ActivityReplyNotification?: ActivityReplyNotificationResolvers<ContextType>;
  ActivityReplySubscribedNotification?: ActivityReplySubscribedNotificationResolvers<ContextType>;
  ActivityUnion?: ActivityUnionResolvers;
  AiringNotification?: AiringNotificationResolvers<ContextType>;
  AiringProgression?: AiringProgressionResolvers<ContextType>;
  AiringSchedule?: AiringScheduleResolvers<ContextType>;
  AiringScheduleConnection?: AiringScheduleConnectionResolvers<ContextType>;
  AiringScheduleEdge?: AiringScheduleEdgeResolvers<ContextType>;
  AniChartUser?: AniChartUserResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  CharacterConnection?: CharacterConnectionResolvers<ContextType>;
  CharacterEdge?: CharacterEdgeResolvers<ContextType>;
  CharacterImage?: CharacterImageResolvers<ContextType>;
  CharacterName?: CharacterNameResolvers<ContextType>;
  CharacterSubmission?: CharacterSubmissionResolvers<ContextType>;
  CharacterSubmissionConnection?: CharacterSubmissionConnectionResolvers<ContextType>;
  CharacterSubmissionEdge?: CharacterSubmissionEdgeResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  Deleted?: DeletedResolvers<ContextType>;
  Favourites?: FavouritesResolvers<ContextType>;
  FollowingNotification?: FollowingNotificationResolvers<ContextType>;
  FormatStats?: FormatStatsResolvers<ContextType>;
  FuzzyDate?: FuzzyDateResolvers<ContextType>;
  FuzzyDateInt?: GraphQLScalarType;
  GenreStats?: GenreStatsResolvers<ContextType>;
  InternalPage?: InternalPageResolvers<ContextType>;
  Json?: GraphQLScalarType;
  LikeableUnion?: LikeableUnionResolvers;
  ListActivity?: ListActivityResolvers<ContextType>;
  ListScoreStats?: ListScoreStatsResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  MediaCharacter?: MediaCharacterResolvers<ContextType>;
  MediaConnection?: MediaConnectionResolvers<ContextType>;
  MediaCoverImage?: MediaCoverImageResolvers<ContextType>;
  MediaEdge?: MediaEdgeResolvers<ContextType>;
  MediaExternalLink?: MediaExternalLinkResolvers<ContextType>;
  MediaList?: MediaListResolvers<ContextType>;
  MediaListCollection?: MediaListCollectionResolvers<ContextType>;
  MediaListGroup?: MediaListGroupResolvers<ContextType>;
  MediaListOptions?: MediaListOptionsResolvers<ContextType>;
  MediaListTypeOptions?: MediaListTypeOptionsResolvers<ContextType>;
  MediaRank?: MediaRankResolvers<ContextType>;
  MediaStats?: MediaStatsResolvers<ContextType>;
  MediaStreamingEpisode?: MediaStreamingEpisodeResolvers<ContextType>;
  MediaSubmission?: MediaSubmissionResolvers<ContextType>;
  MediaSubmissionComparison?: MediaSubmissionComparisonResolvers<ContextType>;
  MediaSubmissionEdge?: MediaSubmissionEdgeResolvers<ContextType>;
  MediaTag?: MediaTagResolvers<ContextType>;
  MediaTitle?: MediaTitleResolvers<ContextType>;
  MediaTrailer?: MediaTrailerResolvers<ContextType>;
  MediaTrend?: MediaTrendResolvers<ContextType>;
  MediaTrendConnection?: MediaTrendConnectionResolvers<ContextType>;
  MediaTrendEdge?: MediaTrendEdgeResolvers<ContextType>;
  MessageActivity?: MessageActivityResolvers<ContextType>;
  ModAction?: ModActionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NotificationOption?: NotificationOptionResolvers<ContextType>;
  NotificationUnion?: NotificationUnionResolvers;
  Page?: PageResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  ParsedMarkdown?: ParsedMarkdownResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recommendation?: RecommendationResolvers<ContextType>;
  RecommendationConnection?: RecommendationConnectionResolvers<ContextType>;
  RecommendationEdge?: RecommendationEdgeResolvers<ContextType>;
  RelatedMediaAdditionNotification?: RelatedMediaAdditionNotificationResolvers<ContextType>;
  Report?: ReportResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  ReviewConnection?: ReviewConnectionResolvers<ContextType>;
  ReviewEdge?: ReviewEdgeResolvers<ContextType>;
  RevisionHistory?: RevisionHistoryResolvers<ContextType>;
  ScoreDistribution?: ScoreDistributionResolvers<ContextType>;
  SiteStatistics?: SiteStatisticsResolvers<ContextType>;
  SiteTrend?: SiteTrendResolvers<ContextType>;
  SiteTrendConnection?: SiteTrendConnectionResolvers<ContextType>;
  SiteTrendEdge?: SiteTrendEdgeResolvers<ContextType>;
  Staff?: StaffResolvers<ContextType>;
  StaffConnection?: StaffConnectionResolvers<ContextType>;
  StaffEdge?: StaffEdgeResolvers<ContextType>;
  StaffImage?: StaffImageResolvers<ContextType>;
  StaffName?: StaffNameResolvers<ContextType>;
  StaffStats?: StaffStatsResolvers<ContextType>;
  StaffSubmission?: StaffSubmissionResolvers<ContextType>;
  StatusDistribution?: StatusDistributionResolvers<ContextType>;
  Studio?: StudioResolvers<ContextType>;
  StudioConnection?: StudioConnectionResolvers<ContextType>;
  StudioEdge?: StudioEdgeResolvers<ContextType>;
  StudioStats?: StudioStatsResolvers<ContextType>;
  TagStats?: TagStatsResolvers<ContextType>;
  TextActivity?: TextActivityResolvers<ContextType>;
  Thread?: ThreadResolvers<ContextType>;
  ThreadCategory?: ThreadCategoryResolvers<ContextType>;
  ThreadComment?: ThreadCommentResolvers<ContextType>;
  ThreadCommentLikeNotification?: ThreadCommentLikeNotificationResolvers<ContextType>;
  ThreadCommentMentionNotification?: ThreadCommentMentionNotificationResolvers<ContextType>;
  ThreadCommentReplyNotification?: ThreadCommentReplyNotificationResolvers<ContextType>;
  ThreadCommentSubscribedNotification?: ThreadCommentSubscribedNotificationResolvers<ContextType>;
  ThreadLikeNotification?: ThreadLikeNotificationResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserActivityHistory?: UserActivityHistoryResolvers<ContextType>;
  UserAvatar?: UserAvatarResolvers<ContextType>;
  UserCountryStatistic?: UserCountryStatisticResolvers<ContextType>;
  UserFormatStatistic?: UserFormatStatisticResolvers<ContextType>;
  UserGenreStatistic?: UserGenreStatisticResolvers<ContextType>;
  UserLengthStatistic?: UserLengthStatisticResolvers<ContextType>;
  UserModData?: UserModDataResolvers<ContextType>;
  UserOptions?: UserOptionsResolvers<ContextType>;
  UserReleaseYearStatistic?: UserReleaseYearStatisticResolvers<ContextType>;
  UserScoreStatistic?: UserScoreStatisticResolvers<ContextType>;
  UserStaffStatistic?: UserStaffStatisticResolvers<ContextType>;
  UserStartYearStatistic?: UserStartYearStatisticResolvers<ContextType>;
  UserStatistics?: UserStatisticsResolvers<ContextType>;
  UserStatisticTypes?: UserStatisticTypesResolvers<ContextType>;
  UserStats?: UserStatsResolvers<ContextType>;
  UserStatusStatistic?: UserStatusStatisticResolvers<ContextType>;
  UserStudioStatistic?: UserStudioStatisticResolvers<ContextType>;
  UserTagStatistic?: UserTagStatisticResolvers<ContextType>;
  UserVoiceActorStatistic?: UserVoiceActorStatisticResolvers<ContextType>;
  YearStats?: YearStatsResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;



export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;