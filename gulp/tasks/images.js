var imagemin   = require('gulp-imagemin');
var changed    = require('gulp-changed');
var gulpif = require('gulp-if');
var flatten = require('gulp-flatten');

module.exports = function(gulp, config) {
	'use strict';

	gulp.task('images', function() {
		return gulp.src(config.sources.images)
			.pipe(changed(config.destination))
			.pipe(gulpif(config.minify === true, imagemin({
				verbose: true, // More detail in command line output
				progressive: true
			})))
			.pipe(flatten())
			.pipe(gulp.dest(config.destination));
	});
};
