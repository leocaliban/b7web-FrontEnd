
const { src, dest, parallel } = require('gulp');

const rename = require('gulp-rename');
const uglifyJS = require('gulp-uglify');
const uglifyCSS = require('gulp-uglifycss');
const image = require('gulp-image');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cssImport = require('gulp-cssimport');

sass.compiler = require('node-sass');


function javascript() {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglifyJS())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('dist/assets/js'));
}
function css() {
    return src('src/css/*.css')
        .pipe(cssImport())
        .pipe(uglifyCSS({
            'maxLineLen': 80,
            'uglyComments': true

        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('dist/assets/css'));
}

function otimizarImagens() {
    return src('src/images/*.jpg')
        .pipe(image())
        .pipe(dest('dist/assets/images'));
}

function converterSass() {
    return src('src/css/*.scss')
        .pipe(sass(
            {
                outputStyle: 'compressed'
            }
        ))
        .pipe(rename(
            {
                extname: '.min.css'
            }
        ))
        .pipe(dest('dist/assets/css'));
}

exports.default = parallel(javascript, css, converterSass);