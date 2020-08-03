var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Compile Sass kedalam CSS & Inject otomatis kedalam Browser
gulp.task('sass', function() {
	return gulp.src("aplikasi/scss/*.scss").pipe(sass()).pipe(gulp.dest("aplikasi/css")).pipe(browserSync.stream());
});

// Server statis + melihat file scss/html
gulp.task('serve', gulp.series('sass', function() {
	browserSync.init({
		server: "./aplikasi/"
	});

	gulp.watch("aplikasi/scss/*.scss", gulp.series('sass'));
	gulp.watch("aplikasi/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));