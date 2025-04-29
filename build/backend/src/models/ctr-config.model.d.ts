import { z } from "zod";
export declare const CtrConfigSchema: z.ZodObject<{
    key: z.ZodString;
    secret1: z.ZodString;
    secret2: z.ZodString;
    shopId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    shopId: number;
    key: string;
    secret1: string;
    secret2: string;
}, {
    shopId: number;
    key: string;
    secret1: string;
    secret2: string;
}>;
//# sourceMappingURL=ctr-config.model.d.ts.map