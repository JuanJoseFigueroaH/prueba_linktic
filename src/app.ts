import express, { Response, Request } from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

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
