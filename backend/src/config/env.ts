import { plainToInstance } from "class-transformer";
import { IsEnum, IsNumber, IsString, validateSync } from "class-validator";

class EnvironmentVariables {
	@IsEnum(["dev", "dev_docker", "prod", "test"])
	NODE_ENV!: string;

	@IsNumber()
	PORT!: number;

	@IsString()
	MONGO_DB_URL!: string;

	@IsString()
	VITE_PROXY_TARGET!: string;
}

export interface EnvConfig {
	node_env: string;
	port: number;
	mongodb_url: string;
	vite_proxy_target: string;
}

export const envConfig = (): EnvConfig => {
	const envConfig = process.env;

	const validatedConfig = plainToInstance(EnvironmentVariables, envConfig, {
		enableImplicitConversion: true,
	});

	const errors = validateSync(validatedConfig);
	if (errors.length > 0) {
		throw new Error(`Config error: ${errors.toString()}`);
	}

	return {
		node_env: validatedConfig.NODE_ENV,
		port: validatedConfig.PORT,
		mongodb_url: validatedConfig.MONGO_DB_URL,
		vite_proxy_target: validatedConfig.VITE_PROXY_TARGET,
	};
};

export const env = envConfig();
