'use strict';

module.exports = {
	webpack: (config) => {
		[
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
		].forEach((item) => {
			config.watchOptions.ignored.push(item);
		});
		return config;
	},
	webpack5: true,
};
