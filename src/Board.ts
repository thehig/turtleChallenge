export class Board {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = Math.floor(width);
    this.height = Math.floor(height);
  }

  inBounds(point: { x: number; y: number }) {
    return (
      point.x >= 0 &&
      point.x < this.width &&
      point.y >= 0 &&
      point.y < this.height
    );
  }
}
