<?php

namespace app\core;
use app\core\View;

class Router {

    protected $routes = [];
    protected $params = [];
    
    public function __construct(){
        // Подключаем массив с конфигами для роутов
        $arr = require_once 'app/config/routes.php';
        // Перемераем массив конфигов роутов и передаем их методу add
        foreach($arr as $k => $v) {
            $this->add($k, $v);
        }
    }

    // Метод добавления 
    public function add($route, $params) {
        // Собираем регулярное выражение
        $route = '#^'.$route.'$#';
        // Записываем полученые значения роутов в параметры
        $this->routes[$route] = $params;
    }

    // Метод проверки
    public function match() {
        // Берем URI и обрезаем слеш
        $url = trim($_SERVER['REQUEST_URI'], '/');
        foreach($this->routes as $route => $params) {
            if(preg_match($route, $url, $matches)) {
                $this->params = $params;
                return true;
            }
        }
        return false;
    }

    // Метод запуска
    public function run() {
        // Если маршрут найден
        if($this->match()) {
            // Подключение класса контроллера
            $path = 'app\controllers\\'.ucfirst($this->params['controller']).'Controller';
            // Проверка на существование класса
            if(class_exists($path)) {
                $action = $this->params['action'].'Action';
                // Проверка на существование метода
                if(method_exists($path, $action)) {
                    // Если все проверки прошли успешно
                    // Передаем параметры в контроллер
                    $controller = new $path($this->params);
                    $controller->$action();
                } else {
                    // Если экшн не найден
                    View::errorCode(404);
                }
            } else {
                // Если класс не найден
                View::errorCode(404);
            }
        } else {
            // Если маршрут не найден
            View::errorCode(404);
        }
    }
}
