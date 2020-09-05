import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import dgraph = require("dgraph-js");
import { initDgraphClient } from '.';
import { AnimeInput, AnimeStatus, CreateAnimeInput } from '../../../generated/resolver-types';
import createDbAnime from './createDbAnime';
import clearDb from './seed/clearDb';
import seedDb from './seed/seedDb';
import { values } from 'lodash';

const expect = chai.expect;
chai.use(chaiAsPromised);

const client = initDgraphClient()

const anime: CreateAnimeInput['anime'] = [
  {
    coverImage: "",
    description: "", episodeCount: 23,
    genre: [{ name: "Romance", }, { name: "genre1" }],
    tags: [{ name: "Harem", "description": "Lot's of girls nuff said", }, { name: "tag1" }],
    isoAired: "2019-03-28T14:00:00-06:00",
    id: "any",
    minutesPerEpisode: 20,
    status: AnimeStatus.Airing,
    title: "To Love Ru!",
    bannerImage: ""
  },
  {
    coverImage: "",
    description: "", episodeCount: 23,
    genre: [{ name: "Romance", }, { name: "genre1" }],
    tags: [{ name: "Harem", "description": "Lot's of girls nuff said", }, { name: "tag1" }],
    isoAired: "2019-03-28T14:00:00-06:00",
    id: "any",
    minutesPerEpisode: 20,
    status: AnimeStatus.Airing,
    title: "anime1",
    bannerImage: ""
  },
  {
    coverImage: "",
    description: "", episodeCount: 23,
    genre: [{ name: "Romance" }],
    tags: [{ name: "Ninja", "description": "Kunai, Shuriken, Katana" }],
    isoAired: "2019-03-28T14:00:00-06:00",
    id: "any",
    minutesPerEpisode: 20,
    status: AnimeStatus.Airing,
    title: "Boruto",
    bannerImage: ""
  },
  {
    coverImage: "",
    description: "", episodeCount: 23,
    genre: [{ name: "Romance" }],
    tags: [{ name: "Ninja", "description": "Kunai, Shuriken, Katana" }],
    isoAired: "2019-03-28T14:00:00-06:00",
    id: "any",
    minutesPerEpisode: 20,
    status: AnimeStatus.Airing,
    title: "Boruto",
    bannerImage: ""
  },

]
describe("Connector Behaviour Tests", () => {
  beforeEach(async () => {
    await clearDb(client)
    await seedDb(client)

  });

  describe("Create Anime", () => {

    it('Should not create duplicates', async () => {
      const result = await createDbAnime({ anime }, client)
      const existingAnimeUpsertResult = result?.results.filter(([title, _]) => title === 'anime1')[0]
      expect(existingAnimeUpsertResult?.[0]).to.be.eq('anime1')
      expect(existingAnimeUpsertResult?.[1]).to.be.null

      const duplicateAnime = result?.results.filter(([title, _]) => title === 'Boruto')
      expect(duplicateAnime).to.have.lengthOf(1)
    })


  })

})
