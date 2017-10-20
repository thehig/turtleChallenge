import { Board, Turtle, Exit, Mine, Direction, TurtleState } from "../";

export class GameState {
  board: Board;
  turtle: Turtle;
  exit: Exit;
  mines: Array<Mine>;

  constructor(
    board: { width: number; height: number },
    start: { x: number; y: number; dir?: Direction },
    exit: { x: number; y: number },
    mines: Array<{ x: number; y: number }>
  ) {
    if (board.width <= 0)
      throw new Error("Unable to create GameState: invalid width");
    if (board.height <= 0)
      throw new Error("Unable to create GameState: invalid height");
    this.board = new Board(board.width, board.height);

    this.turtle = new Turtle(start.x, start.y, start.dir);

    if (!this.board.inBounds(exit))
      throw new Error("Unable to create GameState: exit out of bounds");
    this.exit = new Exit(exit.x, exit.y);

    this.mines = mines.map((mine: { x: number; y: number }, index: number) => {
      if (!this.board.inBounds(mine))
        throw new Error(
          `Unable to create GameState: mine ${index} out of bounds`
        );
      return new Mine(mine.x, mine.y);
    });

    // Place the exit
    this.board.grid[this.exit.x][this.exit.y] = this.exit;

    // Place the mines
    for (let i = 0; i < this.mines.length; i++) {
      let mine = this.mines[i];
      if (this.board.grid[mine.x][mine.y] !== null) {
        throw new Error(
          `Unable to populate board: Mine collision at ${mine.x}, ${mine.y}`
        );
      }
      this.board.grid[mine.x][mine.y] = mine;
    }

    // Place the Turtle
    if (this.board.inBounds(this.turtle)) {
      // Check if there is an existing item in the grid
      const existingItem = this.board.grid[this.turtle.x][this.turtle.y];

      // Placing the turtle on the grid it's state will be
      //  * InDanger if placed in an empty square
      //  * Success if placed in the Exit
      //  * MineHit if placed in a Mine
      if (existingItem == null) {
        this.turtle.state = TurtleState.InDanger;
      } else if ( existingItem instanceof Mine ) {
        this.turtle.state = TurtleState.MineHit;
      } else if ( existingItem instanceof Exit ) {
        this.turtle.state = TurtleState.Success;
      }
      
      this.board.grid[this.turtle.x][this.turtle.y] = this.turtle;
    } else {
      // Can't place turtle on the grid, set state to OutOfBounds
      this.turtle.state = TurtleState.OutOfBounds;
    }
  }
}
