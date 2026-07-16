import { NextFunction, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

console.log("logs: ", process.env.NODE_ENV);
console.log("proxy: ", process.env.VITE_PROXY_TARGET);

const viteProxy = createProxyMiddleware({
	target: process.env.VITE_PROXY_TARGET,
	changeOrigin: true,
	ws: true,
	on: {
		error: (err) => console.log("PROXY_ERROR: ", err),
		start: () => console.log("PROXY_START"),
		end: () => console.log("PROXY_END"),
		close: () => console.log("PROXY_CLOSE"),
		open: () => console.log("PROXY_OPEN"),
		proxyReq: () => console.log("PROXY_REQ"),
		proxyRes: () => console.log("PROXY_RES"),
		proxyReqWs: () => console.log("PROXY_REQ_WS"),
		econnreset: () => console.log("PROXY_ECONNRESET"),
	},
});

export function viteProxyMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	console.log(req.url);

	if (req.url.startsWith("/api")) {
		return next();
	}

	return viteProxy(req, res, next);
}
