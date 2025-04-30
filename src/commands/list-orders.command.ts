import { ListOrdersSchema } from '../models';
import { z } from 'zod';
export namespace ListOrdersCommand {
    export const RequestListOrdersSchema = ListOrdersSchema;
    export type IListOrders = z.infer<typeof RequestListOrdersSchema>;
    export type IListOrdersInput = z.input<typeof RequestListOrdersSchema>;

    export const ResponseListOrdersSchema = z.object({
        type: z.enum(['success']),
        pages: z.number(),
        orders: z.array(
            z.object({
                merchant_order_id: z.string(),
                fk_order_id: z.number(),
                amount: z.number(),
                currency: z.string(),
                email: z.string(),
                account: z.string(),
                date: z.string(),
                status: z.number(),
            }),
        ),
    });
    export type IListOrdersResponse = z.infer<typeof ResponseListOrdersSchema>;
}
