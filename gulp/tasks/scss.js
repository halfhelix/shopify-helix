var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var bulkSass = require('gulp-sass-bulk-import');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');

module.exports = function(gulp, config) {
	'use strict';

	gulp.task('scss', function() {
		return gulp.src(config.sources.scss)
			.pipe(plumber())
			.pipe(bulkSass())
			.pipe(changed(config.destination))
			.pipe(gulpif(config.sourcemaps === true, sourcemaps.init()))
			// Compiles synchronously
			.pipe(sass.sync({
				includePaths: config.modules.scss
			})
			.on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: config.browsers
			}))
			.pipe(concat('main.css'))
			.pipe(gulpif(config.minify === true, cssnano()))
			.pipe(gulpif(config.sourcemaps === true, sourcemaps.write()))
			.pipe(rename('main.css.liquid'))
			.pipe(gulp.dest(config.destination));
	});
};
