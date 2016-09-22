var watch = require('gulp-watch');

module.exports = function(gulp, config) {
	'use strict';
	var runSequence = require('run-sequence').use(gulp);
	// a handy clean task papu
	gulp.task('clean', function() {
		return del([
			config.destination
		]);
	});
	// Moves theme assets ./theme/assets
	gulp.task('timber', function() {
		return gulp.src('./assets/timber/**')
			.pipe(gulp.dest(config.destination));
	});
	gulp.task('watch', function() {
	  gulp.watch(config.sources.scss, ['scss']);
	  gulp.watch(config.sources.scripts, ['scripts']);
	  gulp.watch(config.sources.images, ['images']);
	  gulp.watch(config.sources.fonts, ['fonts']);
	});
	// on gulp 3 we have to use run-sequence otherwise results may vary
	gulp.task('default', function() {
		return runSequence('clean','timber', 'shopify:watch', 'watch');
	});
};
