import { TransformComponent } from "../components";
import { BaseEntity } from "./BaseEntity";

export class Camera extends BaseEntity {
    readonly transform: TransformComponent;

    constructor() {
        super();

        this.transform = new TransformComponent();
        this.__userInputs();
    }

    private __userInputs() {
        window.addEventListener('keypress', (event) => {
            switch (event.code) {
                case 'KeyW':
                    this.transform.translateY(-1);
                    break;
                case 'KeyS':
                    this.transform.translateY(1);
                    break;
                case 'KeyA':
                    this.transform.translateX(-1);
                    break;
                case 'KeyD':
                    this.transform.translateX(1);
                    break;
            }

        })
    }
}