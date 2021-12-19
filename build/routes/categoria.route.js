"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaRoute = express_1.Router();
categoriaRoute.post('/create');
categoriaRoute.put('modify/:id');
exports.default = categoriaRoute;
//# sourceMappingURL=categoria.route.js.map