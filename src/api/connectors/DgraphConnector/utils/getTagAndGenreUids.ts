import { CreateAnimeInput } from "src/generated/resolver-types";
import getAllGenreAndTags from './getAllGenreAndTagsAndStatus';
import createGenre from './createMeta';
import createTag from './createTag';
import getAllGenreAndTagsAndStatus from './getAllGenreAndTagsAndStatus';
import { DgraphClient } from 'dgraph-js';
import { UidMap } from 'src/types';
import createMeta from './createMeta';

export async function getTagAndGenreUids(anime: CreateAnimeInput, client: DgraphClient): Promise<{ tags: UidMap; genres: UidMap; }> {

    const genreMap = new Map<string, { name: string }>();
    const tagMap = new Map<string, { name: string, description: string }>();

    anime.anime.forEach(anime => {
        anime.genre.forEach(({ name }) => {
            genreMap.set(name, { name })

        });
        anime.tags?.forEach(({ name, description }) => {
            tagMap.set(name, { name, description: description ?? '' });
        });
    });

    const { tags, genres } = await getAllGenreAndTagsAndStatus(client);

    for (const tag in tags) tagMap.delete(tag)
    for (const genre in genres) genreMap.delete(genre)

    const createGenre = createMeta("Genre", client)
    const createTag = createMeta("Tag", client)

    const newGenres = await createGenre(Object.values(genreMap));
    const newTags = await createTag(Object.values(tagMap));



    return { tags: { ...tags, ...newTags }, genres: { ...genres, ...newGenres } };
}


