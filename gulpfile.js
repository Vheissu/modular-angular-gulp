
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
    app: './app',
    src: './src',
    fonts: {
        src: './src/static/fonts',
        dest: './app/static/fonts'
    },
    images: {
        src: './src/static/images/**/*',
        dest: './app/static/images'
    },
    styles: {
        src: './src/app.styl',
        dest: './app/static/styles'
    },
    scripts: {
        src: './src/app.js',
        staticSrc: './src/static/scripts/**/*',
        staticDest: './app/static/scripts'
    },
    views: {
        index: './src/index.html',
        indexDest: './app/index.html',
        src: './src/views/**/*',
        dest: './app/views'
    }
};

// Development related tasks
gulp.task('dev', ['clean', 'views', 'styles', 'images', 'lint', 'scripts', 'static-scripts']);

gulp.task('clean', function() {
    del(paths.views.dest, function() {});
});

gulp.task('images', function() {
    return gulp.src(paths.images.src)
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}]
            }))
            .pipe(gulp.dest(paths.images.dest));
});

// Check our Javascript
gulp.task('lint', function() {
    return gulp.src('./src/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});

// Static Javascript file copying
// You might just use Browserify this is useful for non-Browserify JS
gulp.task('static-scripts', function() {
    gulp.src(paths.scripts.staticSrc)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(paths.staticDest));
});

// We use Browserify to write modular applications
gulp.task('scripts', function () {
    gulp.src(paths.scripts.src)
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.app));
});

// Minify our CSS, convert Stylus to CSS
// Autoprefix our CSS and add in sourcemaps
gulp.task('styles', function () {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(stylus())
            .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
            .pipe(minifyCSS({keepBreaks:true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('fonts', function() {
    gulp.src(paths.fonts.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.fonts.dest));
});

// Get our views and move them over to the destination application directory
gulp.task('views', function() {
    gulp.src(paths.views.index).pipe(gulp.dest(paths.views.indexDest));
    gulp.src(paths.views.src).pipe(gulp.dest(paths.views.dest));
});

gulp.task('watch', ['lint'], function () {
    gulp.watch('./src/**/*.styl', ['styles']);
    gulp.watch('./src/static/images/**/*', ['images']);
    gulp.watch(['./src/**/*.html'], ['views']);
    gulp.watch('./src/**/*.js', ['lint', 'scripts', 'static-scripts']);
});

gulp.task('default', ['dev', 'watch']);
