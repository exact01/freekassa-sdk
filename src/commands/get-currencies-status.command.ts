import { z } from 'zod';

export namespace GetCurrenciesStatusCommand {
    export const ResponseGetCurrenciesStatusSchema = z.object({
        type: z.enum(['success', 'error']),
        message: z.string().optional(),
    });
    export type IGetCurrenciesStatusResponse = z.infer<typeof ResponseGetCurrenciesStatusSchema>;
}
