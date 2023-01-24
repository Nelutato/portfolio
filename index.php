<?php

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = 
[
    '/' => 'views/aboutMe.view.php',
    '/projects' => 'views/projects.view.php',
    '/contact' => 'views/contact.view.php',
];

function routeToController($uri, $routes)
{

    if (array_key_exists($uri, $routes))
    {
        require $routes[$uri];
    }
    else
    {
        http_response_code(404);

        die();
    }
}

routeToController($uri,$routes);
