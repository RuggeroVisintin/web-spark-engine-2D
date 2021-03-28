const eventsMap: {[key: string]: Function[]} = {}

global.addEventListener = jest.fn(<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => {
    if (eventsMap[type]) {
        eventsMap[type].push(listener);
    } else {
        eventsMap[type] = [listener];
    }
})

export const triggerEvent = <K extends keyof WindowEventMap>(type: K, event: WindowEventMap[K]) => {
    eventsMap[type].forEach(f => f(event));
}