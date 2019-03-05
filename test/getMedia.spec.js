import { expect } from "chai"

function getTrue() {
	return true;
}

describe("first test", () => {
  it("Should return true", () => {
    const val = getTrue();
    expect(val).to.equal(true);
  });
});