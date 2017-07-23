/**
 * Created by imamudin.naseem on 25/10/16.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (fn) {
    return function () {
        var a = arguments[0];
        if (arguments.length === 2)
            return fn.apply(null, arguments);
        else
            return function (b) { return fn(a, b); };
    };
};
//# sourceMappingURL=curry2.js.map