import { Vec2 } from "../../core/math";
import {Image} from "../drawables";

export interface IGfxDevice {
    drawImage(drawable: Image, transform?: Partial<Vec2>): void;
}