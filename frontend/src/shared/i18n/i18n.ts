import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./compiled.json";

export const SupportedLanguages = ["en", "ru"];

i18n.use(initReactI18next).init({
	resources,
	supportedLngs: SupportedLanguages,
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});

export default i18n;
