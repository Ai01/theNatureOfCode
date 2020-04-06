import {RandomWalker} from '../base/RandomWalker.js';
import { timer } from '../utils.js';

const rw = new RandomWalker(200, 200, 10);

const container = document.getElementsByTagName('body')[0];

const draw = () => {
    const {x,y} = rw.getNextLocation();
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.setAttribute('style',`width:1px;height:1px;background:red;position:absolute;left:${x}px;top:${y}px`);
    fragment.appendChild(div);

    container.appendChild(fragment);
};

timer(draw, 2000);
