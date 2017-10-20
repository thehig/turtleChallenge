import { Settings, Actions, IPoint, Turtle, Exit, Mine } from '../';

export class Engine {
    settings: Settings;
    actions: Actions;

    grid: IPoint[][];

    constructor(settings: Settings, actions: Actions) {
        this.settings = settings;
        this.actions = actions;

        this.initializeGrid();
        this.populateEntities();
    };

    initializeGrid() {
        // Create a grid containing POJOs with {x, y}
        this.grid = [];
        for(let i = 0; i < this.settings.board.height; i++) {
            this.grid[i] = [];
            for(let j = 0; j < this.settings.board.width; j++) {
                this.grid[i][j] = { x: j, y: i };
            }
        }
    };

    populateEntities() {
        // todo: Add pre-placement checking and appropriate errors
        this.settings.mines.map((mine) => this.placeOnGrid(mine));
        this.placeOnGrid(this.settings.exit);
        this.placeOnGrid(this.settings.turtle);
    };

    placeOnGrid(item: IPoint) {
        const existingItem = this.grid[item.x][item.y];
        console.log(existingItem);
        console.log(item);

        if(item instanceof Turtle) {
            console.log('placing turtle');

            // if(existingItem instanceof Exit) {
            //     console.log('success');
            // } else if(existingItem instanceof Mine) {
            //     console.log('boom');
            // } else {
            //     console.log('empty');
            // }
        }

        this.grid[item.x][item.y] = item;
    }
};