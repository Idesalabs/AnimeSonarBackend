import { CreateAnimeInput } from "src/generated/resolver-types";

export default function extractMeta(input: CreateAnimeInput) {
    const genreMap = new Map<string, { name: string; }>();
    const tagMap = new Map<string, { name: string; description: string; }>();

    input.anime.forEach(anime => {
        anime.genre.forEach(({ name }) => {
            genreMap.set(name, { name });

        });
        anime.tags?.forEach(({ name, description }) => {
            tagMap.set(name, { name, description: description ?? '' });
        });
    });
    return { tagMap, genreMap };
}
