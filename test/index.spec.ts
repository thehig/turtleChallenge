import { expect } from "chai";
import { Direction, Action, Turtle, Mine, Exit, GameState, GameState } from "../src/";

describe("Index, not null:", () => {
  // Enums
  it("Direction", () => expect(Direction).to.not.be.null);
  it("Action", () => expect(Action).to.not.be.null);

  // Classes
  it("Turtle", () => expect(Turtle).to.not.be.null);
  it("Mine", () => expect(Mine).to.not.be.null);
  it("Exit", () => expect(Exit).to.not.be.null);
  it("GameState", () => expect(GameState).to.not.be.null);
  // it("Engine", () => expect(Engine).to.not.be.null);
  
  it("GameState", () => expect(GameState).to.not.be.null);
});
