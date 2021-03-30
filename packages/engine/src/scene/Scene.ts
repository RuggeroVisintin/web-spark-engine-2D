import { TextureResourceHandle } from "../resources/texture/TextureResource";

export interface IScene {
    environment: TextureResourceHandle;
}

export class Scene {
    readonly environment: TextureResourceHandle;

    constructor(init: IScene) {
        this.environment = init.environment;
    }
}