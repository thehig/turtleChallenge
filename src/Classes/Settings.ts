import { Board, Turtle, Exit, Mine, Direction } from '../';

export class Settings {
    board: Board;
    turtle: Turtle;
    exit: Exit;
    mines: Array<Mine>;

    constructor(board: {width: number, height: number}, start: {x: number, y: number, dir: Direction}, exit: {x: number, y: number}, mines: Array<{x: number, y: number}>) {
        if(board.width <= 0) throw new Error('Unable to create Settings: invalid width');
        if(board.height <= 0) throw new Error('Unable to create Settings: invalid height');
        this.board = new Board(board.width, board.height);

        if(!this.board.inBounds(start)) throw new Error('Unable to create Settings: start out of bounds');
        this.turtle = new Turtle(start.x, start.y, start.dir);

        if(!this.board.inBounds(exit)) throw new Error('Unable to create Settings: exit out of bounds');        
        this.exit = new Exit(exit.x, exit.y);

        this.mines = mines.map((mine: {x: number, y: number}, index: number) => {
            if(!this.board.inBounds(mine)) throw new Error(`Unable to create Settings: mine ${index} out of bounds`);                    
            return new Mine(mine.x, mine.y)
        });
    } 
};