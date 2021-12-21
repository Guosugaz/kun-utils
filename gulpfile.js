const { src, dest, series, task } = require("gulp");
const terser = require("gulp-terser");
const gulpClean = require("gulp-clean");

function clean() {
  return src("lib").pipe(gulpClean());
}

function terserJs() {
  return src("./lib/**/*.js").pipe(terser()).pipe(dest("./lib"));
}

task("clean", series(clean));
task("terser", series(terserJs));
