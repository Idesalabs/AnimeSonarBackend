import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import dgraph = require("dgraph-js");

const expect = chai.expect;
chai.use(chaiAsPromised);

describe("Connector Behaviour Tests", () => {
  beforeEach(async () => {
    console.log("clear db");
    console.log("seed db");
  });

  describe("Initial", () => {
    it("true Should be true", () => {
      expect(true).to.equal(true);
    });
  });
});
