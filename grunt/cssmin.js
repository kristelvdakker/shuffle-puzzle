/**
 * The "cssmin" task
 *
 * Compress CSS files.
 *
 * npm install grunt-contrib-cssmin --save-dev
 * grunt.loadNpmTasks('grunt-contrib-cssmin');
 */
module.exports = {
    options: {
        keepSpecialComments: 0
    },
    site: {
        src: ['styles.min.css'],
        dest: 'styles.min.css'
    }
};
