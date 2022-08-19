import * as sinon from 'sinon';
import { expect } from 'chai';
import { ZodError } from 'zod';
// import { ErrorTypes } from '../../../errors/catalog';
import Car from '../../../models/Car';
import { Model } from 'mongoose';
import CarsService from '../../../services/car.service';
import { 
    carCreatedMock,
    carUpdatedMock,
    carWithIdMock,
    allCars,
    updateCarMock,
} from '../../mocks/carMock'

describe('Car Service', () => {

    const car = new Car();
    const carService = new CarsService(car);

        before(async () => {
          sinon.stub(Model, 'create').resolves(carWithIdMock);
          sinon.stub(Model, 'findByIdAndUpdate').resolves(carUpdatedMock);
          sinon.stub(Model, 'findOne').resolves(carWithIdMock);
          sinon.stub(Model, 'find').resolves(allCars);
          sinon.stub(Model, 'findByIdAndRemove').resolves(carWithIdMock);

        });
      
        after(()=>{
          sinon.restore();
        })
      
        describe('create car', () => {
            it('successfully created', async () => {
                const newCar = await carService.create(carCreatedMock);
                expect(newCar).to.be.deep.equal(carWithIdMock)
            });

            it('Failure', async () => {
                try {
                    await carService.create({} as any);
                } catch (error) {
                    expect(error).to.be.instanceOf(ZodError);
                }
            });

        }),

        describe('get the car by id', () => {
            it('successfully found', async () => {
                const getCarId = await carService.readOne('62ffd18778e9c4e8f28c2c78');
                expect(getCarId).to.be.deep.equal(carWithIdMock)
            });

            it('_id not found', async () => {
                try {
                    await carService.readOne('123ERRADO');
                } catch (error: any) {
                    expect(error.message).to.be.eq('InvalidMongoId');
                }
            });

            it('Failure found', async () => {
                try {
                    await carService.readOne('62ffd18778e9c4e8f28c2c76');
                } catch (error: any) {
                    expect(error.message).to.be.eq('ErrorTypes.EntityNotFound');
                }
            });

        })

        describe('get all cars', () => {
            it('successfully found', async () => {
                const getAllCars = await carService.read();
                expect(getAllCars).to.be.deep.equal(allCars)
            });

        })

        describe('update cars', () => {
            it('successfully change', async () => {
                const updatedCar = await carService.update('62ffd18778e9c4e8f28c2c78', updateCarMock);
                expect(updatedCar).to.be.deep.equal(carUpdatedMock)
            });

            it('_id not found to change', async () => {
                try {
                    await carService.update('123ERRADO', updateCarMock);
                } catch (error: any) {
                    expect(error.message).to.be.eq('InvalidMongoId');
                }
            });

            it('Failure found', async () => {
                try {
                    await carService.update('62ffd18778e9c4e8f28c2c76', updateCarMock);
                } catch (error: any) {
                    expect(error.message).to.be.eq('ErrorTypes.EntityNotFound');
                }
            });

        })

        // describe('remove cars', () => {
        //     it('successfully removing', async () => {
        //         const deletedCar = await carModel.delete('62ffd18778e9c4e8f28c2c78');
        //         expect(deletedCar).to.be.deep.equal(carWithIdMock)
        //     });

        //     it('_id not found to remove', async () => {
        //         try {
        //             await carModel.delete('123ERRADO');
        //         } catch (error: any) {
        //             expect(error.message).to.be.eq('InvalidMongoId');
        //         }
        //     });

        // })


});