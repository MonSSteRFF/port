import { NextFunction, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const viteProxy = createProxyMiddleware({
	target: process.env.VITE_PROXY_TARGET,
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
