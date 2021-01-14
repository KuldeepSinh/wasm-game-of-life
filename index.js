import {Universe} from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const univers = Universe.new();
const renderLoop = () => {
    pre.textContent = univers.render();
    univers.tick();

    requestAnimationFrame(renderLoop);
};
requestAnimationFrame(renderLoop);