import {IGfxDevice} from "./interfaces";
import * as Core from "../core";
import {Image} from "./drawables";

export class CanvasDevice implements IGfxDevice {
    private _context: CanvasRenderingContext2D;
    private readonly _renderingCanvas: HTMLCanvasElement;


    constructor(rootEl: Element) {
        this._renderingCanvas = document.createElement('canvas');
        this._renderingCanvas.height = 1080;
        this._renderingCanvas.width = 1920;

        this._context = <CanvasRenderingContext2D>this._renderingCanvas.getContext('2d');

        console.log('Context', this._renderingCanvas.getContext('2d'));

        rootEl.appendChild(this._renderingCanvas);
    }

    drawImage(drawable: Image): void {
        this._context.drawImage(drawable, 0, 0);
        throw new Core.Errors.NotImplementedError('CanvasDevice.draw');
    }
}