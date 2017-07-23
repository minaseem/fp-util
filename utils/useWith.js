/**
 * Created by imamudin.naseem on 26/10/16.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var toArray_1 = require("./toArray");
var useWith = function (target, fns) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        var args = toArray_1.default(a);
        var output = [];
        args.forEach(function (v, k) { return output.push(fns[k](v)); });
        return target.apply(null, output);
    };
};
exports.default = useWith;
//# sourceMappingURL=useWith.js.map