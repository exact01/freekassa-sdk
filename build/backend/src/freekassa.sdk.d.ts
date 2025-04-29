import { ICTRFreekassaConfig } from "./interfaces";
export declare class Freekassa {
    private readonly key;
    private readonly secret1;
    private readonly secret2;
    private readonly shopId;
    private readonly payUrl;
    private readonly apiUrl;
    private readonly lang;
    private readonly currency;
    constructor(config: ICTRFreekassaConfig);
    signForm(amount: number, paymentId: string): string;
    createPaymentLink(params: {
        amount: number;
        paymentId: string;
        methodId?: number;
        email?: string;
        phone?: string;
        successUrl?: string;
        failUrl?: string;
        notifyUrl?: string;
    }): string;
    private signApi;
    private request;
    listOrders(options?: {
        paymentId?: string;
        orderId?: number;
        status?: 0 | 1 | 8 | 9;
        dateFrom?: string;
        dateTo?: string;
        page?: number;
    }): Promise<any>;
    createOrder(options: {
        methodId: number;
        email: string;
        ip: string;
        amount: number;
        paymentId?: string;
        phone?: string;
        successUrl?: string;
        failUrl?: string;
        notifyUrl?: string;
    }): Promise<any>;
    listWithdrawals(options?: {
        orderId?: number;
        paymentId?: string;
        status?: number;
        dateFrom?: string;
        dateTo?: string;
        page?: number;
    }): Promise<any>;
    createWithdrawal(options: {
        methodId: number;
        account: string;
        amount: number;
        paymentId?: string;
    }): Promise<any>;
    getBalance(): Promise<any>;
    getCurrencies(): Promise<any>;
    getCurrencyStatus(methodId: number): Promise<any>;
    getWithdrawalCurrencies(): Promise<any>;
    getShops(): Promise<any>;
}
//# sourceMappingURL=freekassa.sdk.d.ts.map