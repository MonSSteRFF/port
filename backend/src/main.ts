import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { viteProxyMiddleware } from "./common/vite-proxy.middleware";
import config from "./config/env";
import { setupSwagger } from "./config/swagger.config";

const env = config();
const logger = new Logger("Global");

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix("api");

	if (env.node_env !== "prod") {
		app.use(viteProxyMiddleware);
		setupSwagger(app);
	}

	await app.listen(env.port);
}

bootstrap().then(() => {
	logger.log(`Server start on http://localhost:${env.port} in ${env.node_env} mode`);
});
