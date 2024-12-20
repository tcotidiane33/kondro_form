import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // Ajout de l'import manquant

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.tsx',
        'resources/js/Pages/Welcome.tsx',
        'resources/js/Pages/Backend/Admin/Dashboard.tsx',
        'resources/js/Pages/Courses/ViewMaterials.tsx', // Ajoutez ce fichier ici

      ],
      refresh: true, // Active le rafraîchissement automatique des pages Laravel
    }),
    react(),         // Plugin React pour Vite
    tsconfigPaths(), // Plugin pour gérer les alias de chemins définis dans tsconfig.json
  ],
  server: {
    port: 5173,    // Définit le port du serveur de développement
    hmr: {
        port: 5174, // Changez le port HMR ici
      },
    // hmr: true,     // Hot Module Replacement (HMR) activé
    open: true,    // Ouvre automatiquement l'application dans le navigateur
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      },
      headers: {
        'Content-Type': 'application/javascript',
      },
    proxy: {
        '/react-devtools': {
          target: 'http://localhost:8097',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/react-devtools/, ''),
        },
        '/api': {
            target: 'http://localhost:8000',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },

  },
  build: {
    rollupOptions: {
      external: [
        'slick-carousel/slick/slick.css',       // CSS externe à exclure
        'slick-carousel/slick/slick-theme.css' // Thème externe à exclure
      ],
    },
    minify: process.env.APP_ENV === 'production' ? 'esbuild' : false, // Minification conditionnelle
    cssMinify: process.env.APP_ENV === 'production',                 // Minification CSS conditionnelle
    outDir: 'public/build',    // Répertoire de sortie pour les fichiers compilés
    emptyOutDir: true,         // Vide le répertoire de sortie avant chaque build

    sourcemap: true, // Assurez-vous que les sourcemaps sont générés

  },
  resolve: {
    alias: {
      ziggy: '/resources/js/ziggy.js',       // Alias pour Ziggy
      '@': '/resources/js',                 // Alias pour le répertoire JS
      '@components': '/resources/js/Components', // Alias pour les composants
      '@layouts': '/resources/js/Layouts',       // Alias pour les layouts
      '@pages': '/resources/js/Pages',          // Alias pour les pages
    },
  },
});
