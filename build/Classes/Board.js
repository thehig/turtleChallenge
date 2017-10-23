"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var Board = /** @class */ (function () {
    function Board(width, height) {
        this.width = Math.floor(width);
        this.height = Math.floor(height);
        this.grid = _1.initializeGrid(this.width, this.height);
    }
    Board.prototype.inBounds = function (point) {
        return _1.inBounds(this, point);
    };
    return Board;
}());
exports.Board = Board;
