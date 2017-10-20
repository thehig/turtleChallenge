import { expect } from "chai";
import {
  Engine,
  Settings,
  Actions,
  Action,
  Board,
  Turtle,
  Exit,
  Mine,
  Direction
} from "../src/";

const board = new Board(3, 3);
const start = new Turtle(0, 0, Direction.North);
const exit = new Exit(2, 2);
const mines = [new Mine(1, 1)];
const basicSettingsConfig = new Settings(board, start, exit, mines);

const exitActions = new Actions("rmmrmm");

const outOfBoundsActions = [
    new Actions("m"),
    new Actions("rmmm"),
    new Actions("rrmm"),
    new Actions("rrrm")
];

const hitMineActions = [
    new Actions("rmrm"),
    new Actions("rrmrrrm")
];

describe("Engine", () => {
    it('takes settings and actions as parameters', () => {
        var engine;
        expect( () => engine = new Engine(basicSettingsConfig, exitActions) ).not.to.throw();
        expect(engine).to.have.property('settings', basicSettingsConfig);
        expect(engine).to.have.property('actions', exitActions);
    });

    it.only('creates and populates the grid', () => {
        const engine = new Engine(basicSettingsConfig, exitActions);

        expect(engine.grid).length(3);
        expect(engine.grid[0]).length(3);

        expect(engine.grid[0][0]).to.be.instanceOf(Turtle);
        expect(engine.grid[1][1]).to.be.instanceOf(Mine);
        expect(engine.grid[2][2]).to.be.instanceOf(Exit);
    });
});
