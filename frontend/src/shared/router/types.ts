import type { QueryParamsConfig, routes } from "@shared/config/routes";

export type AppLink = (typeof routes)[keyof typeof routes];

export type ExtractPathParams<T extends string> = T extends `${infer _}:${infer Param}/${infer Rest}`
	? Param | ExtractPathParams<`/${Rest}`>
	: T extends `${infer _}:${infer Param}*`
		? Param
		: T extends `${infer _}:${infer Param}`
			? Param
			: never;

export type NavigateArgsList<L extends AppLink> =
	ExtractPathParams<L> extends never
		? [params?: never, options?: { replace?: boolean }]
		: [params: Record<ExtractPathParams<L>, string | number>, options?: { replace?: boolean }];

export type GetQueryParams<L extends AppLink> = L extends keyof QueryParamsConfig ? QueryParamsConfig[L] : Record<string, never>;
