import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import i18nextLoader from "vite-plugin-i18next-loader";
import svgr from "vite-plugin-svgr";
import { buildI18nResources } from "./scripts/generate-i18n";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		i18nextLoader({
			paths: ["./src"],
			namespaceResolution: "relativePath",
		}),
		svgr({
			include: "**/*.svg?react",
		}),
		{
			name: "watch-i18n",
			buildStart: () => {
				buildI18nResources();
			},
			handleHotUpdate: ({ file }) => {
				if (file.endsWith(".i18n.yml")) {
					buildI18nResources();
				}
			},
		},
		{
			name: "handle-path",
			transform(code, id) {
				if (id.includes("src/") && /\.[jt]sx?$/.test(id)) {
					const relativePath = id.split("src/")[1].split(".")[0];
					return code.replace(/useTranslate\(\s*\)/g, `useTranslate("${relativePath}")`);
				}
				return code;
			},
		},
	],
	server: {
		port: 5000,
		strictPort: true,
		host: true,
		allowedHosts: ["frontend"],
	},
	build: {
		outDir: "../dist/client",
		emptyOutDir: true,
	},
	resolve: {
		tsconfigPaths: true,
	},
});
