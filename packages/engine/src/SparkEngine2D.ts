import { IGfxDevice } from "./gfx/interfaces";
import { CanvasDevice, CanvasDeviceProps } from "./gfx";
import { TextureManager } from "./resources/texture/TextureManager";
import { SceneManager } from "./scene";

export interface SparkEngine2DProps {
    environmentPath: string;
    renderingConfig?: CanvasDeviceProps;
}

export class SparkEngine2D {
    private _gfx: IGfxDevice;
    private _textureManager: TextureManager = new TextureManager();
    private _sceneManager: SceneManager;
    private _running: boolean = false;

    constructor(rootEl: Element, config: SparkEngine2DProps) {
        this._gfx = new CanvasDevice(rootEl, config.renderingConfig);
        this._sceneManager = new SceneManager({
            scenes: [{
                environment: config.environmentPath
            }]
        });
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
            this._sceneManager.camera.transform.toVec2().negate()
        );
    }
}