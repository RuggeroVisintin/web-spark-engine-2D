import { v4 as uuid } from 'uuid';
import { IEntity } from "./interfaces";

export class BaseEntity implements IEntity {
    readonly id: String;

    private __children: IEntity[];

    constructor() {
        this.id = uuid();
    }

    update(): void {};

    addChild(): void {
        this.__children.push();
    }

    get children(): IEntity[] {
        return this.__children;
    }
}