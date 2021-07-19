'use strict';

const isTermux = () => {
	if (process.env['TERMUX_VERSION']
		|| (
			process.env['HOME']
			&& process.env['HOME'].includes('termux')
		)
	) {
		return true;
	}
	return false;
};

module.exports = {
	isTermux,
};
