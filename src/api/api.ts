export const API = {
    LIST_ORDERS: '/orders',
    CREATE_ORDER: '/orders/create',
    WITHDRAWALS: '/withdrawals',
    CREATE_WITHDRAWAL: '/withdrawals/create',
    BALANCE: '/balance',
    CURRENCIES: '/currencies',
    CURRENCY_STATUS: (methodId: number) => `/currencies/${methodId}/status`,
    WITHDRAWAL_CURRENCIES: '/withdrawals/currencies',
    SHOPS: '/shops',
};
