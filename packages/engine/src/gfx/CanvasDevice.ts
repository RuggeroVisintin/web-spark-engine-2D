import {IGfxDevice} from "./interfaces";
import {Image} from "./drawables";
import { Vec2 } from "../core/math";

export interface CanvasDeviceProps {
    width?: number;
    height?: number;
}

export class CanvasDevice implements IGfxDevice {
    private _context: CanvasRenderingContext2D;
    private readonly _renderingCanvas: HTMLCanvasElement;


    constructor(rootEl: Element, config?: CanvasDeviceProps) {
        this._renderingCanvas = document.createElement('canvas');
        this._renderingCanvas.height = config?.height || 1080;
        this._renderingCanvas.width = config?.width || 1920;

        this._context = <CanvasRenderingContext2D>this._renderingCanvas.getContext('2d');
        rootEl.appendChild(this._renderingCanvas);
    }

    drawImage(drawable: Image, offset?: Partial<Vec2>): void {
        this._context.drawImage(
            drawable,
            offset?.x || 0,
            offset?.y || 0);
    }
}