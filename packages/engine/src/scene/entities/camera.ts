import { TransformComponent } from "../components";
import { InputComponent } from "../components/InputComponent";
import { BaseEntity } from "./BaseEntity";

export interface CameraInitProps {
    size: {
        width: number;
        height: number;
    };
}

const MOVING_SPEED = 5;

export class Camera extends BaseEntity {
    readonly transform: TransformComponent;
    readonly input: InputComponent;

    readonly width: number;
    readonly height: number;

    constructor(init: CameraInitProps) {
        super();

        this.transform = new TransformComponent();
        this.input = new InputComponent();

        this.addComponent<TransformComponent>('TransformComponent', this.transform);
        this.addComponent<InputComponent>('InputComponent', this.input);

        this.width = init.size.width;
        this.height = init.size.height;
    }
}