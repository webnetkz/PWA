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
        if(file_exists('app/views/'.$this->path.'.php')) {
            ob_start();
            require_once 'app/views/'.$this->path.'.php';
            $content = ob_get_clean();
            require_once 'app/views/layouts/'.$this->layout.'.php';
        } else {
            exit('Вид не найден!');
        }
    }
}
