import { NextFunction, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const viteProxy = createProxyMiddleware({
	target: process.env.VITE_PROXY_TARGET,
	changeOrigin: true,
	ws: true,
	xfwd: true,
	prependPath: true,
	on: {
		error: (err) => console.log("PROXY_ERROR: ", err),
		start: () => console.log("PROXY_START"),
		end: () => console.log("PROXY_END"),
		close: () => console.log("PROXY_CLOSE"),
		open: () => console.log("PROXY_OPEN"),
		proxyReq: (proxyReq, req) => {
			proxyReq.setHeader("host", "localhost:5000");
			proxyReq.setHeader("origin", "http://localhost:5000");

			console.log("PROXY_REQ");
		},
		proxyRes: () => console.log("PROXY_RES"),
		proxyReqWs: () => console.log("PROXY_REQ_WS"),
		econnreset: () => console.log("PROXY_ECONNRESET"),
	},
});

export function viteProxyMiddleware(req: Request, res: Response, next: NextFunction) {
	if (req.url.startsWith("/api")) {
		return next();
	}

	return viteProxy(req, res, next);
}
