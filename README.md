# FreeKassa SDK

## Описание

FreeKassa SDK - это библиотека для работы с платежной системой FreeKassa, которая позволяет интегрировать платежи в ваше приложение. SDK поддерживает как фронтенд, так и бэкенд части приложения.

## Установка

```bash
npm install @exact-team/freekassa-sdk
```

## Структура проекта

```
src/
├── api/          # API-клиенты и методы
├── commands/     # Команды для работы с платежами
├── interfaces/   # Интерфейсы и типы
├── models/       # Модели данных
├── index.ts      # Точка входа
└── freekassa.sdk.ts # Основной класс SDK
```

## Основные возможности

- Создание платежей и выплат
- Получение списка заказов и выплат
- Проверка статуса платежей
- Работа с уведомлениями
- Управление балансом
- Получение информации о валютах
- Валидация данных
- Поддержка TypeScript

## Конфигурация

### Обязательные параметры

- `key` - API ключ для подписи запросов
- `secretWord1` - Первое секретное слово для подписи платежных форм
- `secretWord2` - Второе секретное слово для проверки уведомлений
- `shopId` - ID вашего магазина
- `lang` - Язык интерфейса (`ru` или `en`)
- `currency` - Валюта платежей (`RUB`, `USD`, `EUR`, `UAH`, `KZT`)

### Опциональные параметры

- `payUrl` - URL платежной формы (по умолчанию: `https://pay.fk.money/`)
- `apiUrl` - URL API (по умолчанию: `https://api.fk.life/v1/`)

## Использование

### Инициализация

```typescript
import { FreeKassaSDK } from '@exact-team/freekassa-sdk';

const sdk = new FreeKassaSDK({
  key: 'YOUR_API_KEY',
  secretWord1: 'YOUR_SECRET_WORD_1',
  secretWord2: 'YOUR_SECRET_WORD_2',
  shopId: 12345,
  lang: 'ru',
  currency: 'RUB',
});
```

### Платежи

#### Создание ссылки для оплаты

```typescript
const paymentLink = sdk.createPaymentLink({
  amount: 1000,
  paymentId: 'unique-payment-id',
  methodId: 1, // опционально
  email: 'customer@example.com', // опционально
  phone: '+79001234567', // опционально
  successUrl: 'https://your-site.com/success', // опционально
  failUrl: 'https://your-site.com/fail', // опционально
  notifyUrl: 'https://your-site.com/notify', // опционально
});
```

#### Создание заказа

```typescript
const order = await sdk.createOrder({
  methodId: 1,
  email: 'customer@example.com',
  ip: '127.0.0.1',
  amount: 1000,
  paymentId: 'unique-payment-id', // опционально
  phone: '+79001234567', // опционально
  successUrl: 'https://your-site.com/success', // опционально
  failUrl: 'https://your-site.com/fail', // опционально
  notifyUrl: 'https://your-site.com/notify', // опционально
});
```

#### Получение списка заказов

```typescript
const orders = await sdk.listOrders({
  paymentId: 'payment-id', // опционально
  orderId: 'order-id', // опционально
  status: 1, // опционально
  dateFrom: '2024-01-01', // опционально
  dateTo: '2024-12-31', // опционально
  page: 1, // опционально
});
```

### Выплаты

#### Создание выплаты

```typescript
const withdrawal = await sdk.createWithdrawal({
  methodId: 1,
  account: 'account-number',
  amount: 1000,
  paymentId: 'unique-payment-id', // опционально
});
```

#### Получение списка выплат

```typescript
const withdrawals = await sdk.listWithdrawals({
  orderId: 123, // опционально
  paymentId: 'payment-id', // опционально
  status: 1, // опционально
  dateFrom: '2024-01-01', // опционально
  dateTo: '2024-12-31', // опционально
  page: 1, // опционально
});
```

### Информация

#### Получение баланса

```typescript
const balance = await sdk.getBalance();
```

#### Получение списка валют

```typescript
const currencies = await sdk.getCurrencies();
```

#### Получение статуса валюты

```typescript
const currencyStatus = await sdk.getCurrencyStatus(1);
```

#### Получение валют для выплат

```typescript
const withdrawalCurrencies = await sdk.getWithdrawalCurrencies();
```

#### Получение списка магазинов

```typescript
const shops = await sdk.getShops();
```

### Уведомления

#### Проверка уведомлений

```typescript
const isValid = sdk.verifyNotification({
  MERCHANT_ID: '12345',
  AMOUNT: '1000',
  MERCHANT_ORDER_ID: 'order-123',
  SIGN: 'signature',
});
```

## Требования

- Node.js 18+
- TypeScript 5.5+
- Zod 3.24.3

## Разработка

### Сборка

```bash
# Сборка бэкенд части
npm run build:backend

# Сборка фронтенд части
npm run build:frontend

# Сборка всего проекта
npm run build
```

### Линтинг

Проект использует ESLint и Prettier для поддержания качества кода.

## Лицензия

ISC

## Автор

Exact Team

## Поддержка

Для получения поддержки или сообщения об ошибках, пожалуйста, создайте issue в репозитории проекта.
