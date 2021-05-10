import { IEntity } from "../entities/interfaces";
import { IComponent } from "./interfaces";

export class BaseComoponent implements IComponent {
    entity: IEntity;
}