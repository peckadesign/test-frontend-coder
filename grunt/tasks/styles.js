module.exports = function(grunt) {

	grunt.registerMultiTask('styles', function() {
		grunt.task.run(this.data.tasks);
	});

};
