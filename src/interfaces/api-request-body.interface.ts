export interface ApiRequestBody extends Record<string, unknown> {
    nonce?: string;
    signature?: string;
}
