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
class ProductoValidator extends _base_validator_1.default {
    constructor() {
        super(...arguments);
        this.validateFields = [
            express_validator_1.body('nombre')
                .notEmpty()
                .withMessage('Name is required')
                .isString()
                .withMessage('Name is not a string'),
            express_validator_1.body('precio')
                .notEmpty()
                .withMessage('Price is required')
                .isString()
                .withMessage('Price is not a string')
        ];
        this.updateFields = [
            express_validator_1.body('nombre')
                .notEmpty()
                .withMessage('Name is required')
                .isString()
                .withMessage('Name is not a string'),
            express_validator_1.body('precio')
                .notEmpty()
                .withMessage('Price is required')
                .isString()
                .withMessage('Price is not a string')
        ];
        this.paramIdValidator = [
            express_validator_1.param('id')
                .notEmpty()
                .isNumeric()
        ];
        this.paramPhilterValidator = [
            express_validator_1.param('philter')
                .notEmpty()
        ];
        this.valifateIfProductInExists = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body.nombre = req.body.nombre.toUpperCase();
            const producto = yield this.db.productoModel.findOne({ nombre: req.body.nombre });
            if (producto) {
                throw new errors_1.BadRequestError(`Product: ${req.body.nombre} exists in db`);
            }
            next();
        });
    }
}
exports.default = ProductoValidator;
//# sourceMappingURL=producto.validator.js.map