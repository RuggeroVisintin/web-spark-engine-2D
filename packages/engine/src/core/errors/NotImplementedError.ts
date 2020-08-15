export namespace Core {
    export namespace Errors {
        export class NotImplementedError extends Error {
            constructor(message?: string) {
                super(`Not implemented error: ${message}`);
            }
        }
    }
}

