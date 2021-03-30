import {TextureResource, TextureResourceHandle} from "../resources/texture/TextureResource";
import { Camera } from "./entities/Camera";
import { Player } from "./entities/Player";
import { IScene, Scene } from "./Scene";

export interface SceneManagerProps {
    scenes: IScene[];
    cameraSize: {
        width: number;
        height: number;
    };
    player: {
        texturePath: TextureResourceHandle;
    }
}

export class SceneManager {
    readonly scenes: Scene[];

    private __player: Player;
    private __camera: Camera;

    constructor(init: SceneManagerProps) {
        this.__player = new Player({
            texturePath: init.player.texturePath
        });

        this.__camera = new Camera({
            boundaries: {
                x: 2048,
                y: 2048
            },
            size: init.cameraSize
        });
        this.scenes = init.scenes.map(scene => new Scene(scene));
    }

    update(): void {
        this.__player.update();
        this.__camera.update();
    }

    get camera(): Camera {
        return this.__camera;
    }

    get player(): Player {
        return this.__player;
    }
}