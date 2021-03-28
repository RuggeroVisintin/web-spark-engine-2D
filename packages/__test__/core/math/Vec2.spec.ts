import { Vec2 } from "../../../engine/src/core/math";

describe('core', () => {
    describe('math', () => {
        describe('Vec2', () => {
            describe('constructor',  () => {
                it('Should constructo a (0; 0) vec2 instance if no param is passed', () => {
                    const vec2 = new Vec2();
        
                    expect(vec2.x).toEqual(0);
                    expect(vec2.y).toEqual(0);
                });
        
                it('Should initialize a new Vec2 with passed params', () => {
                    let vec2 = new Vec2({x: 10});
        
                    expect(vec2.x).toEqual(10);
                    expect(vec2.y).toEqual(0);
        
                    vec2 = new Vec2({x: 10, y: 10});
        
                    expect(vec2.x).toEqual(10);
                    expect(vec2.y).toEqual(10);
        
                    vec2 = new Vec2({y: 10});
        
                    expect(vec2.x).toEqual(0);
                    expect(vec2.y).toEqual(10);
                });
            });
        
            describe('negate', () => {
                it('Should negate a Vec2', () => {
                    const vec2 = new Vec2({x: 5, y: 10});
        
                    expect(vec2.negate()).toEqual({x: -5, y: -10});
                });
            });
        });
    })
})
