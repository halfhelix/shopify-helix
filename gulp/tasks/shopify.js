var gulpShopify = require('gulp-shopify-upload');
var watch = require('gulp-watch');

module.exports = function(gulp, config, vault) {
	'use strict';

	var options = {
	  "basePath": config.shopify.basePath
	};

	gulp.task('shopify:watch', function() {
		return watch('./theme/+(assets|layout|config|snippets|templates|locales)/**')
	  		.pipe(gulpShopify(vault.shopify_api_key, vault.shopify_api_password, config.shopify.url, null, options));
	});

	gulp.task('shopify:deploy', function() {
  return gulp.src('./theme/+(assets|layout|config|snippets|templates|locales)/**')
    .pipe(gulpShopify(vault.shopify_api_key, vault.shopify_api_password, config.shopify.url, null, options));
	});
};
