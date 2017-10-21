import { IPoint } from '../';

export class Mine implements IPoint {
    x: number;
    y: number;
    type = 'mine';

    constructor(x: number, y: number) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
    }
};

