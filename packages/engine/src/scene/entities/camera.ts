import { TransformComponent } from "../components";
import { BaseEntity } from "./BaseEntity";

export class Camera extends BaseEntity {
    readonly transform: TransformComponent;

    constructor() {
        super();
        this.transform = new TransformComponent();
    }
}