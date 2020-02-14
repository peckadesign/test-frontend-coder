module.exports = {

	options: {
		ieCompat: false,
		sourceMap: true,
		sourceMapBasepath: '<%=stylesBasepath%>'
	},

	common: {
		files: {
			'<%=stylesBasepath%>/styles.css': '<%=stylesBasepath%>/styles.less'
		}
	}

};
