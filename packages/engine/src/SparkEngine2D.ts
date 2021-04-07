import { IGfxDevice } from "./gfx/interfaces";
import { CanvasDevice, CanvasDeviceProps } from "./gfx";
import { TextureManager } from "./resources/texture/TextureManager";
import { SceneManager, SceneManagerProps } from "./scene";
import { HierarchySystem } from "./scene/systems/HieararchySystem";
import { Vec2 } from "./core/math";

export interface SparkEngine2DProps {
    sceneConfig: SceneManagerProps;
}

export class SparkEngine2D {
    private _gfx: IGfxDevice;
    private _textureManager: TextureManager = new TextureManager();
    private _sceneManager: SceneManager;
    private _running: boolean = false;

    constructor(rootEl: Element, config: SparkEngine2DProps) {
        this._gfx = new CanvasDevice(rootEl, config.sceneConfig.cameraSize);
        this._sceneManager = new SceneManager(config.sceneConfig);
    }

    run() {
        if (this._running) {
            return;
        }

        this._running = true;

        setInterval(() => {
            this._run();
        }, 33);
    }

    private _run() {
        this._sceneManager.update();

        this._gfx.clear();
        this._gfx.drawImage(
            this._textureManager.loadResource(this._sceneManager.scenes[0].environment).image,
            this._sceneManager.camera.transform.renderingPosition.negate()
        );

        const renderingPos = new Vec2({
            x: this._sceneManager.player.transform.renderingPosition.x,
            y: this._sceneManager.player.transform.renderingPosition.y
        })

        this._gfx.drawImage(
            this._textureManager.loadResource(this._sceneManager.player.texture.textureHandle).image,
            renderingPos
        )
    }
}