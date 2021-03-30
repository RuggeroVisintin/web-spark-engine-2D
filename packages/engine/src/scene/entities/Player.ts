import { TextureResourceHandle } from "../../resources/texture/TextureResource";
import { TextureComponent, TransformComponent } from "../components";
import { BaseEntity } from "./BaseEntity"

export interface PlayerProps {
    texturePath: TextureResourceHandle;
}

export class Player extends BaseEntity {
    readonly texture: TextureComponent;
    readonly transform: TransformComponent; 

    constructor(init: PlayerProps) {
        super();

        this.texture = new TextureComponent(init.texturePath);
        this.transform = new TransformComponent();
    }
}