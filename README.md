# Port

Monorepo with backend and frontend, managed via pnpm workspaces.

## Structure

```
port/
├── backend/    - NestJS API
├── frontend/   - React + Vite SPA
├── infra/      — Docker and deployment
└── package.json
```

## Dependencies

| Package          | Description          |
|------------------|----------------------|
| `@biomejs/biome` | Linter and formatter |

## Setup and Running

```bash
# Install all workspace dependencies
pnpm install

# Development — frontend
pnpm dev:front

# Development — backend
pnpm dev:back

# Development — backend in Docker
pnpm dev:back_docker

# Development — all services in Docker
pnpm dev:docker

# Production build
pnpm build
```

## Commands (package.json)

| Command                  | Description                                 |
|--------------------------|---------------------------------------------|
| `pnpm dev:docker`        | Start all services via Docker Compose       |
| `pnpm dev:front`         | Start frontend in dev mode (Vite)           |
| `pnpm dev:back`          | Start backend in dev mode (NestJS watch)    |
| `pnpm dev:back_docker`   | Start backend in dev mode with Docker env   |
| `pnpm build:front`       | Build frontend                              |
| `pnpm build:back`        | Build backend                               |
| `pnpm build`             | Build backend and frontend                  |
| `pnpm start`             | Run production backend                      |

## Services and Ports

### Services

| Service  | Description                   | Image / Build                                    |
|----------|-------------------------------|--------------------------------------------------|
| mongodb  | MongoDB database              | `mongo:latest`                                   |
| backend  | NestJS API server             | `infra/dev.Dockerfile` / `infra/prod.Dockerfile` |
| frontend | React SPA (served by backend) | Vite dev server / bundled into backend           |

### Ports

| Service  | Host Port | Container Port | Network  | Published |
|----------|-----------|----------------|----------|-----------|
| backend  | 3000      | 3000           | external | Yes       |
| mongodb  | -         | 27017          | internal | No        |
| frontend | -         | 5000           | internal | No        |

- **External** — accessible from the host machine.
- **Internal** — accessible only within the `port_network` Docker bridge network.

### Environments

*dev* - "Not tested now"
- frontend run by `pnpm dev:front`
- backend run by `pnpm dev:back`
- all databases run by `pnpm run dev:db`

*dev_docker*
- frontend, backend, all databases start on one docker-compose by `pnpm dev:docker`

*prod*
- build front by `pnpm run build:front`
- build back by `pnpm run build:back`
- now all builded in './dist/' dir
- start from `pnpm run start`

*test* - "WIP"

## Further Reading

- [Backend — scripts and dependencies](backend/README.md)
- [Frontend — scripts and dependencies](frontend/README.md)
- [TODO LIST](TODO.md)
