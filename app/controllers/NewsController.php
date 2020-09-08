<?php

namespace app\controllers;
use app\core\Controller;
use app\lib\Db;

class NewsController extends Controller {
    
    public function showAction() {
        $this->view->layout = 'costum';
        $this->view->render('News show page');
    }

}
