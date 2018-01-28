// This is module is for development purposes (E2E integration)

(function() {
  var gulp = require('gulp');
  var gulpWatch = require('gulp-watch');
  var gulpLiveServer = require('gulp-live-server');
  var gulpJshint = require('gulp-jshint');
  var opener = require('opener');
  var exec = require('child_process').exec;
  var run = require('gulp-run-command');
  var stylish = require('jshint-stylish');

  gulp.task('run', ['lint'], function() {
    var server = gulpLiveServer('./server/express.js', {});
    server.start();

    opener('http://localhost:8080');

    gulp.watch(['app/**/*.css', 'app/**/*.html', 'app/**/*.js'], ['lint'], function(file) {
    	console.log('Changes on frontend. Reloading ...');
    	server.notify.apply(server, [file]);
    	server.start.bind(server)();
    });

    gulp.watch(['server/**/*.js'], function() {
    	console.log('Changes on server side. Restarting server ...');
      run('firebase deploy --only functions');
    	server.start.bind(server)();
    });
  });

  gulp.task('lint', function() {
    return gulp.src(['app/modules/**/*.js'])
        .pipe(gulpJshint('.jshintrc'))
        .pipe(gulpJshint.reporter('jshint-stylish', {beep: false}));
  });
})();