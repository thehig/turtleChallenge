import { expect } from "chai";
import { GameState, TurtleChallenge, Action, Actions, TurtleState } from "../src";

describe("TurtleChallenge", () => {
  it("should take a GameState as its constructor parameter", () =>
    expect(
      () =>
        new TurtleChallenge(
          new GameState(
            { width: 3, height: 3 },
            { x: 0, y: 0 },
            { x: 2, y: 2 },
            [{ x: 1, y: 1 }]
          )
        )
    ).not.to.throw());

  describe("Tick", () => {
    it("should take an Action as a parameter", () => {
      const myTurtleChallenge = new TurtleChallenge(
        new GameState(
          { width: 3, height: 3 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          []
        )
      );
      expect(() => myTurtleChallenge.tick(Action.Move)).to.not.throw();
    });

    it("should advance the internal GameState if not halted", () => {
      const myTurtleChallenge = new TurtleChallenge(
        new GameState(
          { width: 3, height: 3 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          []
        )
      );
      var previousState = myTurtleChallenge.state; /*?*/
      myTurtleChallenge.tick(Action.Move);
      expect(myTurtleChallenge.state).to.not.equal(previousState);
    });

    it("should not advance the internal GameState if halted", () => {
      const myTurtleChallenge = new TurtleChallenge(
        new GameState(
          { width: 3, height: 3 },
          { x: 2, y: 2 },
          { x: 2, y: 2 },
          []
        )
      );
      var previousState = myTurtleChallenge.state;
      myTurtleChallenge.tick(Action.Move);
      expect(myTurtleChallenge.state).to.equal(previousState);
    });
  });

  describe("run", () => {
    it("should take Actions as a parameter", () => {
      const myTurtleChallenge = new TurtleChallenge(
        new GameState(
          { width: 3, height: 3 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          []
        )
      );
      expect(() => myTurtleChallenge.run(new Actions("mmm"))).to.not.throw();
    });

    //   it("should return the output of those Actions on a given GameState", () => {

    //   });

    it("halts when turtle state becomes OutOfBounds", () => {
      const myTurtleChallenge = new TurtleChallenge(
        new GameState({ width: 3, height: 3 }, { x: 0, y: 0 }, { x: 2, y: 2 }, [
          { x: 1, y: 1 }
        ])
      );

      const runResult = myTurtleChallenge.run(new Actions("mmm"));
      expect(myTurtleChallenge).to.have.property("isHalted", true);
      expect(myTurtleChallenge.state.turtle).to.have.property(
        "state",
        TurtleState.OutOfBounds
      );
      expect(myTurtleChallenge).to.have.property("appliedActions", 1);
      expect(runResult).to.equal("Finished in state Out of Bounds after 1 actions");
    });

    it("halts when turtle state becomes Success", () => {
      const myTurtleChallenge = new TurtleChallenge(
        new GameState({ width: 3, height: 3 }, { x: 0, y: 0 }, { x: 2, y: 2 }, [
          { x: 1, y: 1 }
        ])
      );

      const runResult = myTurtleChallenge.run(new Actions("rmmrmmrmrm"));
      expect(myTurtleChallenge).to.have.property("isHalted", true);
      expect(myTurtleChallenge.state.turtle).to.have.property(
        "state",
        TurtleState.Success
      );
      expect(myTurtleChallenge).to.have.property("appliedActions", 6);
      expect(runResult).to.equal("Finished in state Success after 6 actions");
    });

    it("halts when turtle state becomes MineHit", () => {
      const myTurtleChallenge = new TurtleChallenge(
        new GameState({ width: 3, height: 3 }, { x: 0, y: 0 }, { x: 2, y: 2 }, [
          { x: 1, y: 1 }
        ])
      );

      const runResult = myTurtleChallenge.run(new Actions("rmrmrm"));
      expect(myTurtleChallenge).to.have.property("isHalted", true);
      expect(myTurtleChallenge.state.turtle).to.have.property(
        "state",
        TurtleState.MineHit
      );
      expect(myTurtleChallenge).to.have.property("appliedActions", 4);
      expect(runResult).to.equal("Finished in state Mine Hit after 4 actions");      
    });
  });
});
