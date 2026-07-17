import { App } from "@app/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (!root) throw new Error("Root not found");

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
