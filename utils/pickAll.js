/**
 * Created by imamudin.naseem on 25/10/16.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var curry2_1 = require("./curry2");
var pickAll_ = function (keys, obj) { return keys.reduce(function (o, n) {
    o[n] = obj[n];
    return o;
}, {}); };
exports.default = curry2_1.default(pickAll_);
//# sourceMappingURL=pickAll.js.map