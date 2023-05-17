"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
function sleep({ milliseconds = 1000 } = {}) {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve();
        }, milliseconds);
    });
}
exports.sleep = sleep;
//# sourceMappingURL=index.js.map