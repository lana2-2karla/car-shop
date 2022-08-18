import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../errors/catalog';

class CarsService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model; 
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const result = await this._car.create(obj);
    return result;
  }

  public async read():Promise<ICar[]> {
    const results = await this._car.read();
    return results;
  }

  public async readOne(_id: string):Promise<ICar> {
    const results = await this._car.readOne(_id);
    if (!results) throw new Error(ErrorTypes.EntityNotFound);
    return results;
  }

  public async update(_id: string, obj: ICar):Promise<ICar | null> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const results = await this._car.update(_id, obj);
    await this.readOne(_id);
    return results;
  }
}

export default CarsService;