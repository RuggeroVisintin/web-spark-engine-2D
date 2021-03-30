import { TransformComponent } from "../components";
import { InputComponent } from "../components/InputComponent";
import { BaseEntity } from "./BaseEntity";

export interface CameraInitProps {
    size: {
        width: number;
        height: number;
    };

    boundaries: {
        x: number;
        y: number;
    }
}

const MOVING_SPEED = 5;

export class Camera extends BaseEntity {
    readonly transform: TransformComponent;
    readonly input: InputComponent;

    private __boundaries: {
        x: number;
        y: number;
    };

    readonly width: number;
    readonly height: number;

    constructor(init: CameraInitProps) {
        super();

        this.transform = new TransformComponent();
        this.input = new InputComponent();

        this.__boundaries = init.boundaries;
        this.width = init.size.width;
        this.height = init.size.height;
    }

    update(): void {
        if (this.input.isPressed('KeyW') && this.transform.y - MOVING_SPEED > 0) {
            this.transform.translateY(-MOVING_SPEED);
        }

        if (this.input.isPressed('KeyS') && this.transform.y + MOVING_SPEED < this.__boundaries.y - this.height) {
            this.transform.translateY(MOVING_SPEED);
        }

        if (this.input.isPressed('KeyA') && this.transform.x - MOVING_SPEED > 0) {
            this.transform.translateX(-MOVING_SPEED);
        }

        if (this.input.isPressed('KeyD') && this.transform.x + MOVING_SPEED < this.__boundaries.x - this.width) {
            this.transform.translateX(MOVING_SPEED);
        }
    }
}