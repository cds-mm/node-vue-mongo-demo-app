let mix = require('laravel-mix');

mix.js('src/vue.js', 'public/')
    .sass('src/bulma.scss', 'public/css/')