# Frontend

React SPA built with Vite and Mantine UI library.

## Dependencies

### Runtime

| Package                      | Description                 |
|------------------------------|-----------------------------|
| `react`                      | React core                  |
| `react-dom`                  | React DOM renderer          |
| `@mantine/core`              | Mantine UI components       |
| `@mantine/charts`            | Charts (based on Recharts)  |
| `@mantine/code-highlight`    | Code highlighting           |
| `@mantine/dates`             | Date components             |
| `@mantine/form`              | Form management             |
| `@mantine/hooks`             | Mantine hooks               |
| `@mantine/notifications`     | Notifications               |
| `@tabler/icons-react`        | Tabler icons                |
| `dayjs`                      | Date manipulation           |
| `i18next`                    | Internationalization        |
| `react-i18next`              | React wrapper for i18next   |
| `js-yaml`                    | YAML parsing                |
| `recharts`                   | Charting library            |
| `vite-plugin-i18next-loader` | Translation loader for Vite |
| `vite-plugin-svgr`           | SVG as React components     |
| `wouter`                     | Routing                     |
| `zustand`                    | State management            |

### Dev

| Package                | Description               |
|------------------------|---------------------------|
| `@types/node`          | Node.js type definitions  |
| `@types/react`         | React type definitions    |
| `@types/react-dom`     | ReactDOM type definitions |
| `@vitejs/plugin-react` | React plugin for Vite     |
| `typescript`           | TypeScript compiler       |
| `vite`                 | Bundler and dev server    |

## Scripts

| Command        | Description                               |
|----------------|-------------------------------------------|
| `pnpm dev`     | Start Vite dev server                     |
| `pnpm build`   | Production build (`tsc -b && vite build`) |
| `pnpm lint`    | Lint and auto-fix (Biome)                 |
| `pnpm preview` | Preview production build                  |
