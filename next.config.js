'use strict';

module.exports = {
	images: {
		domains: [
			'fakestoreapi.com',
		],
	},
	webpack: (config) => {
		let ignoredFiles = [
			// Vim ignore patterns pulled from .gitignore
			// Transformed to glob-to-regex syntax

			// Vim Swap files
			'**/[._]*.s[a-v][a-z]',
			'**/[._]*.sw[a-p]',
			'**/[._]s[a-rt-v][a-z]',
			'**/[._]ss[a-gi-z]',
			'**/[._]sw[a-p]',
			// Vim Session
			'**/Session{,x}.vim',
			// Vim Temporary
			'**/.netrwhist',
			// Vim tag files
			'**/tags',
			// Vim Persistent undo
			'**/[._]*.un~',
		];

		ignoredFiles.forEach((item) => {
			config.watchOptions.ignored.push(item);
		});

		return config;
	},
	webpack5: true,
};
