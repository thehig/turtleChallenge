import { IPoint } from './IPoint';
import { Direction } from './Enums'; 

export class Turtle implements IPoint {
    x: number;
    y: number;
    dir: Direction;

    constructor(x: number, y: number, dir: Direction) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.dir = dir;
    }
};

