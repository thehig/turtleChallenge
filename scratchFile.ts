import { GameState, Actions, Action, TurtleChallenge } from './src/';

try {
    var myGameState = new GameState({width: 10, height: 10}, {x: 0, y: 0}, {x: 9, y:9}, [{x: 4, y:5}, {x:5, y: 5}]);
    var actions = new Actions("mmm");
    var game = new TurtleChallenge(myGameState);

    // Single command
    var finalState = game.run(actions);

    // Step command
    var gameState_1 = game.tick(Action.Move);
    var gameState_2 = game.tick(Action.Move);
    var gameState_3 = game.tick(Action.Move);
} catch (e) {
    console.log(e);
}


// describe "App" ->
// it "takes 2 CLI parameters, the initial state (JSON file) and the actions (txt file)"
// it "handles thrown errors cleanly"
// it "returns a string of final halting state and number of commands executed"

// describe "File IO", ->
// it "reads a settings (json) file from a given path"
// it "reads an actions (txt) file from a given path"
// it "throws appropriate errors"
//   * File not Found
//   * Invalid permissions/access

// describe "Board dimensions supported"
//     it "1x1"
//     it "1x10"
//     it "10x1"