import { TextureResourceHandle } from "../../resources/texture/TextureResource";
import { BaseComoponent } from "./BaseComoponent";

export class TextureComponent extends BaseComoponent {
    readonly textureHandle: TextureResourceHandle;

    constructor(texturePath: TextureResourceHandle) {
        super();
        
        this.textureHandle = texturePath;
    }
}