// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const postcss = require('gulp-postcss');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');


// File paths
const files = { 
    cssPath: 'assets/css/**/*.css',
    jsPath: 'assets/js/**/*.js',
    imgPath: 'assets/img/*'
}

// CSS task: adds vendor prefixes and minifies style.css
function cssTask(){    
    return src(files.cssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest('dist')
    ); // put final CSS in dist folder
}

// JS task: concatenates and minifies JS files to script.js
function jsTask(){
    return src(files.jsPath)
        .pipe(concat('all.js'))
        .pipe(minify())
        .pipe(dest('dist')
    );
}
// imgSquash: minifies all img files
function imgSquash() {
    return src(files.imgPath)
        .pipe(imagemin())
        .pipe(dest("dist/images"));
    }

// Cachebust - prevents caching of website saving into the browser by randomising the string number of the filename
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Watch task: watch CSS and JS files for changes
// If any change, run css and js tasks simultaneously
function watchTask(){
    // watch([files.cssPath, files.jsPath, files.imgPath], 
    //     parallel(cssTask, jsTask, imgSquash));
    watch([files.cssPath, files.jsPath], 
        parallel(cssTask, jsTask));
}

// Export the default Gulp task so it can be run
// Runs the css and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    // parallel(cssTask, jsTask, imgSquash), 
    parallel(cssTask, jsTask), 
    cacheBustTask,
    watchTask
);

// Enable imgSquash and files.imgPath when portfolio is completed coz takes 1 min to apply minified image