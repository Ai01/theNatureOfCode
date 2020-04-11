import { getRandomNumber, getDirectionWithProb, changeDirection } from "../../utils.js";

// 随机游走
export class RandomWalkerWithProb {
  constructor(x, y, step, xRightProb, yTopProb) {
    this.x = x;
    this.y = y;
    this.step = step;
    this.xRightProb = xRightProb;
    this.yTopProb = yTopProb;
  }

  getNextLocation() {
    // 随机方向
    const xDirection = getDirectionWithProb(this.xRightProb);
    const yDirection = getDirectionWithProb(this.yTopProb);

    // 随机距离
    this.x = this.x + changeDirection(getRandomNumber(0, this.step), xDirection) ;
    this.y = this.y + changeDirection(getRandomNumber(0, this.step), yDirection);

    return { x: this.x, y: this.y };
  }
}
