'use strict';

const copy = require('copy');

copy('lib/**/*.html', 'dist', error => {
	if (error) {
		return console.log(error);
	}
	console.log('Copied html files to dist');
});
