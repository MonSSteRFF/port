import { useSettingsModal } from "@features/SettingsModal";
import { Box, Divider, Flex, NavLink, Stack } from "@mantine/core";
import { routes } from "@shared/config";
import { useTranslate } from "@shared/i18n";
import { useNavigate } from "@shared/router";
import { IconHome, IconSettings } from "@tabler/icons-react";
import { useRoute } from "wouter";

export const NavBar = () => {
	const { setOpened } = useSettingsModal();

	const navigate = useNavigate();
	const { t } = useTranslate();

	const [isHome] = useRoute(routes.HOME);
	const [isAbout] = useRoute(routes.ABOUT);

	const data = [
		{ label: t("home"), icon: IconHome, active: isHome, action: () => navigate(routes.HOME) },
		{ label: t("about"), icon: IconHome, active: isAbout, action: () => navigate(routes.ABOUT) },
	];

	return (
		<Flex component="nav" h="100dvh" w={"100%"} direction="column">
			<Stack flex={1} gap={0} style={{ overflowY: "auto" }}>
				{data.map((item) => (
					<NavLink
						key={item.label}
						label={item.label}
						leftSection={<item.icon size={16} stroke={1.5} />}
						active={item.active}
						onClick={(event) => {
							if (!item.active) {
								event.preventDefault();
								item.action();
							}
						}}
					/>
				))}
			</Stack>

			<Divider />

			<Box>
				<NavLink label={t("settings")} leftSection={<IconSettings size={16} stroke={1.5} />} onClick={() => setOpened(true)} />
			</Box>
		</Flex>
	);
};
