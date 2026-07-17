/** biome-ignore-all lint/correctness/noUnusedVariables: global types */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ViteTypeOptions {
	strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
	APP_MODE: "dev" | "dev_docker" | "test" | "prod";
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
