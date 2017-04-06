import * as D from "easy-draw/lib/namedAPI"
import {makeRender} from "easy-draw/lib/canvasRenderer"

// D.circle({centre x & y}, radius)
// D.rectangle({topLeft x & y}, {dimensions in x & y})
const graphics = [
    D.circle({x: 120, y: 120}, 100, {
        fillColour: D.rgba(80, 0, 80, 0.5),
        strokeColour: D.rgba(80, 20, 255, 0.8)
    }),
    D.rectangle({x: 90, y:90 }, {x: 15, y: 15}, {
        fillColour: D.rgba(50, 0, 50, 0.5),
        strokeColour: D.rgba(80, 20, 255, 0.8)
    }),
    D.rectangle({x: 80, y:80 }, {x: 15, y: 15}),
    D.rectangle({x: 100, y:100 }, {x: 15, y: 15}),
    D.rectangle({x: 110, y:110 }, {x: 15, y: 15}),
    D.rectangle({x:50, y:50 }, {x: 15, y: 15}),
    D.rectangle({x: 120, y:120 }, {x: 15, y: 15}),
    D.rectangle({x: 70, y:70 }, {x: 15, y: 15}),
    D.rectangle({x: 60, y:60 }, {x: 15, y: 15}),
    D.rectangle({x: 40, y:40 }, {x: 15, y: 15}),
    D.rectangle({x: 130, y:130 }, {x: 15, y: 15}),
    D.rectangle({x: 140, y:140 }, {x: 15, y: 15}),
    D.rectangle({x: 30, y:30 }, {x: 15, y: 15}),
    D.rectangle({x: 150, y:150 }, {x: 15, y: 15}),
];

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const renderToScreen = makeRender(canvas.getContext("2d"), true);
renderToScreen(graphics)