import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import clearDb from '../seed/clearDb';
import { initDgraphClient } from '..';
import seedDb from '../seed/seedDb';
import getAllGenreAndTagsAndStatus from './getAllGenreAndTagsAndStatus';
import createGenre from './createMeta';
import createMeta from './createMeta';

const expect = chai.expect;
chai.use(chaiAsPromised);

const client = initDgraphClient()

describe("Connector Behaviour Tests", () => {
    beforeEach(async () => {
        await clearDb(client)
        await seedDb(client)

    });

    describe("Initial Meta", () => {

        it("Initial tags,genres,statuses should be correct", async () => {
            const { tags, genres, statuses } = await getAllGenreAndTagsAndStatus(client)
            const [_tags, _genres, _statuses] = [tags, genres, statuses].map(d => Object.values(d))

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
            // const genreSet = new Set(genres)
            const result = await createGenre(genres)
            expect(Object.keys(result)).to.have.members(genres.map(g => g.name))
        })

        it("Create Tag Should Work", async () => {
            const tags = ["Female Protagonist", "Love Triangle", "Harem"].map(t => ({ name: t, description: "description " + t }))
            const result = await createTag(tags)
            console.log(result)
            expect(Object.keys(result)).to.have.members(tags.map(t => t.name))

        })


    })
});
