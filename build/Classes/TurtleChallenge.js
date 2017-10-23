"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var TurtleChallenge = /** @class */ (function () {
    function TurtleChallenge(initialState) {
        this.state = initialState;
        this.isHalted = this.state.turtle.state !== _1.TurtleState.InDanger;
        this.appliedActions = 0;
    }
    TurtleChallenge.prototype.tick = function (action) {
        if (this.state.turtle.state !== _1.TurtleState.InDanger)
            return this.state;
        this.appliedActions++;
        var nextState = this.state.applyAction(action);
        this.state = nextState;
        this.isHalted = this.state.turtle.state !== _1.TurtleState.InDanger;
        return nextState;
    };
    TurtleChallenge.prototype.run = function (actions) {
        for (var i = 0; i < actions.actions.length; i++) {
            if (this.state.turtle.state !== _1.TurtleState.InDanger)
                break;
            this.tick(actions.actions[i]);
        }
        this.isHalted = this.state.turtle.state !== _1.TurtleState.InDanger;
        return "Finished in state " + this.state.turtle.state + " after " + this
            .appliedActions + " actions";
    };
    return TurtleChallenge;
}());
exports.TurtleChallenge = TurtleChallenge;
