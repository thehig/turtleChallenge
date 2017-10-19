import { expect } from "chai";
import { Turtle, Direction, TurtleState, Action } from "../src/";

describe("Turtle", () => {
  it("is not null or undefined", () => {
    expect(Turtle).to.not.be.null;
    expect(Turtle).to.not.be.undefined;
  });

  it("has a constructor that takes 3 parameters", () =>
    expect(() => new Turtle(0, 0, Direction.North)).not.to.throw());

  it("sets a valid X and Y value from the constructor", () => {
    const myTurtle = new Turtle(10, 10, Direction.North);
    expect(myTurtle).to.have.property("x", 10);
    expect(myTurtle).to.have.property("y", 10);
    expect(myTurtle).to.have.property("dir", Direction.North);
  });

  it("floors incoming values", () => {
    const myTurtle = new Turtle(9.1, 9.99, Direction.North);
    expect(myTurtle).to.have.property("x", 9);
    expect(myTurtle).to.have.property("y", 9);
  });

  it("throws an error for unknown actions", () => {
    const myTurtle = new Turtle(9.1, 9.99, Direction.North);
    expect(() => myTurtle.act(Action.Error)).to.throw(/Unknown Turtle action/);
  });


  describe("state", () => {
    it("defaults to Initializing", () => {
      const myTurtle = new Turtle(9.1, 9.99, Direction.North);
      expect(myTurtle).to.have.property("state", TurtleState.Initializing);
    });

    it("can be specified in constructor", () => {
      const myTurtle = new Turtle(
        9.1,
        9.99,
        Direction.North,
        TurtleState.InDanger
      );
      expect(myTurtle).to.have.property("state", TurtleState.InDanger);
    });
  });

  describe("act(Action.Rotate)", () => {
    var startingTurtle = null;
    beforeEach(() => (startingTurtle = new Turtle(3, 3, Direction.North)));
    afterEach(() => (startingTurtle = null));

    it("returns a new instance", () => {
      var oneRotation = startingTurtle.act(Action.Rotate);

      expect(startingTurtle).to.have.property("dir", Direction.North);
      expect(oneRotation).to.have.property("dir", Direction.East);
    });

    it('throws an error if Direction is invalid', () => {
      const myTurtle = new Turtle(9.1, 9.99, Direction.Error);
      expect(() => myTurtle.act(Action.Rotate)).to.throw(/Unknown Turtle Rotate direction/);
    });

    it("rotates through the directions properly", () => {
      var oneRotation = startingTurtle.act(Action.Rotate);
      var twoRotation = oneRotation.act(Action.Rotate);
      var threeRotation = twoRotation.act(Action.Rotate);
      var fourRotation = threeRotation.act(Action.Rotate);

      expect(oneRotation).to.have.property("dir", Direction.East);
      expect(twoRotation).to.have.property("dir", Direction.South);
      expect(threeRotation).to.have.property("dir", Direction.West);
      expect(fourRotation).to.have.property("dir", Direction.North);
    });
  });

  describe("act(Action.Move)", () => {
    var startingTurtle = null;
    beforeEach(() => (startingTurtle = new Turtle(3, 3, Direction.North)));
    afterEach(() => (startingTurtle = null));

    it('returns a new instance', () => {
      var oneRotation = startingTurtle.act(Action.Move);

      expect(startingTurtle).to.have.property('y', 3);
      expect(oneRotation).to.have.property('y', 2);
    });
    
    it('throws an error if Direction is invalid', () => {
      const myTurtle = new Turtle(9.1, 9.99, Direction.Error);
      expect(() => myTurtle.act(Action.Move)).to.throw(/Unknown Turtle Move direction/);
    });

    it("moves up when facing North", () => {
      var movedTurtle = startingTurtle.act(Action.Move);

      expect(movedTurtle).to.have.property("dir", Direction.North);
      expect(movedTurtle).to.have.property("x", 3);
      expect(movedTurtle).to.have.property("y", 2);
    });

    it("moves right when facing East", () => {
      var movedTurtle = startingTurtle
        .act(Action.Rotate)
        .act(Action.Move);

      expect(movedTurtle).to.have.property("dir", Direction.East);
      expect(movedTurtle).to.have.property("x", 4);
      expect(movedTurtle).to.have.property("y", 3);
    });

    it("moves down when facing South", () => {
      var movedTurtle = startingTurtle
        .act(Action.Rotate)
        .act(Action.Rotate)
        .act(Action.Move);

      expect(movedTurtle).to.have.property("dir", Direction.South);
      expect(movedTurtle).to.have.property("x", 3);
      expect(movedTurtle).to.have.property("y", 4);
    });

    it("moves left when facing West", () => {
      var movedTurtle = startingTurtle
        .act(Action.Rotate)
        .act(Action.Rotate)
        .act(Action.Rotate)
        .act(Action.Move);

      expect(movedTurtle).to.have.property("dir", Direction.West);
      expect(movedTurtle).to.have.property("x", 2);
      expect(movedTurtle).to.have.property("y", 3);
    });
  });
});
