import { Settings, Turtle, Action, Direction, Board, IPoint } from "./";

/**
 * Apply the given action to the given turtle
 * @param turtle 
 * @param action 
 * @returns A new turtle with the applied action
 * @throws If a this action could not be applied to this turtle
 */
export const applyTurtleAction = function(turtle: Turtle, action: Action): Turtle {
  if (action == Action.Rotate) {
    switch (turtle.dir) {
      case Direction.North:
        return new Turtle(turtle.x, turtle.y, Direction.East, turtle.state);
      case Direction.East:
        return new Turtle(turtle.x, turtle.y, Direction.South, turtle.state);
      case Direction.South:
        return new Turtle(turtle.x, turtle.y, Direction.West, turtle.state);
      case Direction.West:
        return new Turtle(turtle.x, turtle.y, Direction.North, turtle.state);
      default:
        throw new Error(`Unknown Turtle Rotate direction: ${turtle.dir}`);
    }
  } else if (action == Action.Move) {
    switch (turtle.dir) {
      case Direction.North:
        return new Turtle(turtle.x, turtle.y - 1, turtle.dir, turtle.state);
      case Direction.East:
        return new Turtle(turtle.x + 1, turtle.y, turtle.dir, turtle.state);
      case Direction.South:
        return new Turtle(turtle.x, turtle.y + 1, turtle.dir, turtle.state);
      case Direction.West:
        return new Turtle(turtle.x - 1, turtle.y, turtle.dir, turtle.state);
      default:
        throw new Error(`Unknown Turtle Move direction: ${turtle.dir}`);
    }
  } else {
    throw new Error(`Unknown Turtle action: ${action}`);
  }
};

/**
 * Given a board of a Width and Height
 * @param board 
 * @param point 
 * @returns true if point is inside the bounds of the board
 * @returns false if the pointis outside the bounds of the board
 */
export const inBounds = function(board: Board, point: IPoint): Boolean {
  return (
    point.x >= 0 &&
    point.x < board.width &&
    point.y >= 0 &&
    point.y < board.height
  );
};

export const initializeGrid = function(width: number, height: number): IPoint[][] {
    const grid = [];
    // Create a grid containing POJOs with {x, y}
    for(let i = 0; i < height; i++) {
        grid[i] = [];
        for(let j = 0; j < width; j++) {
            grid[i][j] = null;
        }
    }
    return grid;
};