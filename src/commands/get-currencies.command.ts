import { z } from 'zod';

export namespace GetCurrenciesCommand {
    export const ResponseGetCurrenciesSchema = z.object({
        type: z.enum(['success', 'error']),
        currencies: z.array(
            z.object({
                id: z.number(),
                name: z.string(),
                currency: z.enum(['RUB', 'USD', 'EUR', 'UAH', 'KZT']),
                is_enabled: z.number(),
                is_favorite: z.number(),
            }),
        ),
        message: z.string().optional(),
    });
    export type IGetCurrenciesResponse = z.infer<typeof ResponseGetCurrenciesSchema>;
}
