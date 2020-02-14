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
	},

	production: {
		options: {
			processors: function() {
				return [
					require("postcss-round-float")(8),
					require('autoprefixer')(),
					require('cssnano')({
						discardComments: {
							removeAll: true
						}
					})
				]
			}
		},
		files: {
			'<%=stylesBasepath%>/styles.css': '<%=stylesBasepath%>/styles.css'
		}
	}

};
