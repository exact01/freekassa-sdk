import { z } from 'zod';

export namespace CreateOrderCommand {
    export const RequestCreateOrderSchema = z.object({
        methodId: z.number(),
        email: z.string(),
        ip: z.string(),
        amount: z.number(),
        paymentId: z.string(),
        phone: z.string().optional(),
        successUrl: z.string().optional(),
        failUrl: z.string().optional(),
        notifyUrl: z.string().optional(),
    });

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
