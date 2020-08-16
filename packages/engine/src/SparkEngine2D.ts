import {IGfxDevice} from "./gfx/interfaces";
import {CanvasDevice} from "./gfx";
import {TextureManager} from "./resources/texture/TextureManager";
import {SceneManager} from "./scene";

export class SparkEngine2D {
    private _gfx: IGfxDevice;
    private _textureManager: TextureManager = new TextureManager();
    private _sceneManager: SceneManager;
    private _running: boolean = false;

    constructor(rootEl: Element) {
        this._gfx = new CanvasDevice(rootEl);
        console.log('gfx', this._gfx);
        this._sceneManager = new SceneManager(
            this._textureManager.loadResource('assets/img/gif/maps/light_world_0/diffuse/lightWorld0.gif'));
    }

    run() {
        if (this._running) {
            return;
        }

        this._running = true;
        setTimeout(() => {
            this._run();
        }, 1000 / 60);
    }

    private _run() {
        if(this._sceneManager.environment.loaded) {
            this._gfx.drawImage(this._sceneManager.environment.image);
        }
    }
}