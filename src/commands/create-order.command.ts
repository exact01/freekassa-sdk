import { z } from 'zod';
import { CreateOrderSchema } from '../models/create-order.model';

export namespace CreateOrderCommand {
    export const RequestCreateOrderSchema = CreateOrderSchema;
    export type ICreateOrder = z.infer<typeof RequestCreateOrderSchema>;
    export type ICreateOrderInput = z.input<typeof RequestCreateOrderSchema>;

    export const ResponseCreateOrderSchema = z.object({
        type: z.enum(['success', 'error']),
        orderId: z.number(),
        orderHash: z.string(),
        location: z.string(),
    });
    export type ICreateOrderResponse = z.infer<typeof ResponseCreateOrderSchema>;
}
