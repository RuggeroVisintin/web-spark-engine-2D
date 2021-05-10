import { TransformComponent } from "../components";
import { ISystem } from "./interfaces/ISystem";

export class HierarchySystem implements ISystem<TransformComponent>{
    private _components: TransformComponent[] = [];

    registerComponent(component: TransformComponent): void {
        this._components.push(component);
    }

    update() {
        this._components.forEach(transformComponent => {
            transformComponent.children.forEach(child => {
                if (child.freezed) return;

                child.renderingPosition = transformComponent.getPosition().add(child.getPosition());
            });
        })
    }
}   