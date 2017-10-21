const fs = require('fs');
const { TurtleChallenge, Actions, Action } = require('./src');

// Read state json file
const state = JSON.parse(fs.readFileSync('./games/3x3/1.json'));
// Read actions txt file
const actions = fs.readFileSync('./games/3x3/1.txt', 'utf8').trim().split('\r\n');


const gameInstance = new TurtleChallenge(state);
console.log(JSON.stringify(gameInstance, null, 4));
gameInstance.tick(Action.Move);
console.log(JSON.stringify(gameInstance, null, 4));
/* 
// Run all solutions
for(var i = 0; i < actions.length; i++) {
    // Create TurtleChallenge
    try {
        console.log(state);
        const gameInstance = new TurtleChallenge(state);
        const outcome = gameInstance.run(new Actions(actions[i]));
        // Run Actions
        console.log(`${actions[i]}: ${outcome}`);
    }
    catch (err) {
        console.log(err);
    }
}
 */