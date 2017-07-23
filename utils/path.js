/**
 * Created by imamudin.naseem on 25/10/16.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var curry2_1 = require("./curry2");
var path_ = function (path, obj) { return path.reduce(function (o, n) {
    try {
        return o[n];
    }
    catch (e) {
        return null;
    }
}, obj); };
exports.default = curry2_1.default(path_);
//# sourceMappingURL=path.js.map