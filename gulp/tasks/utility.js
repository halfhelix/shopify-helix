var watch = require('gulp-watch');

module.exports = function(gulp, config) {
	'use strict';

	// Moves Skeleton theme assets ./theme/assets
	gulp.task('boilerplate', function() {
		return gulp.src('./assets/boilerplate/**')
			.pipe(gulp.dest(config.destination));
	});

	gulp.task('watch', function() {
	  gulp.watch(config.sources.scss, ['scss']);
	  gulp.watch(config.sources.scripts, ['scripts']);
	  gulp.watch(config.sources.images, ['images']);
	  gulp.watch(config.sources.fonts, ['fonts']);
	});

	gulp.task('default', ['boilerplate', 'shopify:watch', 'watch']);
};
