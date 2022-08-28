module.exports = function(grunt) {


	grunt.initConfig({

		sass: {
			compile: {
				options: {
					loadPath: 'src/_scss',
					style: 'compressed',
					// sourcemap: "none",
					// noCache: true
				},
				files: [{
					expand: true,
					cwd: 'src/_scss',
					src: ['**/*.scss'],
					dest: 'src/_scss',
					ext: '.css'
				}]
			},
			foundation: {
				options: {
					loadPath: 'bower_components/foundation-sites',
					style: 'compressed',
					// sourcemap: "none",
					// noCache: true
				},
				files: [{
					expand: true,
					cwd: 'bower_components/foundation-sites',
					src: ['**/*.scss'],
					// src: ['sass/foundation.scss'],
					dest: 'bower_components/foundation-sites',
					ext: '.css'
				}]
			},
		},

		concat: {
			css: {
				src: [
					"src/_scss/lib/foundation-flex-rtl.css",
					"src/_scss/lib/motion-ui.min.css",
					"src/_scss/lib/animate.min.css",
					"src/_scss/plugin/owl.carousel.min.css",
					"src/_scss/plugin/owl.theme.default.min.css",
					"src/_scss/plugin/lightgallery.css",
					"src/_scss/plugin/lightgallery-bundle.min.css",
					"src/_scss/plugin/lightslider.min.css",
					"src/_scss/plugin/hover-min.css",
					"src/_scss/plugin/plyr.css",
					"src/_scss/plugin/swiper-bundle.min.css",
					"src/_scss/style.css"
				],
				dest: 'src/css/app.css',
			},
			js: {
				src: [
					"src/_script/lib/what-input.min.js",
					"src/_script/lib/foundation.min.js",
					"src/_script/lib/motion-ui.min.js",
					"src/_script/plugin/owl.carousel.min.js",
					"src/_script/plugin/lightgallery.min.js",
					"src/_script/plugin/lg-autoplay.min.js",
					"src/_script/plugin/lg-comment.min.js",
					"src/_script/plugin/lg-fullscreen.min.js",
					"src/_script/plugin/lg-hash.min.js",
					"src/_script/plugin/lg-medium-zoom.min.js",
					"src/_script/plugin/lg-pager.min.js",
					"src/_script/plugin/lg-relative-caption.min.js",
					"src/_script/plugin/lg-rotate.min.js",
					"src/_script/plugin/lg-share.min.js",
					"src/_script/plugin/lg-thumbnail.min.js",
					"src/_script/plugin/lg-video.min.js",
					"src/_script/plugin/lg-zoom.min.js",
					"src/_script/plugin/lightslider.min.js",
					"src/_script/plugin/plyr.min.js",
					"src/_script/plugin/swiper-bundle.min.js",
					"src/_script/_core/index.js",
					"src/_script/_core/variables.js",
					"src/_script/_core/functions.js",
					"src/_script/_shared/index.js",
					"src/_script/_component/index.js",
					"src/_script/_component/menu_horizontal.js",
					"src/_script/_component/menu_vertical.js",
					"src/_script/_layout/index.js",
					"src/_script/_page/index.js",
					"src/_script/script.js"
				],
				dest: 'src/js/app.js',
			},
			jquery: {
				src: [
					"src/_script/lib/jquery.min.js"
				],
				dest: 'src/js/jquery.js',
			},
		},

		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			html: {
				files: ['src/**/*.html'],
				tasks: []
			},
			sass: {
				files: ['src/_scss/**/*.scss'],
				tasks: [
					'sass:compile',
					'concat:css'
				]
			},
			js: {
				files: ['src/_script/**/*.js'],
				tasks: [
					'concat:js'
				]
			}
		},

		connect: {
			server: {
				options: {
					hostname: '127.0.0.1',
				   // hostname: '192.168.1.154',
					// hostname: '192.168.1.8',
					// hostname: '192.168.20.191',
					port: 3000,
					base: 'src/',
					livereload: true
				}
			}
		}

	});


	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('compile', 'sass:compile');
	grunt.registerTask('css', 'concat:css');
	grunt.registerTask('js', 'concat:js');
	grunt.registerTask('jquery', 'concat:jquery');
	grunt.registerTask('develop', [
		'sass:compile',
		'concat:css',
		'concat:js',
		'concat:jquery',
		'connect',
		'watch'
	]);
	grunt.registerTask('build', [
		'concat:css',
		'concat:js',
		'concat:jquery'
	]);


}
