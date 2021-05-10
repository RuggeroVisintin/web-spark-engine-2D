import { BaseComoponent } from "./BaseComoponent";

export enum InputStates {
    Pressed = 'Pressed',
    Released = 'Released'
}

export class InputComponent extends BaseComoponent {
    private __eventsMap: {[key: string]: InputStates} = {};

    constructor() {
        super();

        window.addEventListener('keyup',  event => this.__keyupEventListener(event));
        window.addEventListener('keydown', event => this.__keydownEventListener(event));
    }

    isPressed(keyCode: string): boolean {
        return this.__eventsMap[keyCode] === InputStates.Pressed;
    }

    private __keyupEventListener(event: any) {
        this.__eventsMap[event.code] = InputStates.Released;
    }

    private __keydownEventListener(event: any) {
        this.__eventsMap[event.code] = InputStates.Pressed;
    }
}