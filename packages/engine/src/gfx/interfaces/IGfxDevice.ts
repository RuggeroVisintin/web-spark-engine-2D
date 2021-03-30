import { Vec2 } from "../../core/math";
import {Image} from "../drawables";

export interface IGfxDevice {
    width: number;
    height: number;

    clear(): void;
    drawImage(drawable: Image, transform?: Partial<Vec2>): void;
}