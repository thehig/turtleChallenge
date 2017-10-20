import { Settings, Actions, Action } from './src/';

var settings = new Settings({width: 10, height: 10}, {x: 0, y: 0}, {x: 9, y:9}, [{x: 4, y:5}, {x:5, y: 5}]);
var actions = new Actions("mmm");

try {
    var game = new TurtleChallenge(settings);

    // Single command
    var finalState = game.runAll(actions);

    // Step command
    var gameState_1 = game.tick(Action.Move);
    var gameState_2 = game.tick(Action.Move);
    var gameState_3 = game.tick(Action.Move);
} catch (e) {
    console.log(e);
}

