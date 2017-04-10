import * as D from "easy-draw/lib/namedAPI"
import {makeRender} from "easy-draw/lib/canvasRenderer"

const graphics = [
    D.circle({
        centre_px: {
            x: 120,
            y: 120
        },
        radius_px: 100,
        style: {
            fillRGBA: D.rgba(80, 0, 80, 0.5),
            strokeRGBA: D.rgba(80, 20, 255, 0.8)
        }
    }),
    D.rectangle({
        topLeft_px: {
            x: 90,
            y: 90
        },
        dimensions_px: {
            x: 15,
            y: 15
        },
        style: {
            fillRGBA: D.rgba(50, 0, 50, 0.792),
            strokeRGBA: D.rgba(80, 20, 255, 0.8)
        }
    })
];

const canvas = document.getElementById("canvas")as HTMLCanvasElement;
const renderToScreen = makeRender(canvas.getContext("2d"), true);
renderToScreen(graphics)