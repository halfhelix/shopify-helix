var $ = require('gulp-load-plugins')();

module.exports = function(gulp, config) {

	'use strict';

	gulp.task('scss', function() {
    return gulp.src('./assets/scss/style.scss')
      .pipe($.plumber())
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
      .pipe($.cssnano() )
      .pipe($.rename('main.css.liquid'))
      .pipe(gulp.dest(config.destination));
    });

};
