export default `
<_anilistId>: string .
<bannerImage>: string .
<coverImage>: string .
<description>: string .
<dgraph.graphql.schema>: string .
<emotioned>: [uid] .
<episodeCount>: int .
<has_genre>: [uid] .
<has_status>: uid .
<has_tag>: [uid] .
<hash>: string .
<isoAired>: string .
<minutesPerEpisode>: int .
<name>: string .
<set>: [uid] .
<status>: string .
<suggests>: [uid] .
<title>: string @index(fulltext, hash) .

type Anime {
    _anilistId
    bannerImage
    coverImage
    description
    emotioned
    episodeCount
    has_genre
    has_status
    has_tag
    isoAired
    minutesPerEpisode
    title
}

type Emotion {
    name
}

type Genre {
    name
}

type Parameter {
    hash
    suggests
}

type Status {
    status
}

type Tag {
    description
    name
}

type Format {
    name
}
`;
