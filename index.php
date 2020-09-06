<?php

session_start();

require_once 'app/lib/xDebug/xDebugMod.php';

use app\core\Router;
use app\lib\Db;

// Функция автозагрузки классов
spl_autoload_register(function($class) {
    
    // Замена в пути обратных слешей на обычные
    $path = str_replace('\\', '/', $class.'.php');
    
    // Если файл существует, то подключим его
    if(file_exists($path)) {
        require_once $path;
    }
});

$router = new Router;
$router->run();

