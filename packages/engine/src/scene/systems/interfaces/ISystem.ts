export interface ISystem<T> {
    registerComponent(component: T): void;
    update(): void;
}