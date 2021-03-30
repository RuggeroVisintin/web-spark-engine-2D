import {TextureResource} from "../resources/texture/TextureResource";
import { Camera } from "./entities/Camera";
import { IScene, Scene } from "./Scene";

export interface SceneManagerProps {
    scenes: IScene[];
    cameraSize: {
        width: number;
        height: number;
    }
}

export class SceneManager {
    private _camera: Camera;
    readonly scenes: Scene[];

    constructor(init: SceneManagerProps) {
        this._camera = new Camera({
            boundaries: {
                x: 2048,
                y: 2048
            },
            size: init.cameraSize
        });
        this.scenes = init.scenes.map(scene => new Scene(scene));
    }

    update(): void {
        this._camera.update();
    }

    get camera(): Camera {
        return this._camera;
    }
}