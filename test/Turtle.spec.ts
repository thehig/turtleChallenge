import { expect } from "chai";
import index from "../src/index";
const { Turtle, Direction } = index;

describe("Turtle", () => {
  it("is not null or undefined", () => {
    expect(Turtle).to.not.be.null;
    expect(Turtle).to.not.be.undefined;
  });

  it("has a constructor that takes 3 parameters", () =>
    expect(() => new Turtle(0, 0, Direction.North)).not.to.throw());

  it("sets a valid X and Y value from the constructor", () => {
      const myTurtle = new Turtle(10, 10, Direction.North);
      expect(myTurtle).to.have.property('x', 10);
      expect(myTurtle).to.have.property('y', 10);
      expect(myTurtle).to.have.property('dir', Direction.North);
  });

  it("floors incoming values", () => {
    const myTurtle = new Turtle(9.1, 9.99, Direction.North);
    expect(myTurtle).to.have.property('x', 9);
    expect(myTurtle).to.have.property('y', 9);
  });
});
