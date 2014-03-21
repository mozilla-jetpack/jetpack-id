var getID = require("../");
var expect = require("chai").expect;

describe("jetpack-id", function () {
  it("Returns GUID when `id` GUID", function () {
    var guid = "{8490ae4f-93bc-13af-80b3-39adf9e7b243}";
    expect(getID({ id: guid })).to.be.equal(guid);
  });
  it("Returns domain id when `id` domain id", function () {
    var id = "my-addon@jetpack";
    expect(getID({ id: id })).to.be.equal(id);
  });
  it("Returns domain id when `id` exists but not GUID/domain", function () {
    var id = "my-addon";
    expect(getID({ id: id })).to.be.equal(id + "@jetpack");
  });
  it("allows underscores in ID", function () {
    var id = "my_addon";
    expect(getID({ id: id })).to.be.equal(id + "@jetpack");
  });
  it("Returns valid name when `name` exists", function () {
    var id = "my-addon";
    expect(getID({ name: id })).to.be.equal("@" + id);
  });
  it("Returns null when `id` and `name` do not exist", function () {
    expect(getID({})).to.be.equal(null);
  });
  it("Returns null when no object passed in", function () {
    expect(getID()).to.be.equal(null);
  });
});
