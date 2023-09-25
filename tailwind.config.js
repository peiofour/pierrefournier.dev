/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Circular Std', 'sans-serif'],
			}
		},
	},
	plugins: [
		plugin(function({ addBase, theme}) {
			addBase({
				'h1': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold') },
				'h2': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
				'h3': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
				'h4': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.medium') },
				'h5': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.medium') },
				'h6': { fontSize: theme('fontSize.base'), fontWeight: theme('fontWeight.medium') },
			})
		})
	],
}
