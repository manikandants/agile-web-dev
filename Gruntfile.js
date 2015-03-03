(function () {
   'use strict';
	module.exports = function(grunt){
		var config = {};
		config.pkg = grunt.file.readJSON('package.json');
		require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
		config.clean = {
			build: {
				files: [{
					dot: true,
					src: [
						'build/*',
						'!build/.git*'
					]
				}]
			}
		};

		config.htmlmin = {
			build: {
				options: {
					collapseBooleanAttributes: true,
					removeAttributeQuotes: true,
					removeRedundantAttributes: true,
					removeEmptyAttributes: true
				},
				files: [{
					expand: true,
					cwd: 'www',
					src: '{,*/}*.html',
					dest: 'build'
				}]
			}
		};
		
		config.csslint = {
			options: {
				csslintrc: '.csslintrc',
				formatters: [
					{id: 'compact', dest: 'reports/css/compact.xml'},
					{id: 'checkstyle-xml', dest: 'reports/css/checkstyle.xml'}
				]
			},
			strict: {
				options: {
					import: 2
				},
				src: ['www/**/*.css']
			},
			lax: {
				options: {
					import: false
				},
				src: ['www/**/*.css']
			}
		},

		config.concat = {
			options: {
				// define a string to put between each file in the concatenated output
				separator: ';'
			},
			build: {
				// the files to concatenate
				src: ['www/**/*.js'],
				// the location of the resulting JS file
				dest: 'build/<%= pkg.name %>.js'
			}
		};

		config.useminPrepare = {
			options: {
				dest: 'build'
			},
			html: 'www/index.html'
		};

		config.usemin = {
			options: {
				dirs: ['build']
			},
			html: ['build/{,*/}*.html']
		};

		config.uglify = {
			build: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
					mangle: true
				},
				files: [{
			      'build/<%= pkg.name %>.min.js': ['<%= concat.build.dest %>']
			    }]
			}
		};
		
		config.karma = {
			unit: {
				configFile: 'test/karma.conf.js',
				singleRun: true,
			}
		};
		
		config.plato = {
			all:{
				files: {
					'reports/plato': ['Gruntfile.js', 'www/**/*.js', 'test/**/*.js', '!www/js/libs/**/*.js', '!test/libs/*.js']
				}
			}
		};

		config.rev = {
			files: {
				src: [
					'build/scripts/{,*/}*.js',
				]
			}
		};

		grunt.initConfig(config);

		var tasks = [
			'clean',
			'csslint',
			'karma',
			'plato',
			'useminPrepare',
			'htmlmin',
			'concat',
			'uglify',
			'rev',
			'usemin'
		];

		grunt.registerTask("default", tasks);
	};
}());