import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  branch: z.string().min(3),
  status: z.string().min(3),
});