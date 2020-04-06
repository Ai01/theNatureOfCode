export const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const timer = (fn, time) => {
  if (!time) setInterval(fn);
  for (let i = 0; i < time; i++) {
      fn();
  }
};
