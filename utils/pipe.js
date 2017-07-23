/**
 * Created by imamudin.naseem on 25/10/16.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var pipeFunctions_1 = require("./pipeFunctions");
var toArray_1 = require("./toArray");
var pipe = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var args = toArray_1.default(a);
    return pipeFunctions_1.default(args);
};
exports.default = pipe;
//# sourceMappingURL=pipe.js.map