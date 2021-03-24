import { Vec2 } from "../../core/math";

type This = TransformComponent;

export class TransformComponent {
    private _transform: Vec2;

    constructor(transform?: Partial<Vec2>) {
        this._transform = new Vec2(transform);
    }

    translate(transform: Partial<Vec2>): This {
        transform.x && this.translateX(transform.x);
        transform.y && this.translateY(transform.y);

        return this;
    }

    translateX(x: number): This {
        this.x += x;
        return this;
    }

    translateY(y: number): This {
        this.y += y;
        return this;
    }

    toVec2(): Vec2 {
        return this._transform;
    }

    set x(value: number) {
        this._transform.x = value;
    }

    get x(): number {
        return this._transform.x;
    }

    set y(value: number) {
        this._transform.y = value;
    }

    get y(): number {
        return this._transform.y;
    }
}