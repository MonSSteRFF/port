import { NextFunction, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { env } from "../config/env";

const viteProxy = createProxyMiddleware({
	target: env.vite_proxy_target,
	changeOrigin: true,
	ws: true,
	xfwd: true,
	prependPath: true,
});

export function viteProxyMiddleware(req: Request, res: Response, next: NextFunction) {
	if (req.url.startsWith("/api")) {
		return next();
	}

	return viteProxy(req, res, next);
}
