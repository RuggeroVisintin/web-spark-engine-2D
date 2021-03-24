import { NotImplementedError } from "../errors";

export function notImplemented<T>(target: T, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) {
    descriptor.value = function () {
        throw new NotImplementedError(`${target.constructor.name}.${propertyKey}`);
    };
}