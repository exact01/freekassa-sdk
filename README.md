# FreeKassa SDK

![GitHub top language](https://img.shields.io/github/languages/top/exact01/freekassa-sdk)
![GitHub Repo stars](https://img.shields.io/github/stars/exact01/freekassa-sdk)

![npm version](https://img.shields.io/npm/v/@exact-team/freekassa-sdk)
![GitHub Tag](https://img.shields.io/github/v/tag/exact01/freekassa-sdk)

![Build Status](https://img.shields.io/github/actions/workflow/status/exact01/freekassa-sdk/.github/workflows/deploy-lib.yml)
![Downloads](https://img.shields.io/npm/dt/@exact-team/freekassa-sdk)
![License](https://img.shields.io/npm/l/@exact-team/freekassa-sdk)
![NPM Last Update](https://img.shields.io/npm/last-update/%40exact-team%2Ffreekassa-sdk)

![Known Vulnerabilities](https://snyk.io/test/github/exact01/freekassa-sdk/badge.svg)
![Coverage Status](https://img.shields.io/codecov/c/github/exact01/freekassa-sdk)

## Описание

FreeKassa SDK - это библиотека для работы с платежной системой FreeKassa, которая позволяет интегрировать платежи в ваше приложение. SDK поддерживает как фронтенд, так и бэкенд части приложения. Если для вас не хватает каких то методов, которые есть в документации отпишите мне, я постараюсь их добавить!

![Обёртка для NestJS](https://github.com/exact01/freekassa-sdk-nestjs)
![Документация freekassa](https://docs.freekassa.net)

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
- `payUrl` - URL платежной формы (по умолчанию: `https://pay.fk.money/`)
- `apiUrl` - URL API (по умолчанию: `https://api.fk.life/v1/`)

## Использование

### Инициализация

```typescript
import { Freekassa } from '@exact-team/freekassa-sdk';

const sdk = new Freekassa({
  key: 'YOUR_API_KEY',
  secretWord1: 'YOUR_SECRET_WORD_1',
  secretWord2: 'YOUR_SECRET_WORD_2',
  shopId: 12345,
  lang: 'ru',
  currency: 'RUB',
  payUrl: 'https://pay.fk.money/',
  apiUrl: 'https://api.fk.life/v1/',
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
  paymentId: 'unique-payment-id',
  phone: '+79001234567', // опционально
  successUrl: 'https://your-site.com/success', // опционально
  failUrl: 'https://your-site.com/fail', // опционально
  notifyUrl: 'https://your-site.com/notify', // опционально
});
```

#### Проверка уведомления

```typescript
const notification = {
  MERCHANT_ID: 'yourID',
  AMOUNT: '10',
  MERCHANT_ORDER_ID: '1746001556454',
  SIGN: 'a242444ec9b2cf63e5fa1ea1ef1bb999',
};

const isValid = sdk.verifyNotification(notification);
console.log(isValid); // true или false
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
  orderId: 'order-id', // опционально
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

## Требования

- Node.js 20+
- TypeScript 5.0+

## Разработка

### Сборка

```bash
# Сборка проекта
npm run build

# Запуск линтера
npm run lint
```

### Линтинг

Проект использует ESLint и Prettier для поддержания качества кода.

## Лицензия

ISC

## Автор

exact01

## Поддержка

Для получения поддержки или сообщения об ошибках, пожалуйста, создайте issue в репозитории проекта.

```

```
