import { Button } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();

	return (
		<div>
			<Button onClick={() => i18n.changeLanguage("ru")}>ru</Button>
			<Button onClick={() => i18n.changeLanguage("en")}>en</Button>
		</div>
	);
};
