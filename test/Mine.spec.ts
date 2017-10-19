import { expect } from "chai";
import index from "../src/index";
const { Mine } = index;

describe("Mine", () => {
  it("is not null or undefined", () => {
    expect(Mine).to.not.be.null;
    expect(Mine).to.not.be.undefined;
  });

  it("has a constructor that takes 3 parameters", () =>
    expect(() => new Mine(0, 0)).not.to.throw());

  it("sets a valid X and Y value from the constructor", () => {
      const myMine = new Mine(10, 10);
      expect(myMine).to.have.property('x', 10);
      expect(myMine).to.have.property('y', 10);
  });
  
  it("floors incoming values", () => {
    const myMine = new Mine(9.1, 9.99);
    expect(myMine).to.have.property('x', 9);
    expect(myMine).to.have.property('y', 9);
  });
});
