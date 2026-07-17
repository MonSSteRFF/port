import { Providers } from "./providers/Providers";
import "@shared/styles/index.css";
import { Router } from "@app/router/Router";
import { Layout } from "@widgets/Layout/Layout";

export const App = () => {
	return (
		<Providers>
			<Layout>
				<Router />
			</Layout>
		</Providers>
	);
};
