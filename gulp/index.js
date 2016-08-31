module.exports = function(gulp, config, vault){
  'use strict';

  // Shopify watch task
  require('./tasks/shopify')(gulp, config, vault);

  // Asset development tasks
  require('./tasks/scss')(gulp, config);
  require('./tasks/scripts')(gulp, config);
  require('./tasks/images')(gulp, config);
  require('./tasks/fonts')(gulp, config);

  // Utility tasks
  require('./tasks/utility')(gulp, config);

  return gulp;
};
