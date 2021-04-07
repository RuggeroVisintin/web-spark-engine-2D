import { v4 as uuid } from 'uuid';
import { IComponent } from '../components/interfaces';
import { IEntity } from "./interfaces";

export class BaseEntity implements IEntity {
    readonly id: String;
    protected _components: {[key: string]: IComponent[]};
    
    constructor() {
        this.id = uuid();
    }

    // addComponent<T extends IComponent>(component: T): void {
    //     if (!this._components[typeof component]) {
    //         this._components[typeof component] = [];
    //     }

    //     this._components[typeof component].push(component);
    // }

    update(): void {};
}