"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _main_model_1 = __importDefault(require("../models/_main.model"));
class BaseValidator {
    constructor() {
        this.db = _main_model_1.default;
    }
}
exports.default = BaseValidator;
//# sourceMappingURL=_base.validator.js.map