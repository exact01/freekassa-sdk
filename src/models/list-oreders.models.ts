import { z } from 'zod';

export const ListOrdersSchema = z.object({
    paymentId: z.string().optional(),
    orderId: z.number().optional(),
    status: z.union([z.literal(0), z.literal(1), z.literal(8), z.literal(9)]).optional(),
    dateFrom: z.string().optional(),
    dateTo: z.string().optional(),
    page: z.number().optional(),
});
