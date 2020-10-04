import { DgraphClient } from 'dgraph-js';


export default async (client: DgraphClient): Promise<Result> => {

    const res = await client.newTxn().query(query)
    const { genres = [], tags = [], statuses = [], formats = [] } = res.getJson() as Result

    return {
        genres,
        tags,
        statuses,
        formats
    }
}

interface Result { genres: MetaValue, tags: MetaValue, statuses: MetaValue, formats: MetaValue }

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

    formats(func: type("Format")){
        uid
        name
    }


}`