const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
gulp.task('build', () =>
  gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify({
      mangle: {
        eval: false,
        keep_fnames: true,
        toplevel: true,
        properties: false
      },compress:true
    }))
    .pipe(gulp.dest('dist'))
);
gulp.task('watch',()=>{
  gulp.watch('src/**/*.js').on('change',path=>{
    console.log(`${path} was fixed`);
    gulp.src(path)
    .pipe(babel({
      presets: ['@babel/env']
    })).on('error',e=>console.error(e))
    .pipe(uglify({
      mangle: {
        eval: false,
        keep_fnames: true,
        toplevel: true,
        properties: false
      },compress:true
    }))
    .pipe(rename(path.slice(4)))
    .pipe(gulp.dest('dist'))
  });
})