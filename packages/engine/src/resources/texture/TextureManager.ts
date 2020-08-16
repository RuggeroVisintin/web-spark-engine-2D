import {IResourceManager} from "../interfaces";
import {TextureResource, TextureResourceHandle} from "./TextureResource";
import {NotImplementedError} from "../../core/errors";
import {Image} from "../../gfx/drawables";

export class TextureManager implements IResourceManager {
    private _resourceMap: Map<TextureResourceHandle, TextureResource> = new Map();

    loadResource(path: string): TextureResource {
        if(this._resourceMap.has(path)) {
            return this._resourceMap.get(path);
        }

        const result = this._loadImage(path)
        console.log('loadResource', result);

        return result;
    }

    freeResource(path: string): void {
        throw new NotImplementedError('TextureManager.freeResource');
    }

    private _loadImage(path: string): TextureResource {
        const image = new Image();

        image.onload = () => {
            this._resourceMap.get(path).loaded = true;
        };

        image.onerror = (err) => {
            throw err;
        };

        image.src = path;

        const textureResource = new TextureResource(path, image);
        this._resourceMap.set(textureResource.key, textureResource);
        return textureResource;
    }
}