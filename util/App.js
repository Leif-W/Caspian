'use strict';

const path = require('path');

const setBaseDir = () => {
	global.__basedir = path.resolve(__dirname, '..') ;
}

module.exports = {
	setBaseDir,
}
