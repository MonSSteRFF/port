/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// biome-ignore lint/correctness/noUnusedVariables: need for remove Record<string, unkown> from import.meta.env (strict types)
interface ViteTypeOptions {
	strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
	APP_MODE: "dev" | "dev_docker" | "test" | "prod";
}

// biome-ignore lint/correctness/noUnusedVariables: apply types for import.meta.env
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
