import type { routes } from "@shared/config/routes";
import { useLocation, useSearch } from "wouter";
import type { GetQueryParams } from "./types";

export const useTypedSearchParams = <K extends keyof typeof routes>(_pageKey: K) => {
	const searchString = useSearch();
	const [location, setLocation] = useLocation();

	const basePath = location.split("?")[0];

	const params = Object.fromEntries(new URLSearchParams(searchString)) as GetQueryParams<K>;

	const setSearchParams = (nextParams: GetQueryParams<K> | ((prev: GetQueryParams<K>) => GetQueryParams<K>), options?: { replace?: boolean }) => {
		const next = typeof nextParams === "function" ? nextParams(params) : nextParams;
		const search = new URLSearchParams(next as Record<string, string>).toString();

		const newLocation = search ? `${basePath}?${search}` : basePath;
		setLocation(newLocation, options);
	};

	return [params, setSearchParams] as const;
};
