import {
  CreateAnimeInput, SearchAnimeInput, Anime,
} from "src/generated/resolver-types";

export class Connector {
  public createDbAnime?: (anime: CreateAnimeInput) => Promise<any>;
  public searchAnime?: (searchInput: SearchAnimeInput) => Promise<Anime>
}
