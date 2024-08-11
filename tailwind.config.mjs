/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily:{
				Merri: ['Merriweather']
			}
		},
	},
	plugins: [ require('flowbite/plugin')],
}
