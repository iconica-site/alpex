import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fileinclude from "gulp-file-include";
import replace from "gulp-replace";
import browserSync from "browser-sync";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import htmlmin from "gulp-htmlmin";
import versionNumber from "gulp-version-number";
import gulpSass from "gulp-sass";
import sass from "sass";
import rename from "gulp-rename";
import webpcss from "gulp-webpcss";
import autoPrefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import csso from "gulp-csso";
import webpackStream from "webpack-stream";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import terser from "terser-webpack-plugin";
import webp from "gulp-webp";
import newer from "gulp-newer";
import imagemin from "gulp-imagemin";
import { deleteAsync as del } from "del";
import GulpZip from "gulp-zip";
import fonter from "gulp-fonter";
import svg2ttf from "gulp-svg2ttf";
import ttf2woff2 from "gulp-ttf2woff2";
import fs from "fs";

const bs = browserSync.create();

export { gulp };
export { plumber };
export { notify };
export { fileinclude };
export { replace };
export { bs };
export { webpHtmlNosvg };
export { htmlmin };
export { versionNumber };
export { gulpSass };
export { sass };
export { rename };
export { webpcss };
export { autoPrefixer };
export { groupCssMediaQueries };
export { csso };
export { webpackStream };
export { babel };
export { uglify };
export { terser };
export { webp };
export { newer };
export { imagemin };
export { del };
export { GulpZip };
export { fonter };
export { svg2ttf };
export { ttf2woff2 };
export { fs };
