import { AnimeInput } from 'src/generated/resolver-types';
import animeExists from './animeExists';
import { UidMap } from 'src/types';

export interface AnimeDB {
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
}

interface HasStatus {
    uid: string;
}

interface HasTag {
    uid: string;
    "has_tag|score": number;
}




export default (animeInput: AnimeInput, genreUids: UidMap, tagUids: UidMap, statusUids: UidMap): AnimeDB => {
    const { id, coverImage, description, episodeCount, isoAired, minutesPerEpisode, status, genre, title, bannerImage, tags } = animeInput



    return {
        "dgraph.type": "Anime",
        _anilistId: id,
        bannerImage: bannerImage ?? '',
        coverImage: coverImage ?? '',
        description: description ?? '',
        episodeCount,
        has_genre: genre.map(g => ({ "has_genre|score": 1, uid: genreUids[g.name] })),
        has_tag: (tags ?? []).map(t => ({ "has_tag|score": 1, uid: tagUids[t.name] })),
        has_status: { uid: statusUids[status.toString()] },
        isoAired: isoAired,
        minutesPerEpisode,
        title


    }

}