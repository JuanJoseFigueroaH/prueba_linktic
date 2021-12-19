import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors';
import { body } from 'express-validator';
import BaseValidator from './_base.validator';

class CategoryValidator extends BaseValidator {
  public validateFields = [
    body('nombre')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name is not a string')
  ];

  public updateFields = [
    body('nombre')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name is not a string')
  ];

  public valifateIfCategoryExists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    req.body.nombre = req.body.nombre.toUpperCase();
    const category = await this.db.categoriaModel.findOne({ nombre: req.body.nombre });
    if (category) {
      throw new BadRequestError(
        `Category: ${req.body.nombre} exists in db`
      );
    }
    next();
  };
}

export default CategoryValidator;
