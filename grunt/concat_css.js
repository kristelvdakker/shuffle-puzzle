/**
 * The "concat_css" task
 *
 * The grunt plugin for sorting CSS properties in specific order.
 *
 * npm install grunt-concat-css --save-dev
 * grunt.loadNpmTasks('grunt-concat_css');
 */
module.exports = {
    options: {
        // Task-specific options go here.
    },
    all: {
        src: [
            'css/vendors/jquery.jqpuzzle.css',
            'css/styles/styles.css'
        ],
        dest: 'styles.min.css'
    }
};
