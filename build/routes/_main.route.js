"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_route_1 = __importDefault(require("./categoria.route"));
const producto_route_1 = __importDefault(require("./producto.route"));
const mainRoute = express_1.Router();
mainRoute.use('/categoria', categoria_route_1.default);
mainRoute.use('/producto', producto_route_1.default);
exports.default = mainRoute;
//# sourceMappingURL=_main.route.js.map