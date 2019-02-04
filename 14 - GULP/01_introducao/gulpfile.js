
const { src, dest } = require('gulp');

const rename = require('gulp-rename');
const uglifyJS = require('gulp-uglify');

exports.default = () => {
    return src('src/js/*.js')
        .pipe(uglifyJS())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('dist/'));
};