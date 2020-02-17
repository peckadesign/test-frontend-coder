/**
 * Gruntfile pro front-end projektu.
 */
module.exports = function(grunt) {
	require('time-grunt')(grunt);

	var path = require('path');

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt/config'),
		jitGrunt: {
			customTasksDir: 'grunt/tasks'
		},
		data: {
			stylesBasepath: 'www/styles'
		}
	});

};
