import { IPoint } from './IPoint';
import { Direction } from './Enums'; 

export class Turtle implements IPoint {
    x: Number;
    y: Number;
    dir: Direction;

    constructor(x: Number, y: Number, dir: Direction) {
        this.x = x;
        this.y = y;
        this.dir = dir;
    }
};

