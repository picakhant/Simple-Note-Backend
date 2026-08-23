# Simple-Note-Backend

Simple Express + TypeScript + Prisma + SQLite backend.

## Getting Started

```bash
npm install
npx prisma migrate dev   # create db + apply migrations
npm run dev              # start dev server on :3000
```

Health check: `GET http://localhost:3000/api/health`


## Folder structure under src dir

```
├── src/
│   ├── config/           # DB connection (prisma client), env variables
│   ├── controllers/      # Handle req/res, input validation
│   ├── models/           # Database schema (prisma/schema.prisma lives here)
│   ├── routes/           # API endpoint definitions
│   ├── middleware/       # Error handling, logging
│   ├── app.ts            # Express app initialization
│   └── server.ts         # Entry point (starts server)
```

## Adding a new feature (e.g. notes)

1. **Model** — define in `src/models/schema.prisma`, then `npm run migrate:dev`
2. **Service** — business logic in `src/services/note.service.ts`
3. **Controller** — req/res handlers in `src/controllers/note.controller.ts`
4. **Route** — endpoints in `src/routes/note.routes.ts`, mount in `src/routes/index.ts`
