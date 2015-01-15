var src = './src',
    dist = './app',
    fs = require('fs'),
    gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    ngAnnotate = require('gulp-ng-annotate'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    react = require('gulp-react'),
    install = require('gulp-install'),
    jshint = require('gulp-jshint');

var paths = {
    bower: {
        dist: '.bowerrc'.directory || dist + '/bower_components'
    },
    images: {
        src: src + '/images/**/*',
        dist: dist + '/images'
    },
    scripts: {
        src: src + '/modules',
        polyfills: src + '/polyfills',
        watch: src + '/**/*.js',
        lib: src + '/lib',
        libDest: dist + '/applib.js',
        react: src + '/react/**/*.jsx',
        dist: dist + '/app.js'
    },
    styles: {
        src: src + '/app.styl',
        watch: src + '/**/*.styl',
        dist: dist + '/app.css'
    },
    fonts: {
        src: src + '/fonts/**/*',
        dist: dist + '/fonts'
    }
};

// Handle images here
gulp.task('images', function() {
    return gulp.src(paths.images.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.images.dist));
});

// Handle minification of CSS here
gulp.task('css', function() {

});

// Handle minifcation of JS here

// Handle AngularJS compilation here

// Handle ReactJS compilation here
