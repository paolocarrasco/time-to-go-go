module.exports = function(config) {
  config.set({

    basePath: '..',

    frameworks: ['jasmine'],

    files: [
      'app/bower_components/lodash/lodash.min.js',
      'app/bower_components/jquery/dist/jquery.min.js',
      'app/bower_components/moment/moment.js',
      'app/scripts.babel/chronos.js',
      'app/scripts.babel/browser-handler.js',
      'app/scripts.babel/calculate-time-leave.js',
      'test/**/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_WARN,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
