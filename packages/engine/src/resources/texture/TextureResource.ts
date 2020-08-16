import {IResource} from "../interfaces";
import {Image} from "../../gfx/drawables";

export type TextureResourceHandle = string;

export class TextureResource implements IResource {
    public readonly key: TextureResourceHandle;
    public readonly image: Image;
    public loaded: boolean;

    constructor(path: string, image: Image) {
        this.key = path;
        this.image = image;
    }
}