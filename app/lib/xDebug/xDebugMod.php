<?php

// Включаем отображение ошибок
ini_set('display_errors', 1);
// Включаем отчеты об ошибках
error_reporting(E_ALL);

// Функция для дебага
function x($str) {
    echo '<pre>';
    var_dump($str);
    echo '</pre>';
    exit;
}
