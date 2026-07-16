import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { viteProxyMiddleware } from "./common/vite-proxy.middleware";
import { setupSwagger } from "./config/swagger.config";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix("api");

	if (process.env.NODE_ENV !== "production") {
		app.use(viteProxyMiddleware);
		setupSwagger(app);
	}

	await app.listen(process.env.PORT || 3000);
}

bootstrap();
