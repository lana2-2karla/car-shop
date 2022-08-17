import express from 'express';
import 'express-async-errors';
import route from './routers/car.route';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use(route);
app.use(errorHandler);

export default app;
