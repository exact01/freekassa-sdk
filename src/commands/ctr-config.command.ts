import { z } from 'zod';
import { CtrConfigSchema } from '../models/ctr-config.model';

export namespace CtrConfigCommand {
    export const RequestCtrConfigSchema = CtrConfigSchema;
    export type ICtrConfig = z.infer<typeof RequestCtrConfigSchema>;
    export type ICtrInput = z.input<typeof RequestCtrConfigSchema>;
}
