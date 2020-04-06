import { getRandomNumber } from '../utils.js';

export class RandomWalker {
    constructor(x, y, step) {
        this.x = x;
        this.y = y;
        this.step = step;
    }

    getNextLocation() {
        this.x = this.x + getRandomNumber(-this.step, this.step);
        this.y = this.y + getRandomNumber(-this.step, this.step);

        return {x: this.x, y: this.y}
    }
}


