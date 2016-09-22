var $ = require('gulp-load-plugins')();

module.exports = function(gulp, config) {

	'use strict';
	
	gulp.task('scss', function() {
		return gulp.src(config.sources.scss)
			.pipe($.plumber())
			.pipe($.if(config.sourcemaps === true, $.sourcemaps.init()))
			.pipe($.changed(config.destination))
			.pipe($.sass.sync({
				includePaths: config.modules.scss
			})
			.on('error', $.sass.logError))
			.pipe($.autoprefixer({
				browsers: config.browsers
			}))
			.pipe($.groupCssMediaQueries())
			.pipe($.csscomb())
			.pipe($.if(config.minify === true, $.cssnano() ))
			.pipe($.rename('main.css.liquid'))
			.pipe($.if(config.sourcemaps === true, $.sourcemaps.write('./')))
			.pipe(gulp.dest(config.destination));
	});
};
