module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                src: ['bower_components/bootstrap/dist/js/bootstrap.js',
                      'bower_components/owl-carousel/owl-carousel/owl.carousel.js',
                      'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                      'bower_components/jquery.easing/js/jquery.easing.min.js',
                      'bower_components/jquery.scrollTo/jquery.scrollTo.min.js',
                      'jquery-migrate/jquery-migrate.min.js',
                      'prism/prism.js',
                      'js/main.js'],
                dest: 'js/all.js'
            }
        },

        uglify: {
            main: {
                files: {
                    'js/all.min.js' : ['js/all.js']
                }
            }
        },

        less: {
            sources:{
                expand: true,
                files:{
                    'css/default/styles.css': '_less/default/styles.less'
                }
            },
            options: {
                cleancss: true, // minify
                report: 'min', // minification results
                compress: true,
                paths: ['bower_components/lesshat/build/']
            }
        },

        shell : {
            jekyllServe : {
                command : 'jekyll serve'
            },

            jekyllBuild : {
                command : 'jekyll build'
            }
        }
    });

    require("load-grunt-tasks")(grunt);

    // Define the tasks
    grunt.registerTask('serve', ['shell:jekyllServe']);
    grunt.registerTask('default', ['concat', 'uglify', 'less', 'shell:jekyllBuild']);
}