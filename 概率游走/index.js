import { RandomWalkerWithProb } from "./base/RandomWalker.js";
import { timer } from "../utils.js";

const START_X = 200;
const START_Y = 200;
const MAX_STEP_DISTANCE = 1;
const COUNT = 5000;
const X_RIGHT_PROB = 0.5;
const Y_DOWN_PROB = 0.55;

const rw = new RandomWalkerWithProb(START_X, START_Y, MAX_STEP_DISTANCE, X_RIGHT_PROB, Y_DOWN_PROB);

const container = document.getElementsByTagName("body")[0];

const draw = (time) => {
  const fragment = document.createDocumentFragment();

  timer((index) => {
    const { x, y } = rw.getNextLocation();
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      `width:1px;height:1px;background:red;position:absolute;left:${x}px;top:${y}px`
    );
    if(index === 1) {
      div.innerHTML = 'start';
      div.setAttribute(
        "style",
        `width:10px;height:10px;background:red;position:absolute;left:${x}px;top:${y}px`
      );
    }
    fragment.appendChild(div);
  }, time);

  // 减少操作dom的次数
  container.appendChild(fragment);
};

draw(COUNT);
