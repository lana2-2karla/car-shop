import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarsController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response<ICar>) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }

  public async read(req: Request, res: Response<ICar[]>) {
    const results = await this._service.read();
    return res.status(200).json(results);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const results = await this._service.readOne(req.params.id);
    return res.status(200).json(results);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const results = await this._service.update(req.params.id, req.body);
    return res.status(200).json(results);
  }
}

export default CarsController;