const mix = require('laravel-mix');

mix.ts('resources/js/app.tsx', 'public/js')
   .react()
   .webpackConfig({
       devServer: {
           headers: {
               'Access-Control-Allow-Origin': '*',
           },
           mimeTypes: {
               'application/typescript': ['ts', 'tsx']
           }
       }
   });
