import { z } from 'zod';

export namespace CreateWithdrawalCommand {
    export const RequestCreateWithdrawalSchema = z.object({
        methodId: z.number(),
        account: z.string(),
        amount: z.number(),
        paymentId: z.string(),
    });

    export type ICreateWithdrawal = z.infer<typeof RequestCreateWithdrawalSchema>;
    export type ICreateWithdrawalInput = z.input<typeof RequestCreateWithdrawalSchema>;

    export const ResponseCreateWithdrawalSchema = z.object({
        type: z.enum(['success', 'error']),
        data: z.object({
            id: z.number(),
        }),
        message: z.string().optional(),
    });
    export type ICreateWithdrawalResponse = z.infer<typeof ResponseCreateWithdrawalSchema>;
}
