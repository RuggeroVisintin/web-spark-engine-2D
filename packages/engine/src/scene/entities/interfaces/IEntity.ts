import { IComponent } from "../../components/interfaces";

export interface IEntity {
    readonly id: String;
    
    // addComponent<T extends IComponent>(component: T): void;
    update(): void;
}
