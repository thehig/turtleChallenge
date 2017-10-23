"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exit = /** @class */ (function () {
    function Exit(x, y) {
        this.type = 'exit';
        this.x = Math.floor(x);
        this.y = Math.floor(y);
    }
    return Exit;
}());
exports.Exit = Exit;
;
