import { AnimeInput } from '../../../../generated/resolver-types';
import { UidMap } from '../../../../types';

export interface AnimeDBInput {
    title: string;
    coverImage: string;
    bannerImage: string;
    description: string;
    minutesPerEpisode: number;
    episodeCount: number;
    _anilistId: string;
    isoAired: string;
    has_status: HasStatus;
    has_genre: HasGenre[];
    has_tag: HasTag[];
    "dgraph.type": "Anime";
}

interface HasGenre {
    uid: string;
    "has_genre|score": number;
    "has_genre|score_count": number
}

interface HasStatus {
    uid: string;
}

interface HasTag {
    uid: string;
    "has_tag|score": number;
    "has_tag|score_count": number
}




export default (animeInput: AnimeInput, genreUids: UidMap, tagUids: UidMap, statusUids: UidMap): AnimeDBInput => {
    const { id, coverImage, description, episodeCount, isoAired, minutesPerEpisode, status, genre, title, bannerImage, tags } = animeInput

    // console.log(genreUids)

    return {
        "dgraph.type": "Anime",
        _anilistId: id,
        bannerImage: bannerImage ?? '',
        coverImage: coverImage ?? '',
        description: description ?? '',
        episodeCount,
        has_genre: genre.map(g => ({ "has_genre|score": 1, "has_genre|score_count": 1, uid: genreUids[g.name] })),
        has_tag: (tags ?? []).map(t => ({ "has_tag|score": 1, "has_tag|score_count": 1, uid: tagUids[t.name] })),
        has_status: { uid: statusUids[status.toString()] },
        isoAired: isoAired,
        minutesPerEpisode,
        title


    }

}