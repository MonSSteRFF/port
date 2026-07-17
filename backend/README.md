# Backend

NestJS API server.

## Dependencies

### Runtime

| Package                    | Description                          |
|----------------------------|--------------------------------------|
| `@nestjs/common`           | Core NestJS decorators and utilities |
| `@nestjs/core`             | Framework core                       |
| `@nestjs/platform-express` | Express adapter                      |
| `@nestjs/serve-static`     | Static file serving                  |
| `http-proxy-middleware`    | Request proxying                     |
| `reflect-metadata`         | Metadata for decorators              |
| `rxjs`                     | Reactive extensions                  |

### Dev

| Package              | Description                   |
|----------------------|-------------------------------|
| `@nestjs/cli`        | NestJS CLI                    |
| `@nestjs/config`     | Configuration via .env        |
| `@nestjs/schematics` | Code generation schematics    |
| `@nestjs/swagger`    | Auto-generated Swagger docs   |
| `@nestjs/testing`    | Testing utilities             |
| `@types/express`     | Express type definitions      |
| `@types/jest`        | Jest type definitions         |
| `@types/node`        | Node.js type definitions      |
| `@types/supertest`   | Supertest type definitions    |
| `class-transformer`  | DTO transformation            |
| `class-validator`    | DTO validation                |
| `globals`            | Biome global variables        |
| `jest`               | Test framework                |
| `prettier`           | Formatter                     |
| `source-map-support` | Source map support            |
| `supertest`          | HTTP testing                  |
| `ts-jest`            | Jest adapter for TypeScript   |
| `ts-loader`          | TypeScript loader for webpack |
| `ts-node`            | TypeScript execution          |
| `tsconfig-paths`     | Path aliases                  |
| `typescript`         | TypeScript compiler           |

## Scripts

| Command                 | Description                                           |
|-------------------------|-------------------------------------------------------|
| `pnpm build`            | Build the project (`nest build`)                      |
| `pnpm start`            | Start in watch mode (`nest start --watch`)            |
| `pnpm start:dev`        | Start in dev mode (`NODE_ENV=dev`)                    |
| `pnpm start:dev_docker` | Start in dev mode with Docker (`NODE_ENV=dev_docker`) |
| `pnpm start:prod`       | Run production build (`NODE_ENV=prod`)                |
| `pnpm start:test`       | Start in test environment (`NODE_ENV=test`)           |
| `pnpm test`             | Run tests (Jest)                                      |
| `pnpm test:watch`       | Run tests in watch mode                               |
| `pnpm test:cov`         | Run tests with coverage                               |
| `pnpm test:debug`       | Run tests with debugging (inspect)                    |
| `pnpm test:e2e`         | Run e2e tests                                         |
| `pnpm lint`             | Lint and auto-fix (Biome)                             |
| `pnpm format`           | Format and auto-fix (Biome)                           |
