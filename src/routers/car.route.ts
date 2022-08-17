import { Router } from 'express';
import CarsController from '../controllers/car.controller';
import Car from '../models/Car';
import CarsService from '../services/car.service';

const route = Router();

const car = new Car();
const carService = new CarsService(car);
const carController = new CarsController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars', (req, res) => carController.read(req, res));

export default route;