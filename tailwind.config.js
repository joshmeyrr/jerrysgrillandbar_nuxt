/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			colors: {
				white: '#FFFBF6',
				green: '#020703',
				gold: '#C5A467',
			},
			fontFamily: {
				serif: ['Lora', 'serif'],
				'sans-serif': ['Lato', 'sans-serif'],
				cursive: ['Feeling Passionate', 'cursive'],
			},
		},
	},
	plugins: [],
};
