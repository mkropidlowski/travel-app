/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#4B55C0',
				},
				secondary: {
					DEFAULT: '#202945',
				},
			},
			width: {
				1440: '1440px',
			},
			height: {
				navBarHeight: '3.75rem',
			},
			minHeight: {
				navBarHeight: '3.75rem',
			},
		},
		screens: {
			xxs: '416px',
			xs: '536px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1440px',
		},
	},
	plugins: [],
};

