import {
  CreateAnimeInput,
} from "src/generated/resolver-types";

export class Connector {
  public createDbAnime?: (anime: CreateAnimeInput) => Promise<void>;
}
