const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')

    .js('resources/assets/js/duosport.js', 'public/js')

    .sass(
        'resources/assets/sass/duosport.scss',
        'public/css', {
        })

    .sass('resources/assets/sass/pdf.scss', 'public/css')
    .copyDirectory('resources/images', 'public/images')
    .copyDirectory('resources/images/favicon.ico', 'public/favicon.ico')

    .copy('resources/assets/DataTables/datatables.min.css', 'public/css')
    .copy('resources/assets/fonts', 'public/css/fonts')
    .copy('resources/assets/DataTables/datatables.min.js', 'public/js')
    // .copyDirectory('assets/fonts', 'dist/fonts')
    .copy('resources/assets/open-iconic-master/font/fonts/open-iconic.*', 'public/css')
    .copy('resources/assets/bootstrap-datepicker/css/bootstrap-datepicker.css', 'public/css')
    .copy('resources/assets/bootstrap-datepicker/js/bootstrap-datepicker.min.js', 'public/js')
    .copy('resources/assets/summernote', 'public/js/summernote')

    .sourceMaps(true)
    .webpackConfig({
        devtool: 'source-map',
    })

    .version()

    .options({
        processCssUrls: false
    })
;
