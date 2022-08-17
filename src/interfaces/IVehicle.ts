import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string({ 
    required_error: 'model is required',
    invalid_type_error: 'model must be a string' })
    .min(3, { message: 'model must be 3 or more characters long' }),
  year: z.number({ 
    required_error: 'year is required',
    invalid_type_error: 'year must be a number' }).gte(1900).lte(2022),
  color: z.string({ 
    required_error: 'color is required',
    invalid_type_error: 'color must be a string' })
    .min(3, { message: 'color must be 3 or more characters long' }),
  status: z.boolean().optional(),
  buyValue: z.number({ 
    required_error: 'buyValue is required',
    invalid_type_error: 'buyValue must be a number' }).int(),
});

type IVehicle = z.infer<typeof vehicleZodSchema>;

export { vehicleZodSchema, IVehicle };

// atributo opcional - ref: https://codex.so/zod-validation-en
// validações - ref: https://github.com/colinhacks/zod#numbers