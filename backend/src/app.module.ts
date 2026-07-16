import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import config from "./config/config";

const isProd = process.env.NODE_ENV === "prod";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env.${process.env.NODE_ENV || "dev"}`,
			isGlobal: true,
			load: [config],
		}),

		...(isProd
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
