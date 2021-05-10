module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}' ],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			translate: {
				out: '140%',
				out1: '100%',
				out2: '200%',
				out3: '300%',
				'-out': '-140%',
				'-out1': '-100%',
				'-out2': '-200%',
				'-out3': '-300%'
				// "out2":"100%"
			},
			transitionDelay: {
				'5000': '5000'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	mode: 'jit'
};
