export const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const PASSIVE_DIRECTION = '+';
const NEGATIVE_DIRECTION = '-';

export const getRandomDirection = () => {
  return Math.random() > 0.5 ? PASSIVE_DIRECTION : NEGATIVE_DIRECTION;
}

export const changeDirection = (num, direction) => {
  if(typeof num !== "number") return null;
  if(direction === PASSIVE_DIRECTION) return Math.abs(num);
  if(direction === NEGATIVE_DIRECTION) return -num;
  return null;
}

export const timer = (fn, time) => {
  if (!time) setInterval(fn);
  for (let i = 0; i < time; i++) {
      fn();
  }
};
