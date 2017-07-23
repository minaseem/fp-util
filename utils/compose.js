/**
 * Created by imamudin.naseem on 25/10/16.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var pipeFunctions_1 = require("./pipeFunctions");
var toArray_1 = require("./toArray");
var compose = function () {
    var args = toArray_1.default(arguments).reverse();
    return pipeFunctions_1.default(args);
};
exports.default = compose;
//# sourceMappingURL=compose.js.map