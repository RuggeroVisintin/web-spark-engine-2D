import { Camera } from "../../../engine/src/scene/entities/Camera";
import { triggerEvent } from "../../__mocks__/window";

describe('scene', () => {
    describe('entities', () => {
        describe('Camera', () => {
            describe('__userInputs', () => {
                it('Should react to user input', () => {
                    const camera = new Camera();

                    triggerEvent('keypress', new KeyboardEvent('keypress', {
                        code: 'KeyW'
                    }));
                    expect(camera.transform.y).toEqual(-1);

                    triggerEvent('keypress', new KeyboardEvent('keypress', {
                        code: 'KeyS'
                    }));
                    expect(camera.transform.y).toEqual(0);

                    triggerEvent('keypress', new KeyboardEvent('keypress', {
                        code: 'KeyA'
                    }));
                    expect(camera.transform.x).toEqual(-1);

                    triggerEvent('keypress', new KeyboardEvent('keypress', {
                        code: 'KeyD'
                    }));
                    expect(camera.transform.x).toEqual(0);
                });
            });
        });
    });
});