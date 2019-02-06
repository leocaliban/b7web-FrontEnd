const gulp = require('gulp');
const htmlMIN = require('gulp-htmlmin');
const scssMIN = require('gulp-sass');
const notify = require('gulp-notify');
let browserSync = require('browser-sync').create();


// sass
gulp.task('sass', () => {
    return gulp.src('src/assets/scss/style.scss')
        .pipe(scssMIN({
            outputStyle: 'compressed'
        }))
        .on('error', notify.onError('Erro: <%= error.message %>'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream());
});

// html
gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(htmlMIN({
            collapseInlineTagWhitespace: true
        }))
        .on('error', notify.onError('Erro: <%= error.message %>'))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

// watch
gulp.task('watch', () => {
    gulp.watch('src/index.html', gulp.task('html'));
    gulp.watch('src/assets/scss/style.scss', gulp.task('sass'));
});

// sync
gulp.task('SYNC', () => {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        }
    });
});

gulp.task('build', gulp.series(gulp.parallel('html', 'sass'), gulp.parallel('SYNC', 'watch')));
