module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	images: {
		unoptimized: true,
		domains: ['img.icons8.com'],
	},
	reactStrictMode: true,
	experimental: { appDir: true },
};

