import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
// import { IRequest } from '../interfaces/IRequest';
import { IService } from '../interfaces/IService';

class CarsController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response<ICar>) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }
}

export default CarsController;