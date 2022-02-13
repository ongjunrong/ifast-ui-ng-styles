//Assign entry files here

const entryFiles = 'ifast-ui.scss';

const entry = [
    'core/index.scss',
    'hk-b2b-admin/' + entryFiles,
    'hk-b2b-prelogin/' + entryFiles,
    'hk-b2b-fintech/' + entryFiles,
    'hk-fsmone/' + entryFiles,
    'hk-tw/' + entryFiles,
    'regional-fsmone/' + entryFiles,
    'regional-b2c/' + entryFiles,
    'regional-external/' + entryFiles,
    'sg-b2b/' + entryFiles,
    'sg-boc/' + entryFiles,
    'in-b2b/desktop/' + entryFiles,
    'in-b2b/mobile/' + entryFiles,
    'prime/' + entryFiles,
    'ipd/theme-rhb/' + entryFiles,
    'ipd/theme-rhb-admin/' + entryFiles,
    'hq-rcms/' + entryFiles,
    'hq-intranet/' + entryFiles,
    'my-b2b/' + entryFiles,
]

const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

sass.compiler = require('node-sass');

gulp.task("validate", () => {
  return gulp.src(entry)
    .pipe(sass.sync({outputStyle: 'compressed'})
    .on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
});

