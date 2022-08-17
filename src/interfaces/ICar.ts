import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number({ 
    required_error: 'doorsQty is required',
    invalid_type_error: 'doorsQty must be a number' }).gte(2).lte(4),
  seatsQty: z.number({ 
    required_error: 'seatsQty is required',
    invalid_type_error: 'seatsQty must be a number' }).gte(2).lte(7),
});

type ICar = z.infer<typeof carZodSchema>;

export { carZodSchema, ICar };

// Linha 9 - ref: https://stackoverflow.com/questions/41385059/possible-to-extend-types-in-typescript