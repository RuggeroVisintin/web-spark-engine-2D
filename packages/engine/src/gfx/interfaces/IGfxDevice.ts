import {IDrawable} from "./IDrawable";

export interface IGfxDevice {
    draw(drawable: IDrawable): void;
}