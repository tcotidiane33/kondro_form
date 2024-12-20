<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */
    // 'paths' => ['*'],
    // 'allowed_methods' => ['GET', 'POST', 'PUT', 'OPTIONS'],
    // 'allowed_origins' => ['https://localhost:5173/@react-refresh', 'http://localhost:8000'],
    // 'allowed_origins_patterns' => [],
    // 'allowed_headers' => ['Origin', 'Content-Type', 'X-Auth-Token', 'Cookie'],
    // 'exposed_headers' => [],
    // 'max_age' => 0,
    // 'supports_credentials' => true,

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    // 'supports_credentials' => false,
    'supports_credentials' => true,

];
