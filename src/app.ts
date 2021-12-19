import express, { Response, Request } from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

// Conexión a la base de datos MongoDB
mongoose.Promise = global.Promise;
const dbUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true })
  .then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
  .catch(err => console.log(err));

const app = express();
// middleware
app.set('trust proxy', true);
app.use(express.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  '/api/v1/public',
  express.static(path.join(__dirname, '/public'))
);

app.all('*', (req: Request, res: Response) => {
});

export { app };
