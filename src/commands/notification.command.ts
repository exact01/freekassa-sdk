import { z } from 'zod';

export namespace NotificationCommand {
    export const RequestNotificationSchema = z
        .object({
            MERCHANT_ID: z.string(),
            AMOUNT: z.string(),
            MERCHANT_ORDER_ID: z.string(),
            SIGN: z.string(),
        })
        .catchall(z.unknown());
    export type INotification = z.infer<typeof RequestNotificationSchema>;
    export type INotificationInput = z.input<typeof RequestNotificationSchema>;
}
