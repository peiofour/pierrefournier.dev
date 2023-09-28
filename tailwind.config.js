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
			},
			colors: {
				'primary-dark': '#e6e6e6',
				'primary': '#333',
				'background': '#edf6f9',
				'background-dark': '#082032',
				'button': '#ff1e56',
				'button-hover': '#ff1e56a1',
			}
		},
	},
	plugins: [
		plugin(function({ addBase, theme}) {
			addBase({
				'h1': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.extrabold') },
				'h2': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
				'h3': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
				'h4': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.medium') },
				'h5': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.medium') },
				'h6': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.normal') },
				'p': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.normal') },
				'em': { fontSize: theme('fontSize.sm'), fontStyle: 'italic', fontWeight: theme('fontWeight.normal') },
			})
		})
	],
}
