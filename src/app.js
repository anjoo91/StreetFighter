import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { Stage } from "./entities/Stage.js";
import { FpsCounter } from "./entities/FpsCounter.js";

const GameViewport = {
    //original sf2 was 384 x 224; 4x for 1080p
    WIDTH: 384,
    HEIGHT: 224,
    SCALE: 4,
};

//wait for window to load
window.addEventListener('load', function() {
    const canvasEl = document.querySelector("canvas");
    const context = canvasEl.getContext("2d"); // game is 2d

    //set canvas size to match GameViewport
    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const entities = [
        new Stage(),
        new Ken(80,110,150),
        new Ryu(80,110,-150),
        new FpsCounter(),
    ]

    //calculate time between frames
    let previousTime = 0;
    let secondsPassed = 0;

    function frame(time) {
        window.requestAnimationFrame(frame);

        //calculate proper timing for frames
        //need to do this to manage different refresh rates on monitors
        secondsPassed = (time - previousTime) / 1000;
        previousTime = time;
        
        //iterate through entities array & execute update & draw functions
        for (const entity of entities) {
            entity.update(secondsPassed, context);
        }
        for (const entity of entities) {
            entity.draw(context);
        }
    }

    window.requestAnimationFrame(frame);
});



