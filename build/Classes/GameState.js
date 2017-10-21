"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var GameState = /** @class */ (function () {
    function GameState(board, start, exit, mines) {
        var _this = this;
        if (board.width <= 0)
            throw new Error("Unable to create GameState: invalid width");
        if (board.height <= 0)
            throw new Error("Unable to create GameState: invalid height");
        this.board = new _1.Board(board.width, board.height);
        this.turtle = new _1.Turtle(start.x, start.y, start.dir);
        if (!this.board.inBounds(exit))
            throw new Error("Unable to create GameState: exit out of bounds");
        this.exit = new _1.Exit(exit.x, exit.y);
        this.mines = mines.map(function (mine, index) {
            if (!_this.board.inBounds(mine))
                throw new Error("Unable to create GameState: mine " + index + " out of bounds");
            return new _1.Mine(mine.x, mine.y);
        });
        // Place the exit
        this.board.grid[this.exit.x][this.exit.y] = this.exit;
        // Place the mines
        for (var i = 0; i < this.mines.length; i++) {
            var mine = this.mines[i];
            if (this.board.grid[mine.x][mine.y] !== null) {
                throw new Error("Unable to populate board: Mine collision at " + mine.x + ", " + mine.y);
            }
            this.board.grid[mine.x][mine.y] = mine;
        }
        // Place the Turtle
        if (this.board.inBounds(this.turtle)) {
            // Check if there is an existing item in the grid
            var existingItem = this.board.grid[this.turtle.x][this.turtle.y];
            // Placing the turtle on the grid it's state will be
            //  * InDanger if placed in an empty square
            //  * Success if placed in the Exit
            //  * MineHit if placed in a Mine
            if (existingItem == null) {
                this.turtle.state = _1.TurtleState.InDanger;
            }
            else if (existingItem.type == 'mine') {
                this.turtle.state = _1.TurtleState.MineHit;
            }
            else if (existingItem.type == 'exit') {
                this.turtle.state = _1.TurtleState.Success;
            }
            this.board.grid[this.turtle.x][this.turtle.y] = this.turtle;
        }
        else {
            // Can't place turtle on the grid, set state to OutOfBounds
            this.turtle.state = _1.TurtleState.OutOfBounds;
        }
    }
    GameState.prototype.applyAction = function (action) {
        return new GameState(this.board, this.turtle.act(action), this.exit, this.mines);
    };
    ;
    return GameState;
}());
exports.GameState = GameState;
