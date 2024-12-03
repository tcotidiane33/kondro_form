import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.tsx',
                'resources/js/Pages/Backend/Admin/Dashboard.tsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    server: {
        port: 5173,
    },
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
