const gulp = require('gulp');
const htmlMIN = require('gulp-htmlmin');
const scssMIN = require('gulp-sass');

// sass
gulp.task('sass', () => {
    return gulp.src('src/assets/scss/style.scss')
        .pipe(scssMIN({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist/assets/css'));
});


gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(htmlMIN({
            collapseInlineTagWhitespace: true
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
    gulp.watch('src/index.html', gulp.task('html'));
    gulp.watch('src/assets/scss/style.scss', gulp.task('sass'));
});

gulp.task('build', gulp.series(gulp.parallel('html', 'sass'), 'watch'), () => {

});
