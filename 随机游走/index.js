import { RandomWalker } from "./base/RandomWalker.js";
import { timer } from "../utils.js";

const START_X = 200;
const START_Y = 200;
const MAX_STEP_DISTANCE = 4;
const COUNT = 5000;

const rw = new RandomWalker(START_X, START_Y, MAX_STEP_DISTANCE);

const container = document.getElementsByTagName("body")[0];

const draw = (time) => {
  const fragment = document.createDocumentFragment();

  timer(() => {
    const { x, y } = rw.getNextLocation();
    console.log(x, y);
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      `width:1px;height:1px;background:red;position:absolute;left:${x}px;top:${y}px`
    );
    fragment.appendChild(div);
  }, time);

  // 减少操作dom的次数
  container.appendChild(fragment);
};

draw(COUNT);
