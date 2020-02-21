module.exports = {

	options: {
		map: true
	},

	development: {
		options: {
			processors: function() {
				return [
					require("postcss-round-float")(8),
					require('autoprefixer')()
				]
			}
		},
		files: {
			'<%=stylesBasepath%>/styles.css': '<%=stylesBasepath%>/styles.css'
		}
	}

};
