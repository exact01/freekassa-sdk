"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Freekassa = void 0;
// src/Freekassa.ts
const crypto_1 = __importDefault(require("crypto"));
class Freekassa {
    constructor(config) {
        this.key = config.key;
        this.secret1 = config.secret1;
        this.secret2 = config.secret2;
        this.shopId = config.shopId;
        this.payUrl = config.payUrl ?? "https://pay.freekassa.ru";
        this.apiUrl = config.apiUrl ?? "https://api.freekassa.ru/v1";
        this.lang = config.lang ?? "ru";
        this.currency = config.currency ?? "RUB";
    }
    // Генерация MD5-подписи для формы оплаты
    signForm(amount, paymentId) {
        const str = `${this.shopId}:${amount}:${this.secret1}:${this.currency}:${paymentId}`;
        return crypto_1.default.createHash("md5").update(str).digest("hex");
    }
    // Построение URL для перенаправления на страницу оплаты
    createPaymentLink(params) {
        const s = this.signForm(params.amount, params.paymentId);
        const q = {
            m: String(this.shopId),
            oa: String(params.amount),
            currency: this.currency,
            o: params.paymentId,
            s,
            lang: this.lang,
        };
        if (params.methodId)
            q.i = String(params.methodId);
        if (params.email)
            q.em = params.email;
        if (params.phone)
            q.phone = params.phone;
        if (params.successUrl)
            q.success_url = params.successUrl;
        if (params.failUrl)
            q.failure_url = params.failUrl;
        if (params.notifyUrl)
            q.notification_url = params.notifyUrl;
        return `${this.payUrl}/?${new URLSearchParams(q).toString()}`;
    }
    // HMAC-SHA256 подпись для API-запросов
    signApi(body) {
        const sorted = Object.keys(body)
            .sort()
            .map((k) => body[k])
            .join("|");
        return crypto_1.default.createHmac("sha256", this.key).update(sorted).digest("hex");
    }
    // Универсальный POST-запрос к API через глобальный fetch
    async request(endpoint, data) {
        const body = { ...data, nonce: Date.now().toString() };
        body.signature = this.signApi(body);
        const res = await fetch(`${this.apiUrl}${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        if (!res.ok) {
            const text = await res.text();
            throw new Error(`Freekassa API error ${res.status}: ${text}`);
        }
        return res.json();
    }
    // Получить список заказов
    async listOrders(options) {
        const body = { shopId: this.shopId };
        if (options) {
            if (options.paymentId)
                body.paymentId = options.paymentId;
            if (options.orderId)
                body.orderId = options.orderId;
            if (options.status !== undefined)
                body.orderStatus = options.status;
            if (options.dateFrom)
                body.dateFrom = options.dateFrom;
            if (options.dateTo)
                body.dateTo = options.dateTo;
            if (options.page)
                body.page = options.page;
        }
        return this.request("/orders", body);
    }
    // Создать заказ через API
    async createOrder(options) {
        const body = {
            shopId: this.shopId,
            i: options.methodId,
            email: options.email,
            ip: options.ip,
            amount: options.amount,
            currency: this.currency,
        };
        if (options.paymentId)
            body.paymentId = options.paymentId;
        if (options.phone)
            body.tel = options.phone;
        if (options.successUrl)
            body.success_url = options.successUrl;
        if (options.failUrl)
            body.failure_url = options.failUrl;
        if (options.notifyUrl)
            body.notification_url = options.notifyUrl;
        return this.request("/orders/create", body);
    }
    // Список и создание выплат
    async listWithdrawals(options) {
        const body = { shopId: this.shopId };
        if (options) {
            if (options.orderId)
                body.orderId = options.orderId;
            if (options.paymentId)
                body.paymentId = options.paymentId;
            if (options.status !== undefined)
                body.orderStatus = options.status;
            if (options.dateFrom)
                body.dateFrom = options.dateFrom;
            if (options.dateTo)
                body.dateTo = options.dateTo;
            if (options.page)
                body.page = options.page;
        }
        return this.request("/withdrawals", body);
    }
    async createWithdrawal(options) {
        const body = {
            shopId: this.shopId,
            i: options.methodId,
            account: options.account,
            amount: options.amount,
            currency: this.currency,
        };
        if (options.paymentId)
            body.paymentId = options.paymentId;
        return this.request("/withdrawals/create", body);
    }
    async getBalance() {
        return this.request("/balance", { shopId: this.shopId });
    }
    async getCurrencies() {
        return this.request("/currencies", { shopId: this.shopId });
    }
    async getCurrencyStatus(methodId) {
        return this.request(`/currencies/${methodId}/status`, { shopId: this.shopId });
    }
    async getWithdrawalCurrencies() {
        return this.request("/withdrawals/currencies", { shopId: this.shopId });
    }
    async getShops() {
        return this.request("/shops", { shopId: this.shopId });
    }
}
exports.Freekassa = Freekassa;
