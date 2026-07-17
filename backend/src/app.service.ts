import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppConfig } from "./config/config";

@Injectable()
export class AppService {
	constructor(private configService: ConfigService<AppConfig, true>) {}

	getHello(): string {
		return `Hello World! ${this.configService.get("port")}`;
	}
}
