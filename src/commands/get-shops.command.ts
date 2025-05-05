import { z } from 'zod';

export namespace GetShopsCommand {
    export const ResponseGetShopsSchema = z.object({
        type: z.enum(['success', 'error']),
        shops: z.array(
            z.object({
                id: z.number(),
                name: z.string(),
                url: z.string(),
            }),
        ),
        message: z.string().optional(),
    });
    export type IGetShopsResponse = z.infer<typeof ResponseGetShopsSchema>;
}
