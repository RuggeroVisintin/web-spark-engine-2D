import { Vec2 } from "../../core/math";
import { BaseComoponent } from "./BaseComoponent";

type This = TransformComponent;

export class TransformComponent extends BaseComoponent {
    private _position: Vec2;
    private _scale: Vec2;

    private _children: TransformComponent[];
    private _renderingPosition: Vec2;

    private _freezed: boolean;

    constructor(transform?: Partial<Vec2>) {
        super();

        this._position = new Vec2(transform);
        this.renderingPosition = new Vec2(transform);
        this._children = [];
        this._freezed = false;
    }

    translate(transform: Partial<Vec2>): This {
        transform.x && this.translateX(transform.x);
        transform.y && this.translateY(transform.y);

        return this;
    }

    translateX(x: number): This {
        this._position.x += x;
        return this;
    }

    translateY(y: number): This {
        this._position.y += y;
        return this;
    }

    addChild(child: TransformComponent) {
        this._children.push(child);
    }

    getPosition(): Vec2 {
        return this._position;
    }

    set freezed(value: boolean) {
        this._freezed = value;
    }

    get freezed(): boolean {
        return this._freezed;
    }

    set scale(scale: Vec2) {
        this._scale = scale;
    }

    get scale(): Vec2 {
        return this._scale;
    }

    set renderingPosition(renderingPosition: Vec2) {
        this._renderingPosition = renderingPosition;
    }

    get renderingPosition(): Vec2 {
        return this._renderingPosition;
    }

    get children(): TransformComponent[] {
        return this._children;
    }
}