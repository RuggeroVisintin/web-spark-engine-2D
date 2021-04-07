import { IEntity } from "../../entities/interfaces";

export interface IComponent {
    readonly entity: IEntity;
}