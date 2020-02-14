module.exports = {

	// Web
	development: {
		tasks: [
			'less:common',
			'postcss:development'
		]
	},

	production: {
		tasks: [
			'less:common',
			'postcss:production'
		]
	},

};
