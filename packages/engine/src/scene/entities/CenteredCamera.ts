import { TransformComponent } from "../components";
import { HierarchySystem } from "../systems/HieararchySystem";
import { Camera, CameraInitProps } from "./Camera";
import { IEntity } from "./interfaces";

export interface CenteredCameraInitProps extends CameraInitProps{
    target: IEntity;
}

export class CenteredCamera extends Camera {
    private _target: IEntity;

    constructor(init: CenteredCameraInitProps) {
        super(init);

        init.target.getComponent<TransformComponent>('TransformComponent').addChild(this.transform);
    }
}