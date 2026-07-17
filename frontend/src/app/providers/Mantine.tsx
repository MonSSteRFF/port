import React from "react";

import "@shared/styles/mantine.css";

import { createTheme, MantineProvider } from "@mantine/core";

interface IProps {
	children: React.ReactNode;
}

const theme = createTheme({
	primaryColor: "gray",
	fontFamily: "Onest, sans-serif",
});

export const Mantine: React.FC<IProps> = ({ children }) => {
	return (
		<MantineProvider theme={theme} deduplicateInlineStyles>
			{children}
		</MantineProvider>
	);
};
