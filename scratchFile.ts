import { GameState, Actions, Action } from './src/';

var GameState = new GameState({width: 10, height: 10}, {x: 0, y: 0}, {x: 9, y:9}, [{x: 4, y:5}, {x:5, y: 5}]);
var actions = new Actions("mmm");

try {
    var game = new TurtleChallenge(GameState);

    // Single command
    var finalState = game.runAll(actions);

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

// describe "GameRunner", ->
// it "should take a GameState as its constructor parameter"

// describe "Tick" ->
//   it "should take an Action as a parameter"
//   it "should advance the internal GameState if not halted"
//   it "should not advance the internal GameState if halted"

// describe "Run" ->
//   it "should take Actions as a parameter"
//   it "should iteratively tick through the Actions"
//   it "should return the output of those Actions on a given GameState"
  
//   it "halts when turtle state becomes Success, MineHit, OutOfBounds"
//   it "halts when all Actions have been taken"
//   it "continues processing Actions until halt"

//   it "returns an object or string describing the final state"
//     * Success, MineHit, OutOfBounds, InDanger
//     * Number of actions taken

// describe "GameState"
//     it "errors if no Turtle is provided"
//     it "errors if no Exit is provided"

// describe "Board dimensions supported"
//     it "1x1"
//     it "1x10"
//     it "10x1"