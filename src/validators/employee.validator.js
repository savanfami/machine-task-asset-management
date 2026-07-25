import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  branch: z.string().min(2, "Branch must be at least 2 characters"),
  status: z.enum(["true", "false"]).optional(),
});