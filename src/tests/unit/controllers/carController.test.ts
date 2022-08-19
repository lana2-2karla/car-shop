import * as sinon from 'sinon';
import { expect } from 'chai';
import { Request, Response } from 'express'
import { ZodError } from 'zod';
// import { ErrorTypes } from '../../../errors/catalog';
import Car from '../../../models/Car';
import CarsService from '../../../services/car.service';
import { 
    carCreatedMock,
    carUpdatedMock,
    carWithIdMock,
    allCars,
    updateCarMock,
} from '../../mocks/carMock'
import CarsController from '../../../controllers/car.controller';

describe('Car Controller', () => {

    const car = new Car();
    const carService = new CarsService(car);
    const carController = new CarsController(carService);

    const req = {} as Request; 
    const res = {} as Response;

        before( () => {
          sinon.stub(carService, 'create').resolves(carWithIdMock);
          sinon.stub(carService, 'update').resolves(carUpdatedMock);
          sinon.stub(carService, 'readOne').resolves(carWithIdMock);
          sinon.stub(carService, 'read').resolves(allCars);
          sinon.stub(carService, 'delete').resolves();

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);

        });
      
        after(()=>{
          sinon.restore();
        })
      
        describe('create car', () => {
            it('successfully created', async () => {
               req.body = carCreatedMock;
               await carController.create(req, res);

                expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
                expect((res.json as sinon.SinonStub).calledWith(carWithIdMock)).to.be.true;
            });
        }),

        describe('get the car by id', () => {
            it('successfully found', async () => {
                req.params = { id: '62ffd18778e9c4e8f28c2c78' };
                await carController.readOne(req, res);

                expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
                expect((res.json as sinon.SinonStub).calledWith(carWithIdMock)).to.be.true;
            });
        }),

        describe('get all cars', () => {
            it('successfully found', async () => {
                await carController.read(req, res);

                expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
                expect((res.json as sinon.SinonStub).calledWith(allCars)).to.be.true;
            });

        }),

        describe('update cars', () => {
            it('successfully change', async () => {

                req.params = { id: '62ffd18778e9c4e8f28c2c78' };
                req.body = carCreatedMock;

                await carController.update(req, res);

                expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
                expect((res.json as sinon.SinonStub).calledWith(carUpdatedMock)).to.be.true;
            });

        }),

        describe('remove cars', () => {
            it('successfully removing', async () => {
                req.params = { id: '62ffd18778e9c4e8f28c2c78' };
                await carController.delete(req, res);

                expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
            });

        })


});