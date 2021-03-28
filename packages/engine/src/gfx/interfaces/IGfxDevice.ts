import { Vec2 } from "../../core/math";
import {Image} from "../drawables";

export interface IGfxDevice {
    clear(): void;
    drawImage(drawable: Image, transform?: Partial<Vec2>): void;
}