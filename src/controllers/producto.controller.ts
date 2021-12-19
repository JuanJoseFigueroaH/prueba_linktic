import { Request, Response, NextFunction } from 'express';
import BaseController from './_base.controller';
import { NotFoundError } from '../errors/not-found-error';

class ProductoController extends BaseController {
    public create = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      req.body.nombre = req.body.nombre.toUpperCase();
      req.body.descripcion = req.body.descripcion.toUpperCase();
      const newProducto = await this.db.productoModel.create(req.body);
      res.status(201).send({ data: newProducto, message: 'Registro Creado Correctamente' });
    };

    public getAll = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const producto = await this.db.productoModel.find();
      res.status(200).send({ data: producto });
    };

    public getNameCategory = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const { philter } = req.params;
      const producto = await this.db.productoModel.find({
        $or: [
          { titulo: { $eq: philter } },
          { categoria: { $eq: philter } }
        ]
      });
      res.status(200).send({ data: producto });
    };

    public update = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const { id } = req.params;
      const productoFound = await this.db.productoModel.findOne({ _id: parseInt(id) });
      if (!productoFound) {
        throw new NotFoundError();
      }

      req.body.descripcion = req.body.descripcion.toUpperCase();
      req.body.descripcion = req.body.descripcion.toUpperCase();

      const productoUpdated = await this.db.productoModel.findByIdAndUpdate({ _id: parseInt(id) }, req.body)
      res.status(201).send({ data: productoUpdated, message: 'Registro Modificado Correctamente' });
    };

    public deleted = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const producto = await this.db.productoModel.findByIdAndDelete({ _id: req.body.id });
      if (!producto) {
        throw new NotFoundError();
      }
      res.status(201).send({ message: 'Registro eliminado correctamente' });
    };
}

export default ProductoController;
