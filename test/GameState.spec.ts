import { expect } from "chai";
import { GameState, Direction, TurtleState, Action } from "../src/";

describe("GameState", () => {
  it("is not null or undefined", () => {
    expect(GameState).to.not.be.null;
    expect(GameState).to.not.be.undefined;
  });

  it("takes all required parameters", () => {
    expect(
      () =>
        new GameState(
          { width: 5, height: 5 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).not.to.throw();
  });

  it("defaults Turtle direction to North", () => {
    const myGameState = new GameState(
      { width: 5, height: 5 },
      { x: 0, y: 0 },
      { x: 2, y: 2 },
      [{ x: 1, y: 1 }, { x: 3, y: 3 }]
    );

    expect(myGameState).to.have.property("turtle");
    expect(myGameState.turtle).to.have.property("dir", Direction.North);
  });

  it("rejects board width and/or height values less than 1", () => {
    expect(
      () =>
        new GameState(
          { height: 0, width: 1 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).to.throw("invalid height");

    expect(
      () =>
        new GameState(
          { height: -1, width: 1 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).to.throw("invalid height");

    expect(
      () =>
        new GameState(
          { height: 1, width: 0 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).to.throw("invalid width");

    expect(
      () =>
        new GameState(
          { height: 1, width: -1 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).to.throw("invalid width");
  });

  it("Floors all incoming values", () => {
    const myGameState = new GameState(
      { height: 10.55, width: 10.1 },
      { x: 0.1, y: 0.9, dir: Direction.North },
      { x: 2.5, y: 2.5 },
      [{ x: 1.6, y: 1.6 }, { x: 3.2, y: 3.3 }]
    );

    expect(myGameState.board).to.have.property("width", 10);
    expect(myGameState.board).to.have.property("height", 10);

    expect(myGameState.turtle).to.have.property("x", 0);
    expect(myGameState.turtle).to.have.property("y", 0);

    expect(myGameState.exit).to.have.property("x", 2);
    expect(myGameState.exit).to.have.property("y", 2);

    expect(myGameState.mines).to.have.length(2);
    expect(myGameState.mines[0]).to.have.property("x", 1);
    expect(myGameState.mines[0]).to.have.property("y", 1);
  });

  describe("throws if", () => {
    it("out of bounds - Exit", () => {
      expect(
        () =>
          new GameState(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 10, y: 9 },
            []
          )
      ).to.throw(/exit out of bounds/);

      expect(
        () =>
          new GameState(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 10 },
            []
          )
      ).to.throw(/exit out of bounds/);
    });

    it("out of bounds - Mine", () => {
      expect(
        () =>
          new GameState(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 9 },
            [{ x: 10, y: 9 }]
          )
      ).to.throw(/mine 0 out of bounds/);
      expect(
        () =>
          new GameState(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 9 },
            [{ x: 9, y: 10 }]
          )
      ).to.throw(/mine 0 out of bounds/);
    });

    it("collision - Mine, Mine", () => {
      expect(
        () =>
          new GameState(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 9 },
            [{ x: 9, y: 9 }, { x: 9, y: 9 }]
          )
      ).to.throw(/Mine collision/);
    });

    it("collision - Mine, Exit", () => {
      expect(
        () =>
          new GameState(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 9 },
            [{ x: 9, y: 9 }]
          )
      ).to.throw(/Mine collision/);
    });
  });

  describe("Turtle State", () => {
    it("is IN_DANGER after spawning in an empty square", () => {
      const myGameState = new GameState(
        { width: 3, height: 3 },
        { x: 0, y: 0 },
        { x: 2, y: 2 },
        [{ x: 1, y: 1 }]
      );

      expect(myGameState.turtle).to.have.property(
        "state",
        TurtleState.InDanger
      );
    });
    it("is DEAD after spawning on a mine", () => {
      const myGameState = new GameState(
        { width: 3, height: 3 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        [{ x: 1, y: 1 }]
      );

      expect(myGameState.turtle).to.have.property("state", TurtleState.MineHit);
    });
    it("is SUCCESS after spawning on the exit", () => {
      const myGameState = new GameState(
        { width: 3, height: 3 },
        { x: 2, y: 2 },
        { x: 2, y: 2 },
        [{ x: 1, y: 1 }]
      );

      expect(myGameState.turtle).to.have.property("state", TurtleState.Success);
    });
    it("is OUT_OF_BOUNDS after spawning outside the board", () => {
      const myGameState = new GameState(
        { width: 3, height: 3 },
        { x: -1, y: -1 },
        { x: 2, y: 2 },
        [{ x: 1, y: 1 }]
      );

      expect(myGameState.turtle).to.have.property(
        "state",
        TurtleState.OutOfBounds
      );
    });

    // TODO:
    //    Error if no Turtle
    //    Error if no Exit
  });

  describe("applyAction", () => {
    // TODO: Investigate oddity of height: 1, "Cannot set property '0' of undefined"
    // TODO: Test the creation of the next game state, ensure it's a new object with new references, and is *NOT* a by-ref copy
    var myGameState;

    beforeEach(() => {
      myGameState = new GameState(
        { width: 2, height: 2 },
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        []
      );
    });

    afterEach(() => {
      myGameState = null;
    });

    it("Move puts the turtle out of bounds", () => {
      var nextGameState = myGameState.applyAction(Action.Move);
      
      expect(nextGameState.turtle).to.have.property('x', 0);
      expect(nextGameState.turtle).to.have.property('y', -1);
      expect(nextGameState.turtle).to.have.property('dir', Direction.North);
      expect(nextGameState.turtle).to.have.property('state', TurtleState.OutOfBounds);
    });
    
    it("Rotate puts the turtle facing East", () => {
      var nextGameState = myGameState.applyAction(Action.Rotate);
      
      expect(nextGameState.turtle).to.have.property('x', 0);
      expect(nextGameState.turtle).to.have.property('y', 0);
      expect(nextGameState.turtle).to.have.property('dir', Direction.East);
      expect(nextGameState.turtle).to.have.property('state', TurtleState.InDanger);
    });
    
    it("Rotate then Move puts the turtle facing East in grid {1, 0}", () => {
      var rotateState = myGameState.applyAction(Action.Rotate);
      var moveState = rotateState.applyAction(Action.Move);
      
      expect(moveState.turtle).to.have.property('x', 1);
      expect(moveState.turtle).to.have.property('y', 0);
      expect(moveState.turtle).to.have.property('dir', Direction.East);
      expect(moveState.turtle).to.have.property('state', TurtleState.Success);
    });
  });
});
