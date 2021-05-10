import { Vec2 } from "../core/math";
import {TextureResource, TextureResourceHandle} from "../resources/texture/TextureResource";
import { Camera } from "./entities/Camera";
import { CenteredCamera } from "./entities/CenteredCamera";
import { Player } from "./entities/Player";
import { IScene, Scene } from "./Scene";
import { HierarchySystem } from "./systems/HieararchySystem";

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

    private _hieararchy: HierarchySystem;

    constructor(init: SceneManagerProps) {
        this._hieararchy = new HierarchySystem();

        this.__player = new Player({
            texturePath: init.player.texturePath,
            position: new Vec2({x: 0, y: 0})
        });
        
        this.__camera = new CenteredCamera({
            size: init.cameraSize,
            target: this.__player
        });
        
        this.scenes = init.scenes.map(scene => new Scene(scene));

        this._hieararchy.registerComponent(this.__camera.transform);
        this._hieararchy.registerComponent(this.__player.transform);
    }

    update(): void {
        this._hieararchy.update();

        this.__player.update();
        this.__camera.update();

        // this.__player.transform.renderingPosition.x += this.__camera.width / 2;
        // this.__player.transform.renderingPosition.y += this.__camera.height / 2;
    }

    get camera(): Camera {
        return this.__camera;
    }

    get player(): Player {
        return this.__player;
    }
}