const fs = require('fs')

function getResponsiveStyles() {
	
	const responsiveStyles = fs.readFileSync('./webview/responsive-styles.css', 'utf8');
	return responsiveStyles;
}

module.exports = { getResponsiveStyles };