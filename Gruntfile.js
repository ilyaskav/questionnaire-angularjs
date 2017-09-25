'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html2js: {
            dist: {
                src: ['modules/**/templates/*.html'],
                dest: 'tmp/templates.js'
            }
        },
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['modules/**/controllers/*.js', 'tmp/*.js'],
                // the location of the resulting JS file
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        clean: {
            temp: {
                src: ['tmp']
            }
        },
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'modules/**/*.js', 'public/lib/effectivityCalc.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                jshintrc: true,
                
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        // watch: {
        //     files: ['<%= jshint.files %>'],
        //     tasks: ['jshint']
        // }
        watch: {
            dev: {
                files: ['Gruntfile.js', 'modules/**/*.js', 'modules/**/*.html'],
                tasks: ['jshint', 'html2js:dist', 'concat:dist', 'clean:temp'],
                options: {
                    atBegin: true
                }
            },
            min: {
                files: ['Gruntfile.js', 'modules/**/*.js', 'modules/**/*.html'],
                tasks: ['jshint', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist'],
                options: {
                    atBegin: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // this would be run by typing "grunt test" on the command line
    grunt.registerTask('minified', ['watch:min']);

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['watch:dev']);
};