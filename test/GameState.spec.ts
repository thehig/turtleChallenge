import { expect } from 'chai';
import { GameState } from '../src/';


describe("GameState", () => {
    it("is not null or undefined", () => {
      expect(GameState).to.not.be.null;
      expect(GameState).to.not.be.undefined;
    });
    
    // It takes the Grid, Exit, Mines and Turtle as parameters
    // It applies the Exit, and Mines to the Grid, checking for errors
    // It applies the Turtle, checking for errors
    // It checks for Turtle State to end the game



    // it("has a constructor that takes 3 parameters", () =>
    //   expect(() => new GameState(0, 0)).not.to.throw());
});

//     it("sets a valid X and Y value from the constructor", () => {
//         const myGameState = new GameState(10, 10);
//         expect(myGameState).to.have.property('x', 10);
//         expect(myGameState).to.have.property('y', 10);
//     });
    
//     it("floors incoming values", () => {
//       const myGameState = new GameState(9.1, 9.99);
//       expect(myGameState).to.have.property('x', 9);
//       expect(myGameState).to.have.property('y', 9);
//     });
//   });
  