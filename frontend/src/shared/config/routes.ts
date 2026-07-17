export const routes = {
	AUTH_LOGIN: "/auth/login",
	AUTH_REGISTER: "/auth/register",
	AUTH_RESET_PASSWORD: "/auth/reset_password",
	AUTH_EMAIL_VERIFY: "/auth/email_verification",

	HOME: "/",
	ABOUT: "/about",

	NOT_FOUND: "/404",
} as const;

// biome-ignore lint/complexity/noBannedTypes: FIXME: Empty query now
export type QueryParamsConfig = {};
