<?php

namespace app\controllers;
use app\core\Controller;

class MainController extends Controller {
    
    public function indexAction() {
        $this->view->layout = 'costum';
        $this->view->render('Home page');
    }

    public function contactAction() {
        $this->view->render('Contact page');
    }

}
