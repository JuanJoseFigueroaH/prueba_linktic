import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors';
import { body, param } from 'express-validator';
import BaseValidator from './_base.validator';

class ProductoValidator extends BaseValidator {
    public validateFields = [
      body('nombre')
        .notEmpty()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name is not a string'),
      body('precio')
        .notEmpty()
        .withMessage('Price is required')
        .isString()
        .withMessage('Price is not a string')
    ];

    public updateFields = [
      body('nombre')
        .notEmpty()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name is not a string'),
      body('precio')
        .notEmpty()
        .withMessage('Price is required')
        .isString()
        .withMessage('Price is not a string')
    ];

    public paramIdValidator = [
      param('id')
        .notEmpty()
        .isNumeric()
    ];

    public paramPhilterValidator = [
      param('philter')
        .notEmpty()
    ];

    public valifateIfProductInExists = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      req.body.nombre = req.body.nombre.toUpperCase();
      const producto = await this.db.productoModel.findOne({ nombre: req.body.nombre });
      if (producto) {
        throw new BadRequestError(
                `Product: ${req.body.nombre} exists in db`
        );
      }
      next();
    };
}

export default ProductoValidator;
