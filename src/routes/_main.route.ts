import { Router } from 'express';
import categoriaRoute from './categoria.route';
import productoRoute from './producto.route';

const mainRoute = Router();

mainRoute.use('/categoria', categoriaRoute);
mainRoute.use('/producto', productoRoute);

export default mainRoute;
