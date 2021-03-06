const {	src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');
// const cleanCSS = require('gulp-clean-css');

function style() {
	return src("./styles/**/*.scss")
		.pipe(gulpStylelint({
			reporters: [{
				formatter: 'string',
				console: true
			}]
		}))
		.pipe(sass().on('error', sass.logError))
		// .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(dest('./styles'))
		.pipe(browserSync.stream());
};

function watcher() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	watch("./styles/**/*.scss", style);
	watch("./*.html").on('change', browserSync.reload);
	watch("./scripts/**/*.js").on('change', browserSync.reload);
};

exports.style = style;
exports.watch = watcher;