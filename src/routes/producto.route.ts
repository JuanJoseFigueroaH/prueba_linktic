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
 *              "categoria": 606c8c24a4179839540ab168,
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
 *              "categoria": 606c8c24a4179839540ab168,
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

/**
 * @swagger
 * /producto/filter/name-category/{philter}:
 *  get:
 *    description: "Obtener productos filtrados por nombre o categoria"
 *    tags:
 *      - Producto
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: philter
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *       200:
 *         examples:
 *           application/json: {
 *              "_id": 606c8c02a4179839540ab167,
 *              "nombre": "Lapiz borrable",
 *              "descripcion": "Lapiz para niños",
 *              "precio": "1200",
 *              "categoria": 606c8c24a4179839540ab168,
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
  '/filter/name-category/:philter'
);

/**
 * @swagger
 * /producto/modify/{id}:
 *  put:
 *    description: "Modificación de un producto"
 *    tags:
 *      - Producto
 *    produces:
 *      - application/json
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        type: number
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
 *              "categoria": 606c8c24a4179839540ab168,
 *              "created_at": "2021-12-19T01:07:31.210Z",
 *              "updated_at": "2021-12-19T01:10:30.126Z"
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
productoRoute.put(
  'modify/:id'
);

/**
 * @swagger
 * /producto/delete/{id}:
 *  delete:
 *    description: "Eliminar un producto"
 *    tags:
 *      - Producto
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        type: number
 *    responses:
 *       200:
 *         examples:
 *           application/json: {
 *              "_id": 606c8c02a4179839540ab167,
 *              "nombre": "Lapiz borrable",
 *              "descripcion": "Lapiz para niños",
 *              "precio": "1200",
 *              "categoria": 606c8c24a4179839540ab168,
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
  '/delete/:id'
);

export default productoRoute;
