import { IPoint, Direction, TurtleState, Action, applyTurtleAction } from '../';

export class Turtle implements IPoint {
    x: number;
    y: number;
    dir: Direction;
    state: TurtleState;

    constructor(x: number, y: number, dir: Direction, state?: TurtleState) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.dir = dir;
        this.state = state ? state : TurtleState.Initializing;
    }

    act(action: Action): Turtle {
        return applyTurtleAction(this, action);
    }
};

