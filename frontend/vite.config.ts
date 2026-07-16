import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
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
});
