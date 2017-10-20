# turtleChallenge

## Breakdown

### Enums

* Direction
  * Represents N/S/E/W compass directions in order that they would be rotated through in clockwise fashion
* Action
  * Represents the actions available to the Turtle
* TurtleState
  * Represents the current state of the Turtle, (Safe, Dead, Out of Bounds, In Danger)

### Interfaces

The `IPoint` interface is used to present a consistent set of X, Y properties for objects that exist within the Board. The `IPoint` interface is implemented by the `Exit`, `Mine` and `Turtle` Classes.

### Classes

* Exit
  * represents the exit of the map
  * does not move
  * when touched by the Turtle, Turtle is considered safe
* Mine
  * represents a deadly mine
  * does not move
  * when touched by the Turtle, Turtle is considered dead
* Turtle
  * represents the Turtle
  * has two actions, `MOVE` and `ROTATE`
* Actions
  * contains a list of actions to be taken in the form `mmrrrrmmrmrmmm` with no spaces, carriage returns or commas.
* GameState
  * Contains a grid, and a constructor for manipulating that grid

### Modules

* Engine
  * The engine module is responsible for taking a `GameState` object and an `Actions` object and combining the two to create a `GameState`
  * Assuming the `GameState` does not throw an error on creation, it will represent the current state of the game, the board, any mines, exit and/or turtle
  * The Engine has an `applyAction` static function that takes `GameState` and `Action` as parameters and returns a new `GameState` with the `Action` applied, or throws an error
  * End cases are represented by the `TurtleState` enum. An end case of each enum value can have only a single implication
    * Initializing - Turtle has not yet been put on the board
    * Success - Turtle moved to the `Exit` grid location
    * OutOfBounds - Turtle moved to an invalid grid location
    * MineHit - Turtled moved to a `Mine` grid location
    * InDanger - Turtle has insufficient moves to enter any other end state

## Edge Cases to Remember

* Is a turtle that starts on the Exit considered Successful or Error?
* Is a turtle that starts on a Mine considered MineHit or Error?
* Is a turtle that has no actions specified Initializing, InDanger or Error?
* What happens if we try and give more actions but a Mine was hit?
* What happens when a Mine and an Exit are spawned at the same location? What about the order?