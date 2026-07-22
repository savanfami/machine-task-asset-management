import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  salary: z.number().positive(),
  position: z.string().min(2),
});