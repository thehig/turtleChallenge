import { IPoint, Direction, TurtleState, Action } from '../';

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

    act(action: Action) {
        if(action == Action.Rotate) {
            switch(this.dir){
                case Direction.North: return new Turtle(this.x, this.y, Direction.East, this.state);
                case Direction.East: return new Turtle(this.x, this.y, Direction.South, this.state);
                case Direction.South: return new Turtle(this.x, this.y, Direction.West, this.state);
                case Direction.West: return new Turtle(this.x, this.y, Direction.North, this.state);
                default: throw new Error(`Unknown Turtle Rotate direction: ${this.dir}`);
            }
        } else if (action == Action.Move) {
            switch(this.dir){
                case Direction.North: return new Turtle(this.x, this.y - 1, this.dir, this.state);
                case Direction.East: return new Turtle(this.x + 1, this.y, this.dir, this.state);
                case Direction.South: return new Turtle(this.x, this.y + 1, this.dir, this.state);
                case Direction.West: return new Turtle(this.x - 1, this.y, this.dir, this.state);
                default: throw new Error(`Unknown Turtle Move direction: ${this.dir}`);
            }
        } else {
            throw new Error(`Unknown Turtle action: ${action}`);
        }
    }
};

