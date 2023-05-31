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
	typescript: {
		ignoreBuildErrors: true, // for testing delete after all
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		// Alias to tell resolve the Prisma Client properly
		alias: {
			'@prisma/client$': require.resolve('@prisma/client'),
		},
	},
};

