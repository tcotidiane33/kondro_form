<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Titre dynamique avec support Inertia.js -->
    <title inertia>{{ config('app.name', 'KDN') }}</title>
    <style>
        body {
            -webkit-text-size-adjust: 100%;
            /* ou auto, none */
        }
    </style>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Débogage React (optionnel, à supprimer en production) -->
    @if (env('APP_ENV') === 'local')
        <script src="http://localhost:5173/react-devtools"></script>
        {{-- <script src="http://192.168.1.11:8097"></script> --}}
        <script src="http://localhost:8097"></script>
        <script>
            // Activez React DevTools uniquement si le serveur localhost:5173/react-devtools est disponible
            fetch('http://localhost:5173/react-devtools')
                .then(() => {
                    const script = document.createElement('script');
                    script.src = 'http://localhost:5173/react-devtools';
                    document.head.appendChild(script);
                })
                .catch(() => {
                    console.warn('React DevTools non disponible sur http://localhost:5173/react-devtools.');
                });
        </script>
    @endif

    <!-- Scripts Laravel + Ziggy -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased bg-gray-100 text-gray-900">
    @inertia
</body>

</html>
