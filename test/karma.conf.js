'use strict';

module.exports = function(config) {

  config.set({
    basePath : '..', //!\\ Ignored through gulp-karma //!\\
    preprocessors: {
      '**/*.html': ['ng-html2js'],
      'src/app/**/*.js': ['coverage']
    },
    files : [ //!\\ Ignored through gulp-karma //!\\
        'src/bower_components/angular/angular.js',
        'src/bower_components/angular/angular-route.js',
        'src/bower_components/angular-mocks/angular-mocks.js',
        'src/app/**/*.js',
        'test/unit/**/*.js',
        'src/app/**/*.html'
    ],

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'src/',
      moduleName: 'my.templates'
    },

    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type : 'text',
      dir : 'coverage/'
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-ng-html2js-preprocessor',
        'karma-chrome-launcher',
        'karma-coverage'
    ]
  });

};
