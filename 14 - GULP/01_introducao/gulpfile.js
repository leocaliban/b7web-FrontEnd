const { series, parallel } = require('gulp');

function javascript(cb) {
    cb();
}

function css(cb) {
    cb();
}

exports.build = parallel(javascript, css);