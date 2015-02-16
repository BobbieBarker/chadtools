'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,
    preprocessors: {
      '**/*.html': ['ng-html2js']

    },

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'my.templates'
    },

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-ng-html2js-preprocessor'
    ]
  });
};
