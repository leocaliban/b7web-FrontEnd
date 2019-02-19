
const { src, dest, parallel, task } = require('gulp');

const rename = require('gulp-rename');
const uglifyJS = require('gulp-uglify');
const uglifyCSS = require('gulp-uglifycss');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cssImport = require('gulp-cssimport');

sass.compiler = require('node-sass');

task('base', () => {
    return src('src/templates/*.html')
        .pipe(
            dest('public/'));
});

task('javascript', () => {
    return src('src/javascript/*.js')
        .pipe(
            babel({
                presets: ['@babel/env']
            }))
        .pipe(uglifyJS())
        .pipe(
            rename({
                extname: '.min.js'
            }))
        .pipe(
            dest('public/assets/js')
        );
});

task('css', () => {
    return src('src/css/*.css')
        .pipe(cssImport())
        .pipe(sass())
        .pipe(uglifyCSS())
        .pipe(
            rename({
                extname: '.min.css'
            }))
        .pipe(
            dest('public/assets/css')
        );
});

exports.default = parallel('base', 'javascript', 'css');