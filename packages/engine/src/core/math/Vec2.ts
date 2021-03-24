type This = Vec2;

export class Vec2 {
    x: number;
    y: number;
    
    constructor(init?: Partial<This>) {
        this.x = init?.x || 0;
        this.y = init?.y || 0;
    }

    inverse(): This {
        return new Vec2({
            x: this.x * -1,
            y: this.y * -1
        });
    }
}