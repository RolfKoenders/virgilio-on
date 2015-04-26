
var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
	require('must');
    return gulp.src(['./tests/**/*.test.js'])
        .pipe(mocha({
            reporter: 'spec'
        }));
});
