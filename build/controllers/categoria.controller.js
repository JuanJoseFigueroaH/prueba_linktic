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
const _base_controller_1 = __importDefault(require("./_base.controller"));
const not_found_error_1 = require("../errors/not-found-error");
class CategoriaController extends _base_controller_1.default {
    constructor() {
        super(...arguments);
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body.nombre = req.body.nombre.toUpperCase();
            req.body.descripcion = req.body.descripcion.toUpperCase();
            const newCategoria = yield this.db.categoriaModel.create(req.body);
            res.status(201).send({ data: newCategoria, message: 'Registro Creado Correctamente' });
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoriaFound = yield this.db.categoriaModel.findOne({ _id: parseInt(id) });
            if (!categoriaFound) {
                throw new not_found_error_1.NotFoundError();
            }
            req.body.nombre = req.body.nombre.toUpperCase();
            req.body.descripcion = req.body.descripcion.toUpperCase();
            const categoriaUpdated = yield this.db.categoriaModel.findByIdAndUpdate({ _id: parseInt(id) }, req.body);
            res.status(201).send({ data: categoriaUpdated, message: 'Registro Modificado Correctamente' });
        });
    }
}
exports.default = CategoriaController;
//# sourceMappingURL=categoria.controller.js.map