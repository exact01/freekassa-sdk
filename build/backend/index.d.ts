export interface FreekassaConfig {
    key: string;
    secret1: string;
    secret2: string;
    shopId: number;
    payUrl?: string;
    apiUrl?: string;
    lang?: string;
    currency?: string;
}
export declare class Freekassa {
    private key;
    private secret1;
    private secret2;
    private shopId;
    private payUrl;
    private apiUrl;
    private lang;
    private currency;
    constructor(config: FreekassaConfig);
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
//# sourceMappingURL=index.d.ts.map