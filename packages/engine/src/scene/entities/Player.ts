import { Vec2 } from "../../core/math";
import { TextureResourceHandle } from "../../resources/texture/TextureResource";
import { InputComponent, TextureComponent, TransformComponent } from "../components";
import { BaseEntity } from "./BaseEntity"

export interface PlayerProps {
    texturePath: TextureResourceHandle;
    position?: Vec2;
}

const MOVING_SPEED = 5;

export class Player extends BaseEntity {
    readonly texture: TextureComponent;
    readonly transform: TransformComponent; 
    readonly input: InputComponent;

    constructor(init: PlayerProps) {
        super();

        this.texture = new TextureComponent(init.texturePath);
        this.transform = new TransformComponent(init.position);
        this.input = new InputComponent();
    }

    update(): void {
        if (this.input.isPressed('KeyW') && this.transform.getPosition().y > 0) {
            this.transform.translateY(-MOVING_SPEED);
        }

        if (this.input.isPressed('KeyS')) {
            this.transform.translateY(MOVING_SPEED);
        }

        if (this.input.isPressed('KeyA') && this.transform.getPosition().x > 0) {
            this.transform.translateX(-MOVING_SPEED);
        }

        if (this.input.isPressed('KeyD')) {
            this.transform.translateX(MOVING_SPEED);
        }
    }
}