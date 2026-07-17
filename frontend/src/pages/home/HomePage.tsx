import { useTranslate } from "@shared/i18n";
import React, { useEffect } from "react";

export const HomePage: React.FC = () => {
	const { t } = useTranslate();

	useEffect(() => {
		document.title = `Port | ${t("title")}`;
	}, [t]);

	return (
		<div>
			<h1>home</h1>
		</div>
	);
};
