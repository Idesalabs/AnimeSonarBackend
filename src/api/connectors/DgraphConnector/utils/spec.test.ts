import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import clearDb from '../seed/clearDb';
import { initDgraphClient } from '..';
import seedDb from '../seed/seedDb';
import getAllGenreAndTagsAndStatus from './getMeta';
import createGenre from './createMeta';
import createMeta from './createMeta';
import findOrCreateMeta from './findOrCreateMeta';
import { UidMap } from 'src/types';
import MetaValueToUidMap from './MetaValueToUidMap';

const expect = chai.expect;
chai.use(chaiAsPromised);

const client = initDgraphClient()

describe("Utility Behaviour Tests", () => {
    beforeEach(async () => {
        await clearDb(client)
        await seedDb(client)

    });

    describe("Initial Meta", () => {

        it("Initial tags,genres,statuses should be correct", async () => {
            const { tags, genres, statuses } = await getAllGenreAndTagsAndStatus(client)
            const [_tags, _genres, _statuses] = [tags, genres, statuses].map(d => d.map(a => a.name))

            expect(_tags).to.have.members(['tag1', 'tag2'])
            expect(_genres).to.have.members(['genre1', 'genre2'])
            expect(_statuses).to.have.members(['airing', 'upcoming', 'finished', 'cancelled'])

        });


    });

    describe("Create Meta", () => {
        const createGenre = createMeta('Genre', client)
        const createTag = createMeta('Tag', client)

        it("Create Genre Should Work", async () => {
            const genres = ["Romance", "Comedy", "Action"].map(g => ({ name: g }))
            const result = await createGenre(genres)

            expect(Object.keys(result)).to.have.members(genres.map(g => g.name))
        })

        it("Create Tag Should Work", async () => {
            const tags = ["Female Protagonist", "Love Triangle", "Harem"].map(t => ({ name: t, description: "description " + t }))
            const result = await createTag(tags)
            expect(Object.keys(result)).to.have.members(tags.map(t => t.name))
        })
    })

    describe("findOrCreateMeta", () => {


        it("Do not create duplicates", async () => {
            const tagMap = new Map<string, { name: string; description: string; }>();
            const genreMap = new Map<string, { name: string; }>();

            tagMap.set('tagduplicate', { description: '', name: 'tagduplicate' })
            genreMap.set('genreduplicate', { name: 'genreduplicate' })

            await findOrCreateMeta({ tagMap, genreMap }, client)
            await findOrCreateMeta({ tagMap, genreMap }, client)

            const { genres, tags } = await getAllGenreAndTagsAndStatus(client)

            const [_tags, _genres] = [tags, genres].map(d => d.map(a => a.name))

            expect(_tags.filter(t => t === 'tagduplicate')).to.have.lengthOf(1)
            expect(_genres.filter(t => t === 'genreduplicate')).to.have.lengthOf(1)


        })
    })
});
