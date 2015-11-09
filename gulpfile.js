var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');

function ErrorHandler(){

    console.log(error.toString());

    this.emit('end');
}

gulp.task('less', function(){
   gulp.src('./assets/less/*.less')
       .pipe(less())
       .on('error', ErrorHandler)
       .pipe(gulp.dest('./assets/css'))
       .pipe(connect.reload());
});

gulp.task('connect', function(){
    connect.server({
        port: 3000,
        livereload: true,
        root: './'
    });
});

gulp.task('watch', function(){
    gulp.watch('./assets/less/**/*.less', ['less'])
});

gulp.task('default', ['less', 'connect', 'watch']);