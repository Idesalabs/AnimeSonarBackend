import {
  CreateAnimeInput, SearchAnimeInput, Anime,
} from "src/generated/resolver-types";

export interface Connector {
  createDbAnime: (anime: CreateAnimeInput) => Promise<any>;
  searchAnime: (searchInput: SearchAnimeInput) => Promise<Anime[]>
  schemaInit: () => Promise<boolean>
}
