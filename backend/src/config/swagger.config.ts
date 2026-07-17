import * as fs from "node:fs";
import path from "node:path";
import { INestApplication, Logger } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import openapiTS, { astToString, OpenAPI3 } from "openapi-typescript";

export const setupSwagger = async (app: INestApplication) => {
	const logger = new Logger("Swagger");

	const config = new DocumentBuilder().setTitle("API").setVersion("1.0").build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api/docs", app, document);
	logger.log(`document created and served in http://localhost:${process.env.PORT}/api/docs`);

	const ast = await openapiTS(document as OpenAPI3);
	const outputPath = path.resolve("../frontend/src/entities/api/", "backend-types.ts");
	fs.writeFileSync(outputPath, astToString(ast), "utf8");

	logger.log(`type generated in ${outputPath}`);
};
