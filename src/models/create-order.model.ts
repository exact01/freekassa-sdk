import { z } from 'zod';

export const CreateOrderSchema = z.object({
    methodId: z.number(),
    email: z.string(),
    ip: z.string(),
    amount: z.number(),
    paymentId: z.string().optional(),
    phone: z.string().optional(),
    successUrl: z.string().optional(),
    failUrl: z.string().optional(),
    notifyUrl: z.string().optional(),
});
