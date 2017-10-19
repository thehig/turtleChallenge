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