import {TextureResource} from "../resources/texture/TextureResource";
import { Camera } from "./entities/Camera";

export class SceneManager {
    private _environment: TextureResource;
    private _camera: Camera;

    constructor(
        environment?: TextureResource
    ) {
        if(environment) {
           this.environment = environment;
        }

        this._camera = new Camera();
    }

    update(): void {
        this._camera.update();
    }

    set environment(value: TextureResource) {
        this._environment = value;
    }

    get environment(): TextureResource {
        return this._environment;
    }

    get camera(): Camera {
        return this._camera;
    }
}