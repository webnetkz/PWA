<?php

// Массив для класса роутов
return [
    '' => [
        'controller' => 'main',
        'action' => 'index',
    ],
    'contact' => [
        'controller' => 'main',
        'action' => 'contact',
    ],
    'account/login' => [
        'controller' => 'account',
        'action' => 'login',
    ],
    'account/register' => [
        'controller' => 'account',
        'action' => 'register',
    ],
    'news/show' => [
        'controller' => 'news',
        'action' => 'show',
    ],
];