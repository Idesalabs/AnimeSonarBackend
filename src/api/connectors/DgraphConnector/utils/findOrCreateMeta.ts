import { CreateAnimeInput } from "src/generated/resolver-types";
import getMeta from './getMeta';
import { DgraphClient } from 'dgraph-js';
import { UidMap } from 'src/types';
import createMeta from './createMeta';
import MetaValueToUidMap from './MetaValueToUidMap';

interface MetaMap {
    genreMap: Map<string, { name: string }>
    tagMap: Map<string, { name: string, description: string }>
}

export default async function ({ tagMap: _tagMap, genreMap: _genreMap }: MetaMap, client: DgraphClient): Promise<{ tags: UidMap; genres: UidMap; statuses: UidMap }> {

    const { tags: _tags, genres: _genres, statuses: _statuses } = await getMeta(client);

    const [tags, genres, statuses] = [_tags, _genres, _statuses].map(MetaValueToUidMap)

    const { genreMap, tagMap } = getMissingMeta();


    const createGenre = createMeta("Genre", client)
    const createTag = createMeta("Tag", client)

    const missingGenreValues = Array.from(genreMap.values())
    const missingTagValues = Array.from(tagMap.values())

    const newGenresUidMaps = missingGenreValues.length ? await createGenre(missingGenreValues) : {}
    const newTagsUidMaps = missingTagValues.length ? await createTag(missingTagValues) : {}



    return { tags: { ...tags, ...newTagsUidMaps }, genres: { ...genres, ...newGenresUidMaps }, statuses };

    function getMissingMeta() {
        const tagMap = new Map(_tagMap);
        const genreMap = new Map(_genreMap);
        for (const tag in tags)
            tagMap.delete(tag);
        for (const genre in genres)
            genreMap.delete(genre);
        return { genreMap, tagMap };
    }
}


