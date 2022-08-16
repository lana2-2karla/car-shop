import { z } from 'zod';
import { IVehicle } from './IVehicle';

const carZodSchema = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type ICar = IVehicle & z.infer<typeof carZodSchema>;

export { carZodSchema, ICar };

// Linha 9 - ref: https://stackoverflow.com/questions/41385059/possible-to-extend-types-in-typescript