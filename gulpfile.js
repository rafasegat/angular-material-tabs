var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var http = require('http');
var ecstatic = require('ecstatic');

var watchFiles = 'www/**/*.{js,html,css}';
var plataformDest = 'platforms/ios/www/';

gulp.task('copy', function () {
    gulp.src(watchFiles)
        .pipe(gulp.dest(plataformDest))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.reload();
    watch(watchFiles, function (events) {
        gulp.start('copy');
    });
});

gulp.task('server', function() {
    var port = 8000;
    var url = "http://localhost:" + port + "/";
    http.createServer(ecstatic({
        root: "platforms",
        cache: 0
    })).listen(port);

    gutil.log(gutil.colors.blue("HTTP server listening on " + port));
});

gulp.task('default', [
    'server',
    'watch'
]);
