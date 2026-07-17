interface Env {
	NODE_ENV: "dev" | "dev_docker" | "prod" | "test";
	PORT: number;
	MONGO_DB_URL: string;
}

export const env: Env = {
	NODE_ENV: (process.env.NODE_ENV ?? "dev") as Env["NODE_ENV"],
	PORT: (process.env.PORT ? Number(process.env.PORT) : 3000) as Env["PORT"],
	MONGO_DB_URL: (process.env.MONGO_DB_URL ?? "mongodb://localhost:27017/port") as Env["MONGO_DB_URL"],
};
