<?php

// Подключаем пространство имен для директории controllers
namespace app\controllers;
// Подключаем класс Controller из ядра движка
use app\core\Controller;
use app\lib\Db;

// Контроллер, который наследуется от основного контроллера
class MainController extends Controller {
    // Публичный метод главной страницы
    public function indexAction() {
        // Подключение кастомного шаблона
        //$this->view->layout = 'costum';


        $vars = [
            'name' => 'my',
            'age' => 28
        ];

        // Передаем в метод рендер значение title первым параметром, вторым массив с данными
        //$this->view->redirect('account/login');
        $this->view->render('Home page', $vars);
    }

    public function contactAction() {
        $this->view->render('Contact page');
        require_once 'app/lib/Db.php';
        $x = row('SELECT * FROM tab', $pdo);
        x($x);
    }

}
