import { Router } from 'express';
import CategoriaController from '../controllers/categoria.controller';
import CategoriaValidator from '../validators/categoria.validator';
import { validateRequest } from '../middlewares';

const categoriaRoute = Router();
const categoriaController = new CategoriaController();
const categoriaValidator = new CategoriaValidator();

/**
 * @swagger
 * /caegoria/create:
 *  post:
 *    description: "Creación de una categoria"
 *    tags:
 *      - Categoria
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: nombre
 *        in: formData
 *        required: true
 *        type: string
 *      - name: descripcion
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *       201:
 *         examples:
 *           application/json: {
 *              "_id": 606c8c02a4179839540ab167,
 *              "nombre": "Lapices",
 *              "descripcion": "Lapices para escuela",
 *              "created_at": "2021-12-19T01:07:31.210Z",
 *           }
 *       400:
 *         description: bad request
 *         examples:
 *           application/json: {
 *              "errors": [
 *                  {
 *                    "message": "Name is required",
 *                    "field": "name"
 *                  }
 *              ]
 *           }
 */
categoriaRoute.post(
  '/create',
  categoriaValidator.validateFields,
  validateRequest,
  categoriaValidator.valifateIfCategoryExists,
  categoriaController.create
);

/**
 * @swagger
 * /categoria/modify/{id}:
 *  put:
 *    description: "Modificación de una categoria"
 *    tags:
 *      - Categoria
 *    produces:
 *      - application/json
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: nombre
 *        in: formData
 *        required: true
 *        type: string
 *      - name: descripcion
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *       201:
 *         examples:
 *           application/json: {
 *              "_id": 606c8c02a4179839540ab167,
 *              "nombre": "Lapices",
 *              "descripcion": "Lapices para escuela",
 *              "created_at": "2021-12-19T01:07:31.210Z",
 *           }
 *       400:
 *         description: bad request
 *         examples:
 *           application/json: {
 *            "errors": [
 *                {
 *                    "message": "Name is required",
 *                    "field": "name"
 *                }
 *            ]
 *           }
 */
categoriaRoute.put(
  'modify/:id',
  categoriaValidator.updateFields,
  validateRequest,
  categoriaController.update
);

export default categoriaRoute;
