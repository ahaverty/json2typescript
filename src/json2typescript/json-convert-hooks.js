"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonConvertHooksUtil = (function () {
    function JsonConvertHooksUtil() {
    }
    JsonConvertHooksUtil.canBefore = function (arg) {
        return arg.before !== undefined;
    };
    return JsonConvertHooksUtil;
}());
exports.JsonConvertHooksUtil = JsonConvertHooksUtil;
//# sourceMappingURL=/Users/alan/IdeaProjects/json2typescript/src/json2typescript/json-convert-hooks.js.map