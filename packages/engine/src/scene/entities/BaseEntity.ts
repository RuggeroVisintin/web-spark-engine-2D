import { v4 as uuid } from 'uuid';
import { IEntity } from "./interfaces";

export class BaseEntity implements IEntity {
    readonly id: String;

    constructor() {
        this.id = uuid();
    }
}