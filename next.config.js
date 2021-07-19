'use strict';

const os = require('./util/OS.js');
const app = require('./util/App.js');
const path = require('path');

module.exports = {
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

		if (os.isTermux()) {
			app.setBaseDir();
			let ignore_path = global.__basedir;

			// ignore all paths above project's basedir
			while(ignore_path != '/') {
				ignore_path = path.resolve(ignore_path, '..');
				ignoredFiles.push(ignore_path);
			}
		}

		ignoredFiles.forEach((item) => {
			config.watchOptions.ignored.push(item);
		});

		return config;
	},
	webpack5: true,
};
