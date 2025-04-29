import { z } from 'zod';

export const NotificationParamsSchema = z
    .object({
        MERCHANT_ID: z.string(),
        AMOUNT: z.string(),
        MERCHANT_ORDER_ID: z.string(),
        SIGN: z.string(),
    })
    .catchall(z.unknown());
