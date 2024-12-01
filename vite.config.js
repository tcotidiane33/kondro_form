import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    build: {
        rollupOptions: {
          external: ['slick-carousel/slick/slick.css', 'slick-carousel/slick/slick-theme.css']
        },
        minify: process.env.APP_ENV === 'production' ? 'esbuild' : false,
        cssMinify: process.env.APP_ENV === 'production',
      },
      resolve: {
        alias: {
          ziggy: '/resources/js/ziggy.js',
          '@': '/resources/js',

        },
      },
});
