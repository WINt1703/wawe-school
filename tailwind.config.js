/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				raleway: ["Raleway", "sans-serif"]
			},
			fontWeight: {
				700: 700
			}
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark"]
	}
}
