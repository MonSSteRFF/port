import { plainToInstance } from "class-transformer";
import { IsEnum, IsNumber, IsString, validateSync } from "class-validator";

class EnvironmentVariables {
	@IsEnum(["dev", "dev_docker", "prod", "test"])
	NODE_ENV: string;

	@IsNumber()
	PORT: number;

	@IsString()
	MONGO_DB_URL: string;
}

export interface AppConfig {
	env: string;
	port: number;
	mongodb_url: string;
}

export default (): AppConfig => {
	const envConfig = process.env;

	const validatedConfig = plainToInstance(EnvironmentVariables, envConfig, {
		enableImplicitConversion: true,
	});

	const errors = validateSync(validatedConfig);
	if (errors.length > 0) {
		throw new Error(`Config error: ${errors.toString()}`);
	}

	return {
		env: validatedConfig.NODE_ENV,
		port: validatedConfig.PORT,
		mongodb_url: validatedConfig.MONGO_DB_URL,
	};
};
