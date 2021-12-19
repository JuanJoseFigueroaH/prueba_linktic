import { Request, Response, NextFunction } from 'express';
import BaseController from './_base.controller';
import { NotFoundError } from '../errors/not-found-error';

class CategoriaController extends BaseController {
  public create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    req.body.nombre = req.body.nombre.toUpperCase();
    req.body.descripcion = req.body.descripcion.toUpperCase();

    const newCategoria = await this.db.categoriaModel.create(req.body);
    res.status(201).send({ data: newCategoria, message: 'Registro Creado Correctamente' });
  };

  public update = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const categoriaFound = await this.db.categoriaModel.findOne({ _id: parseInt(id) });
    if (!categoriaFound) {
      throw new NotFoundError();
    }

    req.body.nombre = req.body.nombre.toUpperCase();
    req.body.descripcion = req.body.descripcion.toUpperCase();

    const categoriaUpdated = await this.db.categoriaModel.findByIdAndUpdate({ _id: parseInt(id) }, req.body)
    res.status(201).send({ data: categoriaUpdated, message: 'Registro Modificado Correctamente' });
  };
}

export default CategoriaController;
