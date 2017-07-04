/**
 * The "concat" task
 *
 * Concatenate files.
 *
 * npm install grunt-contrib-concat --save-dev
 * grunt.loadNpmTasks('grunt-contrib-concat');
 */
module.exports = {
    options: {
        stripBanners: true
    },
    vendors: {
        src: ['js/vendors/**.js', '!js/vendors/vendors.js'],
        dest: 'js/vendors/vendors.js',
        nonull: true
    }
};
