// 获取范围内的随机数
export const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

// 获取范围内的随机整数
export const getRandomIntNumber = (min, max) => Math.floor(getRandomNumber(min, max));


const PASSIVE_DIRECTION = '+';
const NEGATIVE_DIRECTION = '-';

// 获取随机方向
export const getRandomDirection = () => {
  return Math.random() > 0.5 ? PASSIVE_DIRECTION : NEGATIVE_DIRECTION;
}

// 根据概率获取方向，接受正方向的概率，返回方向
export const getDirectionWithProb = (PassiveProb) => {
 return Math.random() < PassiveProb ? PASSIVE_DIRECTION : NEGATIVE_DIRECTION;
}

// 改变方向
export const changeDirection = (num, direction) => {
  if(typeof num !== "number") return null;
  if(direction === PASSIVE_DIRECTION) return Math.abs(num);
  if(direction === NEGATIVE_DIRECTION) return -num;
  return null;
}

// 多次执行
export const timer = (fn, time) => {
  if (!time) setInterval(fn);
  for (let i = 0; i < time; i++) {
      fn(i);
  }
};
