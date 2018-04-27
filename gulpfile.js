var gulp = require('gulp');
	// concatCSS = require("gulp-concat-css"),
	// rename = require("gulp-rename"),
	scss = require("gulp-scss"),
	// minifyCSS = require('gulp-minify-css');

gulp.task('default', function () {
  // gulp.src('css/*.css')
  gulp.src('scss/style.scss')
    // .pipe(concatCSS("app/bundle.css"))
    // .pipe(minifyCSS(""))
    // .pipe(rename("bundle.min.css"))
    .pipe(scss())
    .pipe(gulp.dest('app/style.css'));
});

gulp.task("watch", function () {
	gulp.watch('scss/style.css', ['default'])
	// gulp.watch('index.html', ['default'])
})