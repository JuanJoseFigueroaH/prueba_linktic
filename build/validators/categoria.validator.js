"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const express_validator_1 = require("express-validator");
const _base_validator_1 = __importDefault(require("./_base.validator"));
class CategoryValidator extends _base_validator_1.default {
    constructor() {
        super(...arguments);
        this.validateFields = [
            express_validator_1.body('nombre')
                .notEmpty()
                .withMessage('Name is required')
                .isString()
                .withMessage('Name is not a string')
        ];
        this.updateFields = [
            express_validator_1.body('nombre')
                .notEmpty()
                .withMessage('Name is required')
                .isString()
                .withMessage('Name is not a string')
        ];
        this.valifateIfCategoryExists = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body.nombre = req.body.nombre.toUpperCase();
            const category = yield this.db.categoriaModel.findOne({ nombre: req.body.nombre });
            if (category) {
                throw new errors_1.BadRequestError(`Category: ${req.body.nombre} exists in db`);
            }
            next();
        });
    }
}
exports.default = CategoryValidator;
//# sourceMappingURL=categoria.validator.js.map