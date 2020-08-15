import {IDrawable, IGfxDevice} from "./interfaces";
import {Core} from "../core";

export class CanvasDevice implements IGfxDevice {
    draw(drawable: IDrawable): void {
        throw new Core.Errors.NotImplementedError('CanvasDevice.draw');
    }

}