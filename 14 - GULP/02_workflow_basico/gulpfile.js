const gulp = require('gulp');
const htmlMIN = require('gulp-htmlmin');

gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(htmlMIN({
            collapseInlineTagWhitespace: true
        }))
        .pipe(gulp.dest('dist/'));
});