
const { src, dest, parallel } = require('gulp');

const rename = require('gulp-rename');
const uglifyJS = require('gulp-uglify');
const uglifyCSS = require('gulp-uglifycss');


function javascript() {
    return src('src/js/*.js')
        .pipe(uglifyJS())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('dist/assets/js'));
}
function css() {
    return src('src/css/*.css')
        .pipe(uglifyCSS({
            'maxLineLen': 80,
            'uglyComments': true

        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('dist/assets/css'));
}

exports.default = parallel(javascript, css);