import { expect } from "chai";
import { Actions } from "../src/";

describe("Actions", () => {
  it("is not null or undefined", () => {
    expect(Actions).to.not.be.null;
    expect(Actions).to.not.be.undefined;
  });

  describe('constructor', () => {
      it('Takes "m" without throwing', ()=>{
          var myActions = new Actions("mMMm");
          expect(myActions.actions).lengthOf(4);
      });

      it('Takes "r" without throwing', ()=>{
        var myActions = new Actions("RrrR");
        expect(myActions.actions).lengthOf(4);
      });

      it('Takes a combination of "M" and "R"', () => {
        var myActions = new Actions("RrrRmmMM");
        expect(myActions.actions).lengthOf(8);
      });

      it('throws for any char other than "M" or "R"', () => {
          expect(() => new Actions("A")).to.throw(/invalid action code/);
          expect(() => new Actions("mmrrArrmm")).to.throw(/invalid action code/);
          expect(() => new Actions("4")).to.throw(/invalid action code/);
      });

      it('throws for empty string (no actions)', () => expect(() => new Actions("")).to.throw(/invalid empty parameter/));
  })
});