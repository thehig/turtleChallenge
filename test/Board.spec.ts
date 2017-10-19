import { expect } from "chai";
import index from "../src/index";
const { Board } = index;

describe("Board", () => {
  it("is not null or undefined", () => {
    expect(Board).to.not.be.null;
    expect(Board).to.not.be.undefined;
  });

  it("has a constructor that takes 3 parameters", () =>
    expect(() => new Board(0, 0)).not.to.throw());

  it("sets a valid width and height value from the constructor", () => {
    const myBoard = new Board(10, 10);
    expect(myBoard).to.have.property("width", 10);
    expect(myBoard).to.have.property("height", 10);
  });

  it("floors incoming values", () => {
    const myBoard = new Board(9.1, 9.99);
    expect(myBoard).to.have.property('width', 9);
    expect(myBoard).to.have.property('height', 9);
  });

  describe("inBounds", () => {
    var board = null;
    beforeEach(() => (board = new Board(10, 10)));
    afterEach(() => (board = null));

    it("returns true if point is in bounds", () => {
      expect(board.inBounds({ x: 1, y: 1})).to.be.true;  
      expect(board.inBounds({ x: 9, y: 9})).to.be.true;  
    });

    it("returns false if point is out of bounds", () => {
      expect(board.inBounds({ x: -1,y:  1})).to.be.false;  
      expect(board.inBounds({ x: 9, y: -9})).to.be.false;  
      
      expect(board.inBounds({ x: 10, y: 1})).to.be.false;  
      expect(board.inBounds({ x: 1, y: 10})).to.be.false;  
    });
  });
});
