/**
 * Created by imamudin.naseem on 25/10/16.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var curry2_1 = require("./curry2");
exports.default = curry2_1.default(function (args, arg) { return args.reduce(function (o, n) { return n(o); }, arg); });
//# sourceMappingURL=pipeFunctions.js.map