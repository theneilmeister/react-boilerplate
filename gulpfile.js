'use strict';

var gulp = require('gulp');
// var clean = require('gulp-clean');



gulp.task('dist', function () {

	// copy index.html to dist
	gulp.src('./index.html', {base: './'})
	.pipe(gulp.dest('./dist/'));

	// copy builds/ to dist
	gulp.src('./builds/**/*', {base: './'})
	.pipe(gulp.dest('./dist/'));

	// copy readme to dist
	gulp.src('./README.md', {base: './'})
	.pipe(gulp.dest('./dist/'));

});







// gulp.task('move', function(){
//     return gulp.src([
//         'dist/**/*.*'
//     ], { base: './dist/static' })
//         .pipe(gulp.dest('dist/static'))

// });


// gulp.task('clean', function(){
//     gulp.src(['dist/'], {read:false})
//         // .pipe(clean());
// });
