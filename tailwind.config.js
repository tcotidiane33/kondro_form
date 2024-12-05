import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans], // Police principale
            },
            colors: {
                // Palette de couleurs inspirée par INE
                'ine-blue': '#003b6f', // Couleur principale d'INE
                'ine-light-blue': '#0074d9', // Bleu clair
                'ine-dark-blue': '#001f3f', // Bleu foncé
                'ine-gray': '#e0e1e2', // Gris neutre
                'ine-green': '#2ecc71', // Vert d'accent
                'ine-orange': '#ff851b', // Orange pour des alertes ou boutons
            },
            backgroundImage: {
                // Dégradé inspiré de la charte graphique d'INE
                'gradient-ine': 'linear-gradient(to right, #003b6f, #0074d9, #2ecc71)', // Dégradé bleu-vert
                'gradient-ine-light': 'linear-gradient(to right, #0074d9, #ff851b)', // Dégradé bleu-orange
                'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))', // Dégradé par défaut
            },
        },
    },

    plugins: [forms],
};
