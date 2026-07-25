import { z } from "zod";

export const issueAssetSchema = z.object({
  employeeId: z.coerce
    .number()
    .int()
    .positive("employee id is required"),

  assetId: z.coerce
    .number()
    .int()
    .positive("asset id is required"),

  issueDate: z.string().min(1, "date is required"),
});