# Turtle Challenge

I MISSED THE STARTING DIRECTION IN THE INITIAL STATE


## About

Turtle Challenge

A turtle must walk through a minefield. Write a program that will read the initial game settings
from one file and a sequence of moves from a different file.
Then the program will output if the sequence leads to the success or failure of the little turtle.
The program should also handle the scenario where the turtle doesn’t reach the exit point or
doesn’t hit a mine.

### Inputs

* The board is a grid of n by m number of tiles:
* The starting position is a tile (x,y) and the initial direction the turtle is facing (that is: north, east, south, west)
* The exit point is a tile (x,y)
* The mines are defined as a list of tiles (x,y)

### Actions

Turtle actions can be either

* move​ (m) one tile forward or
* rotate​ (r) 90 degrees to the right

### Expected Input

* A game settings file including board size, start position, exit position and a list of mine positions.
* A moves file containing a list of moves (either ‘m’ or ‘r’)

### Expected Output

* A message on the console describing the result, one of Success, Mine hit, still in danger or Out of bounds.

---

## Installation & Usage

* Clone the repository
* Run `npm install`
* Run `npm start` to build and run the app.js default entrypoint

The App.js is mainly concerned with bootstrapping the TurtleChallenge engine and demonstrating how to load a solution from a file, and both `tick` and `run` a solution. An example is provided that reads a [GameState](#gamestate) from a file `games/3x3/1.json` and a set of moves to test for that game in `games/3x3/1.txt`.

The Game State JSON defines the initial state of the game

```json
{
  "board": { "width": 3, "height": 3 },
  "turtle": { "x": 0, "y": 0 },
  "exit": { "x": 2, "y": 2 },
  "mines": [{ "x": 1, "y": 1 }]
}
```

and the actions text file defines the moves to be applied. Each line is a separate attempt, separated by `\r\n`

```txt
rmmrmm
rrmmrrrmm
rmmrmrmmrmmr
mmrmrmrrrmmmrmrm
rmmrmm
rrm
mm
```

Running the above will result in the following output. See the [TurtleState](#turtleState) enum for more on the states meanings

```txt
rmmrmm: Finished in state Success after 6 actions
rrmmrrrmm: Finished in state Success after 9 actions
rmmrmrmmrmmr: Finished in state Mine Hit after 7 actions
mmrmrmrrrmmmrmrm: Finished in state Out of Bounds after 1 actions
rmmrmm: Finished in state Success after 6 actions
rrm: Finished in state In Danger after 3 actions
mm: Finished in state Out of Bounds after 1 actions
```

---

## Code

### TurtleChallenge

The `TurtleChallenge` class takes only one parameter, a [GameState](#gamestate) object. This class controls the running of the game, and the transitions between [GameState](#gamestate)s until a halting state is encountered. The halting state of the game is derived from the [TurtleState](#turtleState) [enum](#enums). Two functions are provided to aide in the running of the game, `tick()` and `run()`

#### Tick()

Tick takes an `Action` [enum](#enums) as its only parameter and returns the next [GameState](#gamestate). Tick will only advance if the Turtle is `InDanger`, otherwise the game remains in its' current state indefinitely. An `InDanger` tick will increment the number of actions that have been applied and will store the new [GameState](#gamestate)

#### Run()

Takes an `Actions` object as its parameter, which it will `tick()` through until a halting state is encountered. Returns a string representing the final state of the game after applying the set of actions

### GameState

The GameState contains everything related to the game at any given point in time.

```ts
constructor(
    board: { width: number; height: number },
    start: { x: number; y: number; dir?: Direction },
    exit: { x: number; y: number },
    mines: Array<{ x: number; y: number }>
  )
```

Parameter | Function
--- | ---
board | Defines the width and height of the game board.
start | The starting location of the Turtle. Direction defaults to North.
exit | The location of the exit. Contact with the exit ends the game
mines | An array containing Mines. Contact with a mine ends the game

The GameState is advanced by the `applyAction` function, which takes an `Action` [enum](#enums) as its parameter and returns a `new GameState(...)`.

## Enums

### Action

> The possible actions that can be applied to the Turtle through GameState and TurtleChallenge

```ts
export enum Action {
    Error = "ERROR",
    Move = "MOVE",
    Rotate = "ROTATE"
}
```

### Direction

> The possible starting directions that the Turtle can be in

```ts
export enum Direction {
    Error = "ERROR",
    North = "NORTH",
    East = "EAST",
    South = "SOUTH",
    West = "WEST"
};
```

### TurtleState

> The possible states for the Turtle

```ts
export enum TurtleState {
    Error = "ERROR",
    Initializing = "Initializing",
    InDanger = "In Danger",
    Success = "Success",
    OutOfBounds = "Out of Bounds",
    MineHit = "Mine Hit"
};
```

Enum | Halts | Description
--- | --- | ---
Error | Y | Used as a test parameter
Initializing | Y | Default state of a Turtle when created before collision detection
Success | Y | Encountered when colliding with the `Exit`
OutOfBounds | Y | Encountered when attempting to move outside the `width` and `height` of the board
MineHit | Y | Encountered when colliding with a `Mine`
InDanger | N | The "normal" state of the Turtle, awaiting input to act upon

---

## Edge Cases, Assumptions and Caveats

* I did encounter a crash with a small dimension board, 5x1 if I remember correctly. Needs more investigation
* Game does not handle a state where no exit is provided
* Something like Immutable.JS would be much more reliable and efficient for managing GameState and ensuring elements are not being passed by ref unless explicitly intended