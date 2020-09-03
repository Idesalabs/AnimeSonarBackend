import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import clearDb from '../seed/clearDb';
import { initDgraphClient } from '..';
import seedDb from '../seed/seedDb';
import getAllGenreAndTagsAndStatus from './getAllGenreAndTagsAndStatus';

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
});
