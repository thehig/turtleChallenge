import { IPoint } from './';

export class Mine implements IPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
    }
};

