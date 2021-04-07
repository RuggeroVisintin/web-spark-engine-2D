type This = Vec2;
type NewThis = Vec2;

export class Vec2 {
    x: number;
    y: number;
    
    constructor(init?: Partial<This>) {
        this.x = init?.x || 0;
        this.y = init?.y || 0;
    }

    negate(): NewThis {
        return new Vec2({
            x: this.x * -1,
            y: this.y * -1
        });
    }

    add(other: Vec2): NewThis {
        return new Vec2({x: this.x + other.x, y: this.y + other.y});
    }
}