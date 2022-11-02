import gulp from "gulp";
import concat from "gulp-concat";
import autoPrefixer from "gulp-autoprefixer";
import GulpCleanCss from "gulp-clean-css";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import GulpUglify from "gulp-uglify";
import { deleteSync } from "del";
import browserSync from "browser-sync";
import imagemin from "gulp-imagemin";
import gcmq from "gulp-group-css-media-queries";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";

// fix sass bug
const sass = gulpSass(dartSass);

// output path
const path = "./build";

// sass convert to css task
async function preproc() {
	return gulp.src("./src/scss/styles.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gcmq())
		.pipe(sourcemaps.init())
		.pipe(concat("styles.css"))
		.pipe(autoPrefixer({
			overrideBrowserslist: ["> 0.0001%"],
			cascade: false
		}))
		.pipe(GulpCleanCss({
			level: 2
		}))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(path+"/css"))
		.pipe(browserSync.stream());
}

// other css files concat task
async function otherCSS () {
	return gulp.src("./src/css/**/*.css")
		.pipe(gcmq())
		.pipe(concat("otherCSS.css"))
		.pipe(GulpCleanCss({
			level: 2
		}))
		.pipe(autoPrefixer({
			overrideBrowserslist: ["> 0.0001%"],
			cascade: false
		}))
		.pipe(gulp.dest(path+"/css"))
		.pipe(browserSync.stream());
}

// all javascripts task with babel
async function scripts () {
	return gulp.src("./src/js/**/*.js")
		.pipe(sourcemaps.init())
		.pipe(concat("all.js"))
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		.pipe(GulpUglify({
			toplevel: true,
			warnings: false
		}))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(path+"/js"))
		.pipe(browserSync.stream());
}

// pictures task
async function img () {
	return gulp.src("./src/img/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest(path+"/img"))
}

// delete build folder and all files in build folder
async function clean () {
	return deleteSync([path])
}

// fonst folder to build
async function fonts () {
	return gulp.src("./src/fonts/*")
		.pipe(gulp.dest(path+"/fonts"));
}

// all libs folder to build
async function libs () {
	return gulp.src("./src/libs/*")
		.pipe(gulp.dest(path+"/libs"));
}

// all html files to build
async function htmls () {
	return gulp.src("./src/*.html")
		.pipe(gulp.dest(path))
		.pipe(browserSync.stream());
}

// run gulp watch to live all streams in the browser
async function watch () {
	browserSync.init({
		server: path,
		tunnel: false,
		port: 8888 // default: 3000
	});
	gulp.watch("./src/scss/styles.scss", preproc);
	gulp.watch("./src/css/**/*.css", otherCSS);
	gulp.watch("./src/js/**/*.js", scripts);
	gulp.watch("./src/fonts/*", fonts);
	gulp.watch("./src/libs/*", libs);
	gulp.watch("./src/*.html", htmls);
	gulp.watch("./*.html").on("change", browserSync.reload);
}

// all gulp tasks
// gulp.task("clean", clean);
// gulp.task("htmls", htmls);
// gulp.task("preproc", preproc);
// gulp.task("otherCSS", otherCSS);
// gulp.task("scripts", scripts);
// gulp.task("img", img);
// gulp.task("fonts", fonts);
// gulp.task("libs", libs);

// watch task to live all streams in the browser
gulp.task("watch", watch);

// build task for run build to all files from src to build folder
gulp.task("build", gulp.series(clean, gulp.parallel(htmls, preproc, otherCSS, scripts, img, fonts, libs)));

// dev task parralle build and after watch
gulp.task("dev", gulp.series("build", "watch"));