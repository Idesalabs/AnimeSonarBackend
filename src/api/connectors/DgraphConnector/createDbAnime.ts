import dgraph = require("dgraph-js");
import {
    CreateAnimeInput, AnimeInput, Maybe,
} from "src/generated/resolver-types";
import findOrCreateMeta from './utils/findOrCreateMeta';
import parseAnimeToDbAnime, { AnimeDBInput } from './utils/parseAnimeToDbAnime';
import extractMeta from './utils/extractMeta';

import PromisePool from "@supercharge/promise-pool";
import { Uid } from 'src/types';
import { uniqBy } from 'lodash';


type UpsertAnimeResult = [string, Maybe<string>]
const upsertAnime = async (anime: AnimeDBInput, client: dgraph.DgraphClient): Promise<UpsertAnimeResult> => {
    const query = `
query {
   anime as var(func:eq(title,"${anime.title}")){uid}
  }
  
`
    const txn = client.newTxn()
    try {
        const mu = new dgraph.Mutation()
        mu.setSetJson({ ...anime, uid: `_:${anime.title}` })
        mu.setCond(`@if(eq(len(anime),0))`)

        const req = new dgraph.Request()
        req.setQuery(query)
        req.addMutations(mu)

        req.setCommitNow(true)

        const response = await txn.doRequest(req)
        const uidMap = response.getUidsMap()
        return uidMap.entries().next().value ?? [anime.title, null]
    } catch (error) {
        console.log(error)
        return [anime.title, null]
    } finally {
        txn.discard()
    }


}



export default async (input: CreateAnimeInput, client: dgraph.DgraphClient) => {

    const { tags, genres, statuses } = await findOrCreateMeta(extractMeta(input), client);


    const dbAnime = uniqBy(input.anime, 'title').map(a => parseAnimeToDbAnime(a, genres, tags, statuses))

    const { errors, results } = await PromisePool
        .for(dbAnime)
        .withConcurrency(100)
        .process(async (a) => await upsertAnime(a, client))

    return { errors, results } as { errors: any, results: UpsertAnimeResult[] }


}


