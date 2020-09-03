import dgraph = require("dgraph-js");
import {
    CreateAnimeInput, AnimeInput,
} from "src/generated/resolver-types";
import animeExists from './utils/animeExists';
import { getTagAndGenreUids } from './utils/getTagAndGenreUids';






export default async (anime: CreateAnimeInput, client: dgraph.DgraphClient) => {
    const { tags, genres } = await getTagAndGenreUids(anime, client);

    const transaction = client.newTxn()
    const animeAlreadyAdded: AnimeInput[] = []

    const req = new dgraph.Request()

    const mu = new dgraph.Mutation()

    try {
        const dbAnime = []
        for await (const a of anime.anime) {
            const r = await animeExists(a.title)
            if (!r) {
                // dbAnime.push(parseAnimeToDbAnime(a, genres, tags))

            } else {
                animeAlreadyAdded.push(a)
            }
        }

    } catch (error) {

    }




}


