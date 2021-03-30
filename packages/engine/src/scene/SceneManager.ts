import {TextureResource} from "../resources/texture/TextureResource";
import { Camera } from "./entities/Camera";
import { IScene, Scene } from "./Scene";

export type InitialConfig = {
    scenes: IScene[];
}

export class SceneManager {
    private _camera: Camera;
    readonly scenes: Scene[];

    constructor(init: InitialConfig) {
        this._camera = new Camera();
        this.scenes = init.scenes.map(scene => new Scene(scene));
    }

    update(): void {
        this._camera.update();
    }

    get camera(): Camera {
        return this._camera;
    }
}