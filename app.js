const fs = require('fs');
const { TurtleChallenge, GameState, Actions, Action } = require('./build');

const gameName = "./games/3x3/1";

// Read state json file
const initial = JSON.parse(fs.readFileSync(`${gameName}.json`));
/* 
// Run solution step by step
const gameInstance = new TurtleChallenge(new GameState(initial.board, initial.turtle, initial.exit, initial.mines));
gameInstance.tick(Action.Rotate);
gameInstance.tick(Action.Move);
gameInstance.tick(Action.Move);
gameInstance.tick(Action.Rotate);
gameInstance.tick(Action.Move);
gameInstance.tick(Action.Move);
console.log(JSON.stringify(gameInstance, null, 4));
*/


// Run all solutions in file, separated by \r\n
// Read actions txt file
const actions = fs.readFileSync(`${gameName}.txt`, 'utf8').trim().split('\r\n');

for(var i = 0; i < actions.length; i++) {
    // Create TurtleChallenge
    try {
        const gameInstance = new TurtleChallenge(new GameState(initial.board, initial.turtle, initial.exit, initial.mines));
        const outcome = gameInstance.run(new Actions(actions[i]));
        // Run Actions
        console.log(`${actions[i]}: ${outcome}`);
    }
    catch (err) {
        console.log(err);
    }
}
