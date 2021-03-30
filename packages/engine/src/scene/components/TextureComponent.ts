import { TextureResourceHandle } from "../../resources/texture/TextureResource";

export class TextureComponent {
    readonly textureHandle: TextureResourceHandle;

    constructor(texturePath: TextureResourceHandle) {
        this.textureHandle = texturePath;
    }
}