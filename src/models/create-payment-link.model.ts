import { z } from 'zod';

export const CreatePaymentLinkSchema = z.object({
    amount: z.number(),
    paymentId: z.string(),
    methodId: z.number().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    successUrl: z.string().optional(),
    failUrl: z.string().optional(),
    notifyUrl: z.string().optional(),
});
