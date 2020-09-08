<?php

namespace app\core;

class View {

    public $path;
    public $route;
    public $layout = 'default';
    
    // При создании обьекта класса, класс создает публичное свойство с роутерами
    public function __construct($route) {
        // Записываем роуты в свойство
        $this->route = $route;
        // Записываем путь контроллер плюс экшен
        $this->path = $route['controller'].'/'.$route['action'];
    }

    // Публичный метод рендер, который подключает шаблон
    public function render($title, $vars = []) {
        // Разбераем наш массив на переменные
        extract($vars);
        $file = 'app/views/'.$this->path.'.php';
        // Подключаем шаблон если он существует
        if(file_exists($file)) {
            ob_start();
            require_once $file;
            $content = ob_get_clean();
            require_once 'app/views/layouts/'.$this->layout.'.php';
        } else {
            exit('Вид не найден!');
        }
    }

    // Метод редиректа
    public function redirect($url) {
        header('Location: '.$url);
        exit;
    }

    // Метод обработки ошибок
    public static function errorCode($code) {
        http_response_code($code);
        $file = 'app/views/errors/'.$code.'.php';
        if(file_exists($file)) {
            require_once $file;
        }
        exit;
    }
}
