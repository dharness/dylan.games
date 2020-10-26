var { src, dest, parallel, series, watch } = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const del = require('del');
const data = require('gulp-data');
var path = require('path');

const fs = require('fs');
const worksDataPath = './src/works_data.json';
const htmlPath = './src/**/*.njk';
const cssPath = './src/**/*.css';
const assetsPath = './src/assets/**/**';

function getWorksData() {
    return JSON.parse(fs.readFileSync(worksDataPath, 'utf8'));
}

function html () {
    return src(htmlPath)
        .pipe(data(getWorksData))
        .pipe(nunjucksRender({
            path: ['./src'] // String or Array
        }))
        .pipe(dest('docs'));
};

function css () {
    return src(cssPath)
        .pipe(dest('docs'));
};

function assets() {
    return src(assetsPath)
        .pipe(dest('docs/assets'));
};

function clean () {
    return del(['docs']);
};

const runTasks = series(clean, parallel(html, css, assets));

exports.default = function (done) {
    runTasks();
    done();
}

exports.watch = function () {
    runTasks();

    watch(cssPath, css);
    watch(htmlPath, html);
}