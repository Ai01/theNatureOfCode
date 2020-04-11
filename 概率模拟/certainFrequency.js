// 按照设计给出概率
// 获取范围内的随机整数，然后给出一个符合设计概率的数组，这样获取的数据内容就符合数据的内容分布概率
import {timer, getRandomIntNumber} from '../utils.js';

const a = [1,1,2,4,4];
const TIME = 5000;

// 为1的概率
let CountForOne = 0;

timer(() => {
  if(a[getRandomIntNumber(0, a.length-1)] === 1) CountForOne += 1;
}, TIME);

console.log('模拟结果：', CountForOne/TIME);
console.log('理论结果:', 2/(a.length - 1));
