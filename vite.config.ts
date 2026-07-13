import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		{
			enforce: "pre",
			...mdx(),
		},
		reactRouter(),
	],
	resolve: { tsconfigPaths: true },
	assetsInclude: ["./public/assets/*"],
	publicDir: "./public",
});
