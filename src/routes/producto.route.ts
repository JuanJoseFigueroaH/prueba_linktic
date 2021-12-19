import { Router } from 'express';

const productoRoute = Router();

/**
 * @swagger
 * /producto/create:
 *  post:
 *    description: "Creación de producto"
 *    tags:
 *      - Producto
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: titulo
 *        in: formData
 *        required: true
 *        type: string
 *      - name: descripcion
 *        in: formData
 *        required: true
 *        type: string
 *      - name: precio
 *        in: formData
 *        required: true
 *        type: string
 *      - name: categoria
 *        in: formData
 *        type: ObjectId
 *    responses:
 *       201:
 *         examples:
 *           application/json: {
 *              "_id": 606c8c02a4179839540ab167,
 *              "nombre": "Lapiz borrable",
 *              "descripcion": "Lapiz para niños",
 *              "precio": "1200",
 *              "municipio": 606c8c24a4179839540ab168,
 *              "created_at": "2021-12-19T01:07:31.210Z",
 *              "updated_at": "2021-12-19T01:10:30.126Z"
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
productoRoute.post(
  '/create'
);

/**
 * @swagger
 * /producto:
 *  get:
 *    description: "Obtener todos los productos"
 *    tags:
 *      - Producto
 *    security:
 *      - bearerAuth: []
 *    responses:
 *       200:
 *         examples:
 *           application/json: {
 *              "_id": 606c8c02a4179839540ab167,
 *              "nombre": "Lapiz borrable",
 *              "descripcion": "Lapiz para niños",
 *              "precio": "1200",
 *              "municipio": 606c8c24a4179839540ab168,
 *              "created_at": "2021-12-19T01:07:31.210Z",
 *              "updated_at": "2021-12-19T01:10:30.126Z"
 *           }
 *       404:
 *         schema:
 *           type: object
 *           properties:
 *             errors:
 *               type: object
 *         examples:
 *           application/json: {
 *             "errors": [
 *                  "message": "Not Found"
 *              ],
 *           }
 */
productoRoute.get(
  '/'
);

export default productoRoute;
