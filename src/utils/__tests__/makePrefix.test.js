import makePrefix from "../make-prefix";

describe("makePrefix", () => {
  it("returns the prefixed data testid", () => {
    expect(makePrefix("home")("button-01")).toBe("home-button-01");
  });
});
