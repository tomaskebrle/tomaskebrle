const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'grue-0': '#0e0c1f',
				'grue-1': '#2f323e',
				'grue-2': '#4d5964',
				'grue-3': '#748380',
				'grue-4': '#b8c7bf',
				'grue-red': '#916a74',
				'grue-orange': '#d8a48b',
				'grue-purple': '#777382',
				'grue-blue': '#88a0a8',
				'grue-lightblue': '#b8c7bf'
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')],
	safelist: ['h-screen', 'h-7/12']
};

module.exports = config;
