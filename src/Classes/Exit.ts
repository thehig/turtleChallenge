import { IPoint } from '../';

export class Exit implements IPoint {
    x: number;
    y: number;
    type = 'exit';

    constructor(x: number, y: number) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
    }
};

