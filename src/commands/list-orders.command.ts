import { ListOrdersSchema } from '../models';
import { z } from 'zod';
export namespace ListOrdersCommand {
    export const RequestListOrdersSchema = ListOrdersSchema;
    export type IListOrders = z.infer<typeof RequestListOrdersSchema>;
    export type IListOrdersInput = z.input<typeof RequestListOrdersSchema>;
}
