import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true, // Para permitir imagens estáticas no GitHub Pages
	},
	basePath: isProd ? "/blog" : "", // Defina o nome do repositório aqui
	assetPrefix: isProd ? "/blog/" : "",
};

export default nextConfig;
