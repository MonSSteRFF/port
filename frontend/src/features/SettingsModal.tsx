import { LanguageSwitcher } from "@features/LanguageSwitcher";
import { Button, Code, Group, Modal, Stack } from "@mantine/core";
import { useTranslate } from "@shared/i18n";
import React from "react";
import { create } from "zustand";
import { version as backVersion } from "../../../backend/package.json";
import { version as appVersion } from "../../../package.json";
import { version as frontVersion } from "../../package.json";

interface ISettingsModalStore {
	opened: boolean;
	setOpened: (open: boolean) => void;
}

export const useSettingsModal = create<ISettingsModalStore>((set) => ({
	opened: false,
	setOpened: (opened) => set(() => ({ opened })),
}));

export const SettingsModal: React.FC = () => {
	const { t } = useTranslate();
	const { opened, setOpened } = useSettingsModal();

	return (
		<Modal title={t("title")} onClose={() => setOpened(false)} opened={opened} centered>
			<Stack>
				<LanguageSwitcher />
				<Button>{t("logout")}</Button>

				<Group>
					<Code fw={700}>f v{frontVersion}</Code>
					<Code fw={700}>b v{backVersion}</Code>
					<Code fw={700}>a v{appVersion}</Code>
				</Group>
			</Stack>
		</Modal>
	);
};
