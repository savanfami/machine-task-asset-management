import { z } from "zod";

export const returnAssetSchema = z.object({
  transactionId: z.coerce.number().positive("transaction id is required"),
  returnDate: z.string().min(1, "return date required"),
  reason: z.string().optional(),
});