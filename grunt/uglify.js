/**
 * The "uglify" task
 *
 * Minify javascript files with UglifyJS.
 *
 * npm install grunt-contrib-uglify --save-dev
 * grunt.loadNpmTasks('grunt-contrib-uglify');
 */
module.exports = {
    build: {
        files: {
            //vendors
            'js/scripts.min.js': ['js/vendors/vendors.js']
        }
    }
};
