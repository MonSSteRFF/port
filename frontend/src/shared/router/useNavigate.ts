import { useLocation } from "wouter";
import type { AppLink, GetQueryParams, NavigateArgsList } from "./types";

export const useNavigate = () => {
	const [, setLocation] = useLocation();

	return <L extends AppLink>(link: L, query?: GetQueryParams<L>, ...args: NavigateArgsList<L>) => {
		let path: string = link;
		const [params, options] = args;

		if (params) {
			Object.entries(params).forEach(([k, v]) => {
				if (path.includes(`:${k}*`)) {
					path = path.replace(`:${k}*`, String(v));
				} else {
					path = path.replace(`:${k}`, String(v));
				}
			});
		}

		if (query && Object.keys(query).length > 0) {
			const search = new URLSearchParams(query as Record<string, string>).toString();
			path += `?${search}`;
		}

		setLocation(path, options);
	};
};
