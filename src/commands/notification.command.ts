import { z } from 'zod';
import { NotificationParamsSchema } from '../models/notification.model';

export namespace NotificationCommand {
    export const RequestNotificationSchema = NotificationParamsSchema;
    export type INotification = z.infer<typeof RequestNotificationSchema>;
    export type INotificationInput = z.input<typeof RequestNotificationSchema>;
}
