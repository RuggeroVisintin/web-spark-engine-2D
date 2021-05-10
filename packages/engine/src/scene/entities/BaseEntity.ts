import { v4 as uuid } from 'uuid';
import { IComponent } from '../components/interfaces';
import { IEntity } from "./interfaces";

export class BaseEntity implements IEntity {
    readonly id: String;
    protected _components: {[key: string]: IComponent};
    
    constructor() {
        this.id = uuid();
        this._components = {};
    }

    addComponent<T extends IComponent>(key: string, component: T): void {
        // if (!this._components[typeof component]) {
        //     this._components[typeof component] = [];
        // }

        this._components[key] = component;
        component.entity = this;
    }

    getComponent<T extends IComponent>(key: string): T | null {
        console.log("this.components", this._components)
        return this._components[key] as T || null;
    }

    update(): void {};

   
}