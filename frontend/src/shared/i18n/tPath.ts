import type { UseTranslationOptions } from "react-i18next";

export const tPath = (url: string, options?: Omit<UseTranslationOptions<string>, "keyPrefix">): [string, UseTranslationOptions<string>] => {
	const path = url.split(".")[0].split("/");

	if (path[path.length - 1] === path[path.length - 2]) {
		path.splice(-1, 1);
	}
	const ns = path.shift();

	return [
		ns || "",
		{
			keyPrefix: path.join("."),
			...options,
		},
	];
};
