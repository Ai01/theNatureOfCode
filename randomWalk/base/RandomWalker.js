import { getRandomNumber, getRandomDirection, changeDirection } from "../../utils.js";

// 随机游走
export class RandomWalker {
  constructor(x, y, step) {
    this.x = x;
    this.y = y;
    this.step = step;
  }

  getNextLocation() {
    // 随机方向
    const xDirection = getRandomDirection();
    const yDirection = getRandomDirection();

    // 随机距离
    this.x = this.x + changeDirection(getRandomNumber(0, this.step), xDirection) ;
    this.y = this.y + changeDirection(getRandomNumber(0, this.step), yDirection);

    return { x: this.x, y: this.y };
  }
}
