import { tPath } from "@shared/i18n/tPath";
import { useTranslation } from "react-i18next";

export const useTranslate = (path?: string) => {
	if (!path) {
		throw new Error("useTranslate was called without a path, and no auto-path was injected!");
	}

	return useTranslation(...tPath(path));
};
