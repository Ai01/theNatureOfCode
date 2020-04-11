// 利用 math.random 来做概率模拟
import {timer} from '../utils.js';

const COUNT = 5000;

// 模拟概率
let time = 0;

timer(() => {
  if(Math.random() < 0.1) time += 1;
}, COUNT);

console.log(time/5000);
