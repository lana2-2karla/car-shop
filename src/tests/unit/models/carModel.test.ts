import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import Car from '../../../models/Car';
import { Model } from 'mongoose';
import { 
    carCreatedMock,
    carUpdatedMock,
    carWithIdMock,
    allCars,
    updateCarMock,
} from '../../mocks/carMock'

describe('Car Model', () => {

    const carModel = new Car();

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
                const newCar = await carModel.create(carCreatedMock);
                expect(newCar).to.be.deep.equal(carWithIdMock)
            });

        }),

        describe('get the car by id', () => {
            it('successfully found', async () => {
                const getCarId = await carModel.readOne('62ffd18778e9c4e8f28c2c78');
                expect(getCarId).to.be.deep.equal(carWithIdMock)
            });

            it('_id not found', async () => {
                try {
                    await carModel.readOne('123ERRADO');
                } catch (error: any) {
                    expect(error.message).to.be.eq('InvalidMongoId');
                }
            });

        })

        describe('get all cars', () => {
            it('successfully found', async () => {
                const getAllCars = await carModel.read();
                expect(getAllCars).to.be.deep.equal(allCars)
            });

        })

        describe('update cars', () => {
            it('successfully change', async () => {
                const updatedCar = await carModel.update('62ffd18778e9c4e8f28c2c78', updateCarMock);
                expect(updatedCar).to.be.deep.equal(carUpdatedMock)
            });

            it('_id not found to change', async () => {
                try {
                    await carModel.update('123ERRADO', updateCarMock);
                } catch (error: any) {
                    expect(error.message).to.be.eq('InvalidMongoId');
                }
            });

        })

        describe('remove cars', () => {
            it('successfully removing', async () => {
                const deletedCar = await carModel.delete('62ffd18778e9c4e8f28c2c78');
                expect(deletedCar).to.be.deep.equal(carWithIdMock)
            });

            it('_id not found to remove', async () => {
                try {
                    await carModel.delete('123ERRADO');
                } catch (error: any) {
                    expect(error.message).to.be.eq('InvalidMongoId');
                }
            });

        })


});