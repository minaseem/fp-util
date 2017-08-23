/**
 * Created by imamudin.naseem on 25/10/16.
 */

'use strict'

export const curry = (fn: Function) => {
    return function curried(...args: any[]) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...newArgs: any[]) {
                return curried(...[...args, ...newArgs]);
            }
        }
    };
};