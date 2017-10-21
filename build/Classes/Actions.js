"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../");
var Actions = /** @class */ (function () {
    function Actions(actions) {
        if (!actions || actions.length <= 0)
            throw new Error("Unable to create Actions: invalid empty parameter");
        this.actions = actions.split('').map(function (char, index) {
            switch (char.toLowerCase()) {
                case 'm': return _1.Action.Move;
                case 'r': return _1.Action.Rotate;
                default: throw new Error("Unable to create Actions: invalid action code \"" + char + "\" at location " + index);
            }
        });
    }
    return Actions;
}());
exports.Actions = Actions;
