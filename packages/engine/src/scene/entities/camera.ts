import { TransformComponent } from "../components";
import { InputComponent } from "../components/InputComponent";
import { BaseEntity } from "./BaseEntity";

export class Camera extends BaseEntity {
    readonly transform: TransformComponent;
    readonly input: InputComponent;

    constructor() {
        super();

        this.transform = new TransformComponent();
        this.input = new InputComponent();
    }

    update(): void {
        if (this.input.isPressed('KeyW')) {
            this.transform.translateY(-1);
        }

        if (this.input.isPressed('KeyS')) {
            this.transform.translateY(1);
        }

        if (this.input.isPressed('KeyA')) {
            this.transform.translateX(-1);
        }

        if (this.input.isPressed('KeyD')) {
            this.transform.translateX(1);
        }
    }
}