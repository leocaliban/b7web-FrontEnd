const gulp = require('gulp');
const htmlMIN = require('gulp-htmlmin');


gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(htmlMIN({
            collapseInlineTagWhitespace: true
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watchHTML', () => {
    gulp.watch('src/index.html', gulp.task('html'));
});

gulp.task('build', gulp.series('html', 'watchHTML'), () => {
    
});
