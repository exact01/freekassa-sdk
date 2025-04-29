import { CreatePaymentLinkSchema } from '../models/create-payment-link.model';
import { z } from 'zod';

export namespace CreatePaymentLinkCommand {
    export const RequestCreatePaymentLinkSchema = CreatePaymentLinkSchema;
    export type ICreatePaymentLink = z.infer<typeof RequestCreatePaymentLinkSchema>;
    export type ICreatePaymentLinkInput = z.input<typeof RequestCreatePaymentLinkSchema>;
}
