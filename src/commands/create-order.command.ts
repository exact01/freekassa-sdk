import { z } from 'zod';
import { CreateOrderSchema } from '../models/create-order.model';

export namespace CreateOrderCommand {
    export const RequestCreateOrderSchema = CreateOrderSchema;
    export type ICreateOrder = z.infer<typeof RequestCreateOrderSchema>;
    export type ICreateOrderInput = z.input<typeof RequestCreateOrderSchema>;
}
