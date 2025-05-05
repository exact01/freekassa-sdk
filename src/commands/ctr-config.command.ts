import { z } from 'zod';

export namespace CtrConfigCommand {
    export const RequestCtrConfigSchema = z.object({
        key: z.string(),
        secretWord1: z.string(),
        secretWord2: z.string(),
        shopId: z.number(),
        payUrl: z.string().default('https://pay.fk.money/'),
        apiUrl: z.string().default('https://api.fk.life/v1/'),
        lang: z.enum(['ru', 'en']),
        currency: z.enum(['RUB', 'USD', 'EUR', 'UAH', 'KZT']),
    });

    export type ICtrConfig = z.infer<typeof RequestCtrConfigSchema>;
    export type ICtrInput = z.input<typeof RequestCtrConfigSchema>;
}
