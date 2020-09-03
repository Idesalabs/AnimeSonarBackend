import { CreateAnimeInput } from "src/generated/resolver-types";
import getAllGenreAndTags from './getAllGenreAndTagsAndStatus';
import createGenre from './createGenre';
import createTag from './createTag';
import getAllGenreAndTagsAndStatus from './getAllGenreAndTagsAndStatus';
import { DgraphClient } from 'dgraph-js';
import { UidMap } from 'src/types';

export async function getTagAndGenreUids(anime: CreateAnimeInput, client: DgraphClient): Promise<{ tags: UidMap; genres: UidMap; }> {

    const genreSet = new Set<string>();
    const tagSet = new Set<string>();

    anime.anime.forEach(anime => {
        anime.genre.forEach(genre => {
            genreSet.add(genre.name);

        });
        anime.tags?.forEach(tag => {
            tagSet.add(tag.name);
        });
    });

    const { tags, genres } = await getAllGenreAndTagsAndStatus(client);

    for (const genre in Object.values(genres)) {
        genreSet.delete(genre);
    }

    for (const tag in Object.values(tags)) {
        tagSet.delete(tag);
    }



    const newGenres = await createGenre(genreSet);
    const newTags = await createTag(tagSet);



    return { tags: { ...tags, ...newTags }, genres: { ...genres, ...newGenres } };
}
