/**
 * The "watch" task
 *
 * Run tasks whenever watched files change.
 *
 * npm install grunt-contrib-watch --save-dev
 * grunt.loadNpmTasks('grunt-contrib-watch');
 */
module.exports = {
    scripts: {
        files: ['js/**/*.js'],
        tasks: ['csscomb', 'concat_css', 'concat', 'uglify'],
        options: {
            spawn: false,
        }
    }
};
