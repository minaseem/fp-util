/**
 * Created by imamudin.naseem on 25/10/16.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var curry2_1 = require("./curry2");
var prop_ = function (prop, obj) { return obj ? obj[prop] : undefined; };
exports.default = curry2_1.default(prop_);
//# sourceMappingURL=prop.js.map