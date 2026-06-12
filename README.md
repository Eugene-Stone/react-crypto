# React Crypto Dashboard

Небольшой дашборд на React + TypeScript для управления портфелем криптовалют.
### Demo - https://eugene-stone.github.io/react-crypto

Приложение использует локальные мок-данные, которые обслуживаются `json-server`, и включает:
- список доступных криптовалют,
- подробности актива в модальном окне,
- портфель приобретённых активов,
- круговую диаграмму распределения портфеля,
- форму в для добавления новой позиции.

## Возможности

- Список криптовалют с иконками, ценой и рыночными данными
- Модальное окно с изменением цены за 1 час, 24 часа и 7 дней
- Трекер портфеля купленных монет
- Рассчет профита и общей стоимости позиции
- Визуализация портфеля на круговой диаграмме
- Локальный mock backend через `json-server`

## Технологии

- React 19
- TypeScript
- Vite
- Ant Design
- Carbon Charts React
- json-server
- ESLint
- Sass

## Структура проекта

- `src/App.tsx` — главный компонент приложения
- `src/context/CryptoContext.tsx` — провайдер глобального состояния
- `src/hooks/useData.ts` — логика загрузки данных и отправки формы
- `src/components/` — UI-компоненты (`AppDrawer`, `AppForm`, `AppChart`, `AppMyCryptoList`, `AppModal`)
- `src/layout/` — базовый layout (`AppAside`, `AppContent`)
- `src/api/request.ts` — клиент для mock API `json-server`
- `db.json` — данные криптовалют и приобретённых активов

## Запуск

1. Установите зависимости:

```bash
npm install
```

2. Запустите приложение:

```bash
npm run start
```

Эта команда запускает одновременно Vite и `json-server`.

3. Откройте в браузере:

```text
http://localhost:5173
```