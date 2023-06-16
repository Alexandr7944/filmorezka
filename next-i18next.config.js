const path = require('path');
module.exports = {
	i18n: {
		locales: ["en", "ru"],   
		defaultLocale: "ru",
		localeDetection: false
	  },
	  localePath: path.resolve('./src/locales'),
}