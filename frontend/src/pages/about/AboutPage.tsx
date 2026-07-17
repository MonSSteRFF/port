import { useTranslate } from "@shared/i18n";
import React, { useEffect } from "react";

export const AboutPage: React.FC = () => {
	const { t } = useTranslate();

	useEffect(() => {
		document.title = `Port | ${t("title")}`;
	}, [t]);

	return (
		<div>
			<h1>about</h1>
		</div>
	);
};
