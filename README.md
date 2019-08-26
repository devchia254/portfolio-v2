# Portfolio Website
`Live:` https://devchia254.github.io/portfolio-v2/

The design and development of my portfolio website was built from scratch, only applying the basics of HTML, CSS and JavaScript languages.

## Goals
- Apply the fundamentals of web development and limit the reliance of web frameworks.
    - E.g. Mobile Responsiveness - Use CSS Grid, Flexbox and Media Queries, instead of using Bootstrap.

- Apply web performance optimisation techniques.

## Features & Code Snippets
Below are some of the features and code extracts of this coding exercise.

### Web Performance Optimisation
---
#### Gulp

Familiarising with Gulp to automate my workflow and facilitate the development process. The packages used:

1. **autoprefixer** - Adds vendor prefixes to enable cross-browser adaptability
2. **cssnano** - Minifies the CSS file
3. **gulp-concat** - Concatenates all the JS files into one (all.js) 
4. **gulp-imagemin** - Minifies the images
5. **gulp-minify** - Minifies the JS file (once all JS files have been concatenanted)
6. **gulp-postcss** - A CSS parser for running autoprefixer and cssnano
7. **gulp-replace** - Adds a string parameter to CSS/JS references (necessary for cache busting) 
8. **gulp-sourcemaps** - Maps the CSS styles back to the original CSS file in your broswer dev tools

#### gulpfile.js:
```javascript
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

// Cachebust: prevents caching of website saving into the browser by randomising the string number of the filename
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Watch task: watch CSS and JS files for changes
// If any change, run css and js tasks simultaneously
function watchTask(){
    watch([files.cssPath, files.jsPath, files.imgPath], 
        parallel(cssTask, jsTask, imgSquash));
}

// Export the default Gulp task so it can be run
// Runs the css, js tasks, and imqSquash simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(cssTask, jsTask, imgSquash), 
    cacheBustTask,
    watchTask
);

```
