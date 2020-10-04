import { DgraphClient } from 'simdi-dgraph-js';


export default async (client: DgraphClient): Promise<Result> => {

    const res = await client.newTxn().query(query)
    const { genres = [], tags = [], statuses = [] } = res.getJson() as { genres: MetaValue, tags: MetaValue, statuses: MetaValue }

    return {
        genres,
        tags,
        statuses
    }
}

interface Result { genres: MetaValue, tags: MetaValue, statuses: MetaValue }

export type MetaValue = Array<{ uid: string, name: string }>

const query = `query {
    tags(func: type("Tag")){
        uid
        name
    }
    genres(func: type("Genre")){
        uid
        name
    }

    statuses(func: type("Status")){
        uid
        name: status

    }



}`