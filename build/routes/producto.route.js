"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = __importDefault(require("../controllers/producto.controller"));
const producto_validator_1 = __importDefault(require("../validators/producto.validator"));
const middlewares_1 = require("../middlewares");
const productoRoute = express_1.Router();
const productoController = new producto_controller_1.default();
const productoValidator = new producto_validator_1.default();
productoRoute.post('/create', productoValidator.validateFields, middlewares_1.validateRequest, productoValidator.valifateIfProductInExists, productoController.create);
productoRoute.get('/', productoController.getAll);
productoRoute.get('/filter/name-category/:philter', productoValidator.paramPhilterValidator, productoController.getNameCategory);
productoRoute.put('modify/:id', productoValidator.updateFields, productoValidator.paramIdValidator, middlewares_1.validateRequest, productoController.update);
productoRoute.delete('/delete', productoController.deleted);
exports.default = productoRoute;
//# sourceMappingURL=producto.route.js.map