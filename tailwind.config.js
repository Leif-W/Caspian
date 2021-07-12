'use strict';

module.exports = {
	mode: 'jit',
	purge: [
		'./src/pages/*.js',
	],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				caspian_blue: {
					dark: '#17478f',
					default: '#1f5fbf',
					light: '#2777f0',
					night: '#0f2f5f',
				},
				caspian_gold: {
					dark: '#8f5f17',
					default: '#bf7f1f',
					light: '#f0a027',
					night: '#5f3f0f',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
	],
};
