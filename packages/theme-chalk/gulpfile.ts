import path from 'path'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'

import { dest, series, src } from 'gulp'

// 串行， 入口， 出口

function compile() {
  const sass = gulpSass(dartSass)
  return src(path.resolve(__dirname, './src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest('./dist/css'))
}

function copyfont() {
  return src(path.resolve(__dirname, 'src/iconfont/**'))
    .pipe(cleanCss())
    .pipe(dest('./dist/iconfont'))
}

function copyfullStyle() {
  return src(path.resolve(__dirname, './dist/**')).pipe(
    dest(path.resolve(__dirname, '../../dist/theme-chalk'))
  )
}

export default series(compile, copyfont, copyfullStyle)
