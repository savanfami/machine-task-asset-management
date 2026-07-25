import { z } from "zod";

export const assetSchema = z.object({
  assetCode: z.string().min(1, "Asset code is required"),
  serialNumber: z.string().min(1, "Serial number is required"),
  manufacturer: z.string().min(1, "Manufacturer is required"),
  model: z.string().min(1, "Model is required"),

  purchaseCost: z.coerce
    .number()
    .nonnegative("Purchase cost must be non-negative"),

  purchaseDate: z.string().optional(),

  status: z.enum(["IN_STOCK", "ISSUED", "DAMAGED"]).optional(),

  categoryId: z.coerce
    .number()
    .int()
    .positive("Category is required"),
});