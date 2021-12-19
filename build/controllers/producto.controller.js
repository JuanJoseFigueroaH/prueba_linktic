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
class ProductoController extends _base_controller_1.default {
    constructor() {
        super(...arguments);
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body.nombre = req.body.nombre.toUpperCase();
            req.body.descripcion = req.body.descripcion.toUpperCase();
            const newProducto = yield this.db.productoModel.create(req.body);
            res.status(201).send({ data: newProducto, message: 'Registro Creado Correctamente' });
        });
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const producto = yield this.db.productoModel.find();
            res.status(200).send({ data: producto });
        });
        this.getNameCategory = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { philter } = req.params;
            const producto = yield this.db.productoModel.find({
                $or: [
                    { titulo: { $eq: philter } },
                    { categoria: { $eq: philter } }
                ]
            });
            res.status(200).send({ data: producto });
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productoFound = yield this.db.productoModel.findOne({ _id: parseInt(id) });
            if (!productoFound) {
                throw new not_found_error_1.NotFoundError();
            }
            req.body.descripcion = req.body.descripcion.toUpperCase();
            req.body.descripcion = req.body.descripcion.toUpperCase();
            const productoUpdated = yield this.db.productoModel.findByIdAndUpdate({ _id: parseInt(id) }, req.body);
            res.status(201).send({ data: productoUpdated, message: 'Registro Modificado Correctamente' });
        });
        this.deleted = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const producto = yield this.db.productoModel.findByIdAndDelete({ _id: req.body.id });
            if (!producto) {
                throw new not_found_error_1.NotFoundError();
            }
            res.status(201).send({ message: 'Registro eliminado correctamente' });
        });
    }
}
exports.default = ProductoController;
//# sourceMappingURL=producto.controller.js.map