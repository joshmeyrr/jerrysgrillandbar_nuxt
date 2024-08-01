// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	build: {
		transpile: [
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-brands-svg-icons',
			'@fortawesome/free-regular-svg-icons',
			'@fortawesome/free-solid-svg-icons',
			'@fortawesome/vue-fontawesome',
		],
	},
	modules: ['@nuxt/image'],
});
