import { expect } from "chai";
import { Settings, Direction, TurtleState } from "../src/";

describe("Settings", () => {
  it("is not null or undefined", () => {
    expect(Settings).to.not.be.null;
    expect(Settings).to.not.be.undefined;
  });

  it("takes all required parameters", () => {
    expect(
      () =>
        new Settings(
          { width: 5, height: 5 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).not.to.throw();
  });

  it("defaults Turtle direction to North", () => {
    const mySettings = new Settings(
      { width: 5, height: 5 },
      { x: 0, y: 0 },
      { x: 2, y: 2 },
      [{ x: 1, y: 1 }, { x: 3, y: 3 }]
    );

    expect(mySettings).to.have.property('turtle');
    expect(mySettings.turtle).to.have.property('dir', Direction.North);
  });

  it("rejects board width and/or height values less than 1", () => {
    expect(
      () =>
        new Settings(
          { height: 0, width: 1 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).to.throw("invalid height");

    expect(
      () =>
        new Settings(
          { height: -1, width: 1 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).to.throw("invalid height");

    expect(
      () =>
        new Settings(
          { height: 1, width: 0 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).to.throw("invalid width");

    expect(
      () =>
        new Settings(
          { height: 1, width: -1 },
          { x: 0, y: 0, dir: Direction.North },
          { x: 2, y: 2 },
          [{ x: 1, y: 1 }, { x: 3, y: 3 }]
        )
    ).to.throw("invalid width");
  });

  it("Floors all incoming values", () => {
    const settings = new Settings(
      { height: 10.55, width: 10.1 },
      { x: 0.1, y: 0.9, dir: Direction.North },
      { x: 2.5, y: 2.5 },
      [{ x: 1.6, y: 1.6 }, { x: 3.2, y: 3.3 }]
    );

    expect(settings.board).to.have.property("width", 10);
    expect(settings.board).to.have.property("height", 10);

    expect(settings.turtle).to.have.property("x", 0);
    expect(settings.turtle).to.have.property("y", 0);

    expect(settings.exit).to.have.property("x", 2);
    expect(settings.exit).to.have.property("y", 2);

    expect(settings.mines).to.have.length(2);
    expect(settings.mines[0]).to.have.property("x", 1);
    expect(settings.mines[0]).to.have.property("y", 1);
  });

  describe('throws if', () => {
    it("out of bounds - Exit", () => {
      expect(
        () =>
          new Settings(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 10, y: 9 },
            []
          )
      ).to.throw(/exit out of bounds/);
      
      expect(
        () =>
          new Settings(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 10 },
            []
          )
      ).to.throw(/exit out of bounds/);
    });

    it('out of bounds - Mine', () => {
      expect(
        () =>
          new Settings(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 9 },
            [{ x: 10, y: 9 }]
          )
      ).to.throw(/mine 0 out of bounds/);
      expect(
        () =>
          new Settings(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 9 },
            [{ x: 9, y: 10 }]
          )
      ).to.throw(/mine 0 out of bounds/);
    });

    
    it('collision - Mine, Mine', () => {
      expect(
        () =>
          new Settings(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 9 },
            [{ x: 9, y: 9 }, { x: 9, y: 9 }]
          )
      ).to.throw(/Mine collision/);
    });

    it('collision - Mine, Exit', () => {
      expect(
        () =>
          new Settings(
            { width: 10, height: 10 },
            { x: 9, y: 9, dir: Direction.North },
            { x: 9, y: 9 },
            [{ x: 9, y: 9 }]
          )
      ).to.throw(/Mine collision/);
    });
  });
  
  describe('Turtle State', () => {
    it('is IN_DANGER after spawning in an empty square', () => {
      const mySettings = new Settings(
        { width: 3, height: 3 },
        { x: 0, y: 0 },
        { x: 2, y: 2 },
        [{ x: 1, y: 1 }]
      );

      expect(mySettings.turtle).to.have.property('state', TurtleState.InDanger);
    });
    it('is DEAD after spawning on a mine', () => {
      const mySettings = new Settings(
        { width: 3, height: 3 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        [{ x: 1, y: 1 }]
      );

      expect(mySettings.turtle).to.have.property('state', TurtleState.MineHit);
    });
    it('is SUCCESS after spawning on the exit', () => {
      const mySettings = new Settings(
        { width: 3, height: 3 },
        { x: 2, y: 2 },
        { x: 2, y: 2 },
        [{ x: 1, y: 1 }]
      );

      expect(mySettings.turtle).to.have.property('state', TurtleState.Success);
    });
    it('is OUT_OF_BOUNDS after spawning outside the board', () => {
      const mySettings = new Settings(
        { width: 3, height: 3 },
        { x: -1, y: -1 },
        { x: 2, y: 2 },
        [{ x: 1, y: 1 }]
      );

      expect(mySettings.turtle).to.have.property('state', TurtleState.OutOfBounds);
    });
  });
});
