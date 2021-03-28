import { NotImplementedError } from "../../../engine/src/core/errors";

describe('core', () => {
    describe('errors', () => {
        describe('NotImplementdError', () => {
            describe('constructor', () => {
                it('Should construct a new error instance with a given message', () => {
                    const error = new NotImplementedError('This is the error message');

                    expect(error.message).toEqual('Not implemented error: This is the error message');
                });
            });
        });
    });
});