<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Titre dynamique avec support Inertia.js -->
    <title inertia>{{ config('app.name', 'KDN') }}</title>
    <style>
        body {
            -webkit-text-size-adjust: 100%;
            font-family: 'Figtree', sans-serif;
            /* ou auto, none */
        }

        .card {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .progress-bar {
            background-color: #007bff;
        }
    </style>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Débogage React (optionnel, à supprimer en production) -->
    @if (env('APP_ENV') === 'local')
        {{-- <script src="http://localhost:5173/react-devtools"></script> --}}
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
    <script src="https://cdn.ckbox.io/ckbox/2.6.1/ckbox.js" crossorigin></script>
    <!-- Scripts Laravel + Ziggy -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased bg-gray-100 text-gray-900">
    @inertia
    <script src="https://cdn.ckbox.io/ckbox/2.6.1/ckbox.js" crossorigin></script>
</body>

</html>
