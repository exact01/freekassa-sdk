import { z } from 'zod';

export namespace GetBalanceCommand {
    export const ResponseGetBalanceSchema = z.object({
        type: z.enum(['success', 'error']),
        balance: z.array(
            z.object({
                currency: z.enum(['RUB', 'USD', 'EUR', 'UAH', 'KZT']),
                value: z.number(),
            }),
        ),
        message: z.string().optional(),
    });
    export type IGetBalanceResponse = z.infer<typeof ResponseGetBalanceSchema>;
}
