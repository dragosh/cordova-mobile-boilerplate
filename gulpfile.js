'use strict';

var gulp        = require('gulp');
var path        = require('path');
var g           = require('gulp-load-plugins')();
var del         = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var packageJson = require('./package.json');

var ngHtml2Js = require('gulp-ng-html2js');
require('gulp-release-tasks')(gulp);

var src = path.resolve('./app');
var dist = path.resolve('./www');

var paths = {
  config: __dirname + '/config',
  index: __dirname +'/app/index.html',
  vendors: __dirname +'/app/lib',
  scripts: __dirname +'/app/scripts',
  styles: __dirname +'/app/styles',
  images: __dirname +'/app/images',
  www: __dirname + '/www',
  templates: [__dirname + '/app/**/*.ng.html']
};

/*----------------------------------------------------------------*/
/* Bower
/*----------------------------------------------------------------*/
gulp.task('bower', function() {

  g.bower();
  gulp.src(paths.vendors + '/ionic/fonts/*')
  .pipe(gulp.dest(paths.styles + '/fonts'));
});
/*----------------------------------------------------------------*/
/* Scripts
/*----------------------------------------------------------------*/
gulp.task('compile:scripts', [], function() {
  return gulp.src(paths.scripts + '/src/index.js') //only index
    .pipe(g.browserify())
    .pipe(g.ngAnnotate())
    .pipe(gulp.dest(paths.scripts));
});

/*----------------------------------------------------------------*/
/* Styles
/*----------------------------------------------------------------*/
gulp.task('compile:styles', function(done) {
  return gulp.src(paths.styles + '/scss/**/*.scss')
    .pipe(g.sass()).on('error', g.notify.onError())
    .pipe(gulp.dest(paths.styles))
    .pipe(reload({stream:true}));
});

/*----------------------------------------------------------------*/
/* Compile
/*----------------------------------------------------------------*/
gulp.task('compile', function(done) {
  runSequence(['compile:scripts', 'compile:styles'] ,  done);
});

/*----------------------------------------------------------------*/
/* Clean
/*----------------------------------------------------------------*/
gulp.task('clean', function(done) {
  return del([
      paths.www + '/*',
      paths.scripts + '/index.js',
      paths.styles + '/base.css'
  ], done);
});
/*----------------------------------------------------------------*/
/* Build
/*----------------------------------------------------------------*/
// Scripts
gulp.task('build:scripts', ['compile:scripts'], function(done) {

  // APP
  gulp.src([
        paths.scripts + '/index.js'
    ])
    .pipe(g.concat('index.js'))
    .pipe(g.uglify())
    .pipe(gulp.dest(paths.www + '/scripts'));

  gulp.src(paths.templates)
    .pipe(g.minifyHtml({
        empty: true,
        spare: true,
        quotes: true
    }))
    .pipe(ngHtml2Js({
        moduleName: 'app.templates',
        declareModule: true,
        prefix: '/'
    }))
    .pipe(g.concat('templates.js'))
    .pipe(g.uglify())
    .pipe(gulp.dest(paths.www + '/scripts'));

  // Ionic
  gulp.src([ paths.vendors + '/**/js/ionic.bundle.js' ])
    .pipe(g.uglify())
    .pipe(gulp.dest(paths.www + '/lib'));
});
gulp.task('config:version', function(done) {
  gulp.src('config.xml')
    .pipe(g.replace(/version="(.*?)"/gi, 'version="'+ packageJson.version +'"'))
    .pipe(gulp.dest('./'));
});
// Styles
gulp.task('build:styles', ['compile:styles'], function(done) {

  // APP
  gulp.src([paths.styles + '/base.css'])
    .pipe(g.concat('base.css'))
    .pipe(g.minifyCss())
    .pipe(gulp.dest(paths.www + '/styles'));
  //Fonts
  gulp.src([ paths.styles + '/fonts/*' ])
    .pipe(gulp.dest(paths.www + '/styles/fonts'));
});
// Html
gulp.task('build:html', ['compile:styles'], function(done) {

  gulp.src('config.xml')
   .pipe(gulp.dest(paths.www));

  gulp.src(paths.index)
    .pipe(g.minifyHtml({
        empty: true,
        spare: true,
        quotes: true
    }))
    .pipe(gulp.dest(paths.www));
});
// Images
gulp.task('build:images', [], function(done) {

  return gulp.src(paths.images + '/**')
          .pipe(g.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
          })).on('error', g.notify.onError())
          .pipe(gulp.dest(paths.www + '/images'));
});

gulp.task('build', function(done) {
  runSequence('clean', ['build:scripts', 'build:styles', 'build:html', 'build:images'], done);
});
/*----------------------------------------------------------------*/
/* Test/Lint
/*----------------------------------------------------------------*/
function karmaTest(singleRun) {
  var karma = require('karma').server;
  var reporters = ['dots'];
  if(/^darwin/.test(process.platform)) {
    reporters.push('osx');
  }
  return karma.start({
    configFile: paths.config + '/karma.conf.js',
    singleRun: singleRun,
    reporters: reporters
  });
};
gulp.task('test', function () {
  karmaTest(true);
});
gulp.task('test:watch',['lint'], function () {
  karmaTest();
});
gulp.task('lint', function() {
  return gulp.src([ paths.scripts + '/src/**/*.js' ])
    .pipe(g.eslint())
    .pipe(g.eslint.format())
    .pipe(g.eslint.failOnError())
    .on('error', g.notify.onError())
});

/*----------------------------------------------------------------*/
/* Server
/*----------------------------------------------------------------*/
gulp.task('browser:dev', function() {
  browserSync({
    server: {
      baseDir: [src]
    },
    open: true
  });
});

gulp.task('browser:www', function() {
  browserSync({
    server: {
      baseDir: [dist],
    },
    port: 3001,
    open: false
  });
});
gulp.task('bs-reload', function () {
  browserSync.reload();
});

/*----------------------------------------------------------------*/
/* Watcher
/*----------------------------------------------------------------*/
gulp.task('start', [ 'compile','browser:dev'], function () {

  gulp.watch([ paths.scripts + '/src/**/*.js' ], ['lint','compile:scripts']);
  gulp.watch([ paths.styles + '/scss/**/*.scss' ], ['compile:styles']);
  gulp.watch([ paths.scripts + '/index.js' ], ['bs-reload']);
  gulp.watch([ paths.templates, paths.index ] , ['bs-reload']);

});

module.exports = gulp;
