
/**
 * All tasks are imported from ./gulp/index.js
 * Gulp task configuation in ./gulp/config.json
 * Shopify credentials in ./gulp/vault.json
 */

var gulp = require('gulp');
var config = require('./gulp/config');
var vault = require('./gulp/vault');

require('./gulp/index')(gulp, config, vault);
