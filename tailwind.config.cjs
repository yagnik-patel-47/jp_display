/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        rubik: ["Rubik Variable", ...defaultTheme.fontFamily.sans],
        decorative: ["Cinzel Variable", ...defaultTheme.fontFamily.serif],
        japanese: ["Noto Serif JP", ...defaultTheme.fontFamily.serif],
      },
		},
	},
	plugins: [],
}
