"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtrConfigSchema = void 0;
const zod_1 = require("zod");
exports.CtrConfigSchema = zod_1.z.object({
    key: zod_1.z.string(),
    secret1: zod_1.z.string(),
    secret2: zod_1.z.string(),
    shopId: zod_1.z.number(),
});
