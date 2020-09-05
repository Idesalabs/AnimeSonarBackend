import { AnimeDBOutput } from '../searchAnime';
import { Anime } from 'src/generated/resolver-types';

export default (animeDb: AnimeDBOutput, currentIndex: number): Anime => {
    const { coverImage, bannerImage, description, episodeCount, has_genre, has_status, has_tag, isoAired, minutesPerEpisode, title, uid } = animeDb
    const totalRating = animeDb['has_genre|score']?.[currentIndex.toString()] ?? 1
    const ratingCount = animeDb['has_tag|score_count']?.[currentIndex.toString()] ?? 1

    return {
        coverImage,
        bannerImage,
        description,
        episodeCount,
        genre: has_genre.map(g => ({ averageRating: totalRating / ratingCount, id: g.uid, name: g.name })),
        tags: has_tag.map(t => ({ id: t.uid, name: t.name })),
        id: uid,
        isoAired,
        minutesPerEpisode,
        status: has_status.status,
        title
    }
}