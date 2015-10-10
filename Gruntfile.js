module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      options: {
        protocol: 'http',
        port: 9000,
        livereload: true,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: {
            target: 'http://localhost:9000'
          },
          base: [
            'app'
          ]
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'app/*.html', 'app/*js', 'app/modules/**/*.html'],
      options: {
        globals: {
          jQuery: false
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      options:{
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['connect','watch']);
};