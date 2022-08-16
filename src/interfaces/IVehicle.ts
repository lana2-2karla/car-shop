import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type IVehicle = z.infer<typeof vehicleZodSchema>;

export { vehicleZodSchema, IVehicle };

// atributo opcional - ref: https://codex.so/zod-validation-en
// validações - ref: https://github.com/colinhacks/zod#numbers