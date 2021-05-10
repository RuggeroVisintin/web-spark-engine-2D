import { IComponent } from "../../components/interfaces";

export interface IEntity {
    readonly id: String;
    
    // addComponent<T extends IComponent>(component: T): void;
    update(): void;
    addComponent<T extends IComponent>(key: string, component: T): void;
    getComponent<T extends IComponent>(x: string): T | null;
}
