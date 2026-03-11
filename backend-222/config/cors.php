<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    */

    // Added 'login' and 'logout' just in case they aren't under 'api/'
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'logout'],

    'allowed_methods' => ['*'],

    // CRITICAL: This must match your browser URL exactly
    'allowed_origins' => [
        'http://127.0.0.1:3000',
        'http://localhost:3000'
    ],
    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    // CRITICAL: Must be true for cookies to work
    'supports_credentials' => true,

];
