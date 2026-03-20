# Posts Backend API

Node.js + Express backend для роботи з постами. Дані зберігаються у файлі posts.json.

## Основні можливості

- Зберігання постів у JSON-файлі
- API-ендпоінти:
  - `GET /posts` — список постів з пагінацією (page, limit)
  - `GET /posts/:id` — отримати пост за id
  - `POST /posts` — додати новий пост
  - `PUT /posts/:id` — оновити пост за id
  - `DELETE /posts/:id` — видалити пост за id
- Пагінація: параметри page, limit, у відповіді — масив постів та meta-інформація
- Штучна затримка 3 секунди на кожен запит
- Всі відповіді у форматі JSON

## Контракти API

### GET /posts

**Параметри запиту:**

- `page` (number, optional, default: 1)
- `limit` (number, optional, default: 10)

**Відповідь:**

```json
{
  "posts": [Post, ...],
  "meta": {
    "total": number,
    "page": number,
    "pages": number
  }
}
```

### GET /posts/:id

**Відповідь:**

```json
Post
```

або

```json
{ "error": "Post not found" }
```

### POST /posts

**Тіло запиту:**

```json
{
  "authorId": "string",
  "title": "string",
  "body": "string",
  "likesNumber": number,      // optional
  "dislikesNumber": number    // optional
}
```

**Відповідь:**

```json
Post
```

### PUT /posts/:id

**Тіло запиту:**

```json
{
  "authorId": "string",
  "title": "string",
  "body": "string",
  "likesNumber": number,
  "dislikesNumber": number
}
```

**Відповідь:**

```json
Post
```

або

```json
{ "error": "Post not found" }
```

### DELETE /posts/:id

**Відповідь:**

```json
Post
```

або

```json
{ "error": "Post not found" }
```

### Структура поста (Post)

```json
{
  "id": "string",
  "authorId": "string",
  "title": "string",
  "body": "string",
  "likesNumber": number,
  "dislikesNumber": number,
  "createdAt": "string (ISO)"
}
```

## Запуск

1. Встановіть залежності:
   ```
   npm install
   ```
2. Запустіть сервер:
   ```
   npm start
   ```

Сервер буде доступний на http://localhost:3001

## Файл даних

Файл `posts.json` містить масив постів. Приклад:

```json
[
  {
    "id": "post-1",
    "authorId": "CryptoVision",
    "title": "Майбутнє штучного інтелекту: що нас чекає?",
    "body": "Штучний інтелект стрімко розвивається...",
    "likesNumber": 153,
    "dislikesNumber": 28,
    "createdAt": "2025-05-18T10:20:00.000Z"
  }
]
```

## Ліцензія

MIT
