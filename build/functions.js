"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
/**
 * Apply the given action to the given turtle
 * @param turtle
 * @param action
 * @returns A new turtle with the applied action
 * @throws If a this action could not be applied to this turtle
 */
exports.applyTurtleAction = function (turtle, action) {
    if (action == _1.Action.Rotate) {
        switch (turtle.dir) {
            case _1.Direction.North:
                return new _1.Turtle(turtle.x, turtle.y, _1.Direction.East, turtle.state);
            case _1.Direction.East:
                return new _1.Turtle(turtle.x, turtle.y, _1.Direction.South, turtle.state);
            case _1.Direction.South:
                return new _1.Turtle(turtle.x, turtle.y, _1.Direction.West, turtle.state);
            case _1.Direction.West:
                return new _1.Turtle(turtle.x, turtle.y, _1.Direction.North, turtle.state);
            default:
                throw new Error("Unknown Turtle Rotate direction: " + turtle.dir);
        }
    }
    else if (action == _1.Action.Move) {
        switch (turtle.dir) {
            case _1.Direction.North:
                return new _1.Turtle(turtle.x, turtle.y - 1, turtle.dir, turtle.state);
            case _1.Direction.East:
                return new _1.Turtle(turtle.x + 1, turtle.y, turtle.dir, turtle.state);
            case _1.Direction.South:
                return new _1.Turtle(turtle.x, turtle.y + 1, turtle.dir, turtle.state);
            case _1.Direction.West:
                return new _1.Turtle(turtle.x - 1, turtle.y, turtle.dir, turtle.state);
            default:
                throw new Error("Unknown Turtle Move direction: " + turtle.dir);
        }
    }
    else {
        throw new Error("Unknown Turtle action: " + action);
    }
};
/**
 * Given a board of a Width and Height
 * @param board
 * @param point
 * @returns true if point is inside the bounds of the board
 * @returns false if the pointis outside the bounds of the board
 */
exports.inBounds = function (board, point) {
    return (point.x >= 0 &&
        point.x < board.width &&
        point.y >= 0 &&
        point.y < board.height);
};
exports.initializeGrid = function (width, height) {
    var grid = [];
    // Create a grid of appropriate size containing nulls
    for (var i = 0; i < height; i++) {
        grid[i] = [];
        for (var j = 0; j < width; j++) {
            grid[i][j] = null;
        }
    }
    return grid;
};
