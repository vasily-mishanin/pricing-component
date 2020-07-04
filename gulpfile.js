const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const gulpStylelint = require("gulp-stylelint");

function style() {
  //tasks //
  return gulp
    .src("./scss/**/*.scss")
    .pipe(
      gulpStylelint({
        reporters: [{
          formatter: "string",
          console: true
        }]
      })
    )
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/"))
    .pipe(browserSync.stream());
}

// function lintCss() {
//   return gulp.src("./scss/**/*.scss").pipe(
//     gulpStylelint({
//       reporters: [{
//         formatter: "string",
//         console: true
//       }]
//     })
//   );
// }

function watcher() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watcher;
//exports.lintCss = lintCss;