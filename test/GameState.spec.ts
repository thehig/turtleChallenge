import { expect } from "chai";
import { GameState } from "../src/";

describe.skip("GameState", () => {
  it("is not null or undefined", () => {
    expect(GameState).to.not.be.null;
    expect(GameState).to.not.be.undefined;
  });

  it('takes a board, and a collection of IPoint as parameters', () => expect.fail());

  it('has an applyAction function', () => expect.fail());
  it('returns a new instance of GameState', () => expect.fail());

  describe('throws an error if', () => {
    it('tries to place a Mine and an Exit at the same place', () => expect.fail());
  });

    // It takes the Grid, Exit, Mines and Turtle as parameters
    // It applies the Exit, and Mines to the Grid, checking for errors
    // It applies the Turtle, checking for errors
    // It checks for Turtle State to end the game
});
