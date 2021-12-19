"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = __importDefault(require("../controllers/categoria.controller"));
const categoria_validator_1 = __importDefault(require("../validators/categoria.validator"));
const middlewares_1 = require("../middlewares");
const categoriaRoute = express_1.Router();
const categoriaController = new categoria_controller_1.default();
const categoriaValidator = new categoria_validator_1.default();
categoriaRoute.post('/create', categoriaValidator.validateFields, middlewares_1.validateRequest, categoriaValidator.valifateIfCategoryExists, categoriaController.create);
categoriaRoute.put('modify/:id', categoriaValidator.updateFields, middlewares_1.validateRequest, categoriaController.update);
exports.default = categoriaRoute;
//# sourceMappingURL=categoria.route.js.map