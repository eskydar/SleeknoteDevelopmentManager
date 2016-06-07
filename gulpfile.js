/**
 * Created by sebastiaan on 25/05/16.
 */
var gulp = require('gulp');

var sass = require('gulp-sass');

var rename = require("gulp-rename");

gulp.task('sass', function() {
    return gulp.src('css/browser_action/src/base.scss')
        .pipe(sass({outputStyle: 'compressed'})
            .on('error', sass.logError))
        .pipe(rename('browser_action.css'))
        .pipe(gulp.dest('css/browser_action'));
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('css/browser_action/**/*.scss', ['sass'], function() {
        console.log('Generating CSS partials, hold on!');
    });
});