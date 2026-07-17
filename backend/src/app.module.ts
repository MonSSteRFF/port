import { join } from "node:path";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { env, envConfig } from "./config/env";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env.${env.node_env || "dev"}`,
			isGlobal: true,
			load: [envConfig],
		}),

		...(env.node_env === "prod"
			? [
					ServeStaticModule.forRoot({
						rootPath: join(__dirname, "..", "client"),
						exclude: ["/api*"],
					}),
				]
			: []),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
