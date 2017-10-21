"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var Turtle = /** @class */ (function () {
    function Turtle(x, y, dir, state) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.dir = dir || _1.Direction.North;
        this.state = state ? state : _1.TurtleState.Initializing;
    }
    Turtle.prototype.act = function (action) {
        return _1.applyTurtleAction(this, action);
    };
    return Turtle;
}());
exports.Turtle = Turtle;
;
