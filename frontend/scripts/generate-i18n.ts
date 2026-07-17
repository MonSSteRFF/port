import fs, { globSync } from "node:fs";
import path from "node:path";
import { TLanguage } from "@shared/i18n";
import { load } from "js-yaml";

type TranslationLeaf = string | { [key: string]: TranslationLeaf };
type YamlContent = Record<TLanguage, Record<string, TranslationLeaf>>;

interface ResourceBundle {
	[key: string]: TranslationLeaf;
}

export const buildI18nResources = () => {
	const resources: Record<TLanguage, ResourceBundle> = { en: {}, ru: {} };

	const filePaths = globSync("src/**/*.i18n.yml");

	filePaths.forEach((filePath) => {
		const fileContent = fs.readFileSync(filePath, "utf8");
		const content = load(fileContent) as YamlContent;
		if (!content) return;

		const cleanPath = filePath.replace(`src${path.sep}`, "").replace(".i18n.yml", "");

		const pathParts = cleanPath.split(path.sep).filter((part) => part !== "shared" && part !== "i18n");

		(Object.entries(content) as Array<[TLanguage, Record<string, TranslationLeaf>]>).forEach(([lang, data]) => {
			if (!resources[lang]) resources[lang] = {};

			let current = resources[lang];

			pathParts.forEach((part, index) => {
				if (index === pathParts.length - 1) {
					current[part] = data;
				} else {
					if (!current[part] || typeof current[part] === "string") {
						current[part] = {};
					}
					current = current[part] as ResourceBundle;
				}
			});
		});
	});

	const outDir = path.resolve(process.cwd(), "src/shared/i18n");
	const outPath = path.join(outDir, "compiled.json");

	if (!fs.existsSync(outDir)) {
		fs.mkdirSync(outDir, { recursive: true });
	}

	fs.writeFileSync(outPath, JSON.stringify(resources, null, 2));

	console.log(`✅ i18n: files ${filePaths.length} -> ${outPath}`);
};
