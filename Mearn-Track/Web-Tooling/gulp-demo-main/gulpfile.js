const { src, dest } = require("gulp");
const htmlmin = require("gulp-html-minifier-terser");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const stripDebug = require("gulp-strip-debug");
const optimizeImages = require("gulp-optimize-images");

const sorce = {
  html: "project/**/*.html",
  css: "project/css/**/*.css",
  images: "project/pics/*",
};

const dist = {
  html: "minifyProject",
  css: "minifyProject/css",
  images: "minifyProject/pics",
  js: "minifyProject/js",
};

exports.htmlTask = () => {
  return src(sorce.html)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(dist.html));
};

exports.jsTask = () => {
  return src(sorce.js, {
    sourcemaps: true,
  })
    .pipe(concat("script.min.js"))
    .pipe(stripDebug())
    .pipe(terser())
    .pipe(dest(dist.js, { sourcemaps: "." }));
};

exports.cssTask = () => {
  return src(sorce.css)
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(dest(dist.css));
};
exports.imgTask = () => {
  return src(sorce.images).pipe(
    optimizeImages({
      compressOptions: {
        jpeg: {
          quality: 50,
          progressive: true,
        },
        png: {
          quality: 90,
          progressive: true,
          compressionLevel: 6,
        },
        webp: {
          quality: 80,
        },
      },
    })
  );
};
