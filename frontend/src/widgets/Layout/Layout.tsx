import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavBar } from "@widgets/Layout/NavBar";
import React from "react";
import styles from "./Layout.module.css";

interface IProps {
	children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
	const [opened, { toggle }] = useDisclosure(false);

	return (
		<AppShell
			header={{ height: 50 }}
			navbar={{
				width: 220,
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
		>
			<AppShell.Header p="sm" h={50}>
				<Group h="100%" align="center" wrap="nowrap">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

					<Group justify="space-between" flex={1} wrap="nowrap">
						<Text size="lg" fw={700}>
							Port
						</Text>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar className={styles.layout_navbar}>
				<NavBar />
			</AppShell.Navbar>

			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
};
