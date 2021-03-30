export interface IEntity {
    readonly id: String;
    children: IEntity[];

    update(): void;
    addChild(): void;
}