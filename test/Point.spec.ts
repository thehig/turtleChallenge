import { expect } from "chai";
import index from "../src/index";
const { Point } = index;

describe("Point", () => {
  it("is not null or undefined", () => {
    expect(Point).to.not.be.null;
    expect(Point).to.not.be.undefined;
  });

  it("has a constructor that takes 2 parameters", () =>
    expect(() => new Point(0, 0)).not.to.throw());
  it("sets a valid X and Y value from the constructor", () => {
      const myPoint = new Point(10, 10);
      expect(myPoint).to.have.property('x', 10);
      expect(myPoint).to.have.property('y', 10);
  });
});
