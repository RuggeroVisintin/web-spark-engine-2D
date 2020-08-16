import {TextureResource} from "../resources/texture/TextureResource";

export class SceneManager {
    private _environment: TextureResource;

    constructor(
        environment?: TextureResource
    ) {
        if(environment) {
           this.environment = environment;
        }
    }

    set environment(value: TextureResource) {
        this._environment = value;
    }

    get environment(): TextureResource {
        return this._environment;
    }
}