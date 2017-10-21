import { expect } from "chai";
import { Exit } from "../src/";

describe("Exit", () => {
  it("is not null or undefined", () => {
    expect(Exit).to.not.be.null;
    expect(Exit).to.not.be.undefined;
  });

  it("has a constructor that takes 2 parameters", () =>
    expect(() => new Exit(0, 0)).not.to.throw());

  it("sets a valid X and Y value from the constructor", () => {
      const myExit = new Exit(10, 10);
      expect(myExit).to.have.property('x', 10);
      expect(myExit).to.have.property('y', 10);
  });
  
  it("floors incoming values", () => {
    const myExit = new Exit(9.1, 9.99);
    expect(myExit).to.have.property('x', 9);
    expect(myExit).to.have.property('y', 9);
  });
});
