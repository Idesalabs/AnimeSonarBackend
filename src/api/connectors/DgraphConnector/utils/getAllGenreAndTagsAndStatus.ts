import { DgraphClient } from 'dgraph-js';
import { keyBy, chain, mapValues, values } from 'lodash'
import { UidMap } from 'src/types';

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



interface Result { genres: UidMap, tags: UidMap, statuses: UidMap }
type MetaValue = Array<{ uid: string, name: string }>

export default async (client: DgraphClient): Promise<Result> => {

    const res = await client.newTxn().query(query)
    const { genres: _genres = [], tags: _tags = [], statuses: _statuses = [] } = res.getJson() as { genres: MetaValue, tags: MetaValue, statuses: MetaValue }


    const [genres, tags, statuses] = [_genres, _tags, _statuses].map(MetaValueToUidMap)

    return {
        genres,
        tags,
        statuses
    }
}

const MetaValueToUidMap = (value: MetaValue): UidMap => {

    return chain(value).keyBy('uid').mapValues('name').value()
}