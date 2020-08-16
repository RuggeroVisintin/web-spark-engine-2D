import {Image} from "../drawables";

export interface IGfxDevice {
    drawImage(drawable: Image): void;
}