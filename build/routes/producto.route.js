"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoRoute = express_1.Router();
productoRoute.post('/create');
productoRoute.get('/');
productoRoute.get('/filter/name-category');
exports.default = productoRoute;
//# sourceMappingURL=producto.route.js.map