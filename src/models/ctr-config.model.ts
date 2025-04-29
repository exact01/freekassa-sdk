import { z } from 'zod';

export const CtrConfigSchema = z.object({
    key: z.string(),
    secretWord1: z.string(),
    secretWord2: z.string(),
    shopId: z.number(),
    payUrl: z.optional(z.string().default('https://pay.fk.money/')),
    apiUrl: z.optional(z.string().default('https://api.fk.life/v1/')),
    lang: z.enum(['ru', 'en']),
    currency: z.enum(['RUB', 'USD', 'EUR', 'UAH', 'KZT']),
});
