import {
  CreateAnimeInput, SearchAnimeInput, Anime,
} from "../../generated/resolver-types";

export interface Connector {
  createDbAnime: (anime: CreateAnimeInput) => Promise<CreateDbAnimeResult>;
  searchAnime: (searchInput: SearchAnimeInput) => Promise<Anime[]>
  schemaInit: () => Promise<boolean>
}

interface CreateDbAnimeResult {
  errors: any[]
  results: any[]
}