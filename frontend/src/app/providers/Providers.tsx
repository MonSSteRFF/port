import React from "react";
import { Mantine } from "./Mantine";
import "@shared/i18n";
import { Modals } from "@app/providers/Modals";

interface IProps {
	children: React.ReactNode;
}

export const Providers: React.FC<IProps> = ({ children }) => {
	return (
		<Mantine>
			<Modals />
			{children}
		</Mantine>
	);
};
