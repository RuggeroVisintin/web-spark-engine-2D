import { Vec2 } from "../../core/math";

type This = TransformComponent;

export class TransformComponent {
    private _position: Vec2;
    private _scale: Vec2;

    private _children: TransformComponent[];
    private _renderingPosition: Vec2;

    constructor(transform?: Partial<Vec2>) {
        this._position = new Vec2(transform);
        this.renderingPosition = new Vec2(transform);
        this._children = [];
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