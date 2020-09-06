<?php

namespace app\core;
use app\core\Veiw;

abstract class Controller {

    public $route;
    public $view;
    
    public function __construct($route) {
        $this->route = $route;
        $this->view = new View($route);
    }
}
