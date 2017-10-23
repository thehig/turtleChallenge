import { IPoint, inBounds, initializeGrid } from '../';

export class Board {
  width: number;
  height: number;

  grid: IPoint[][];

  constructor(width: number, height: number) {
    this.width = Math.floor(width);
    this.height = Math.floor(height);

    this.grid = initializeGrid(this.width, this.height);
  }

  inBounds(point: IPoint): Boolean {
    return inBounds(this, point);
  }
}
