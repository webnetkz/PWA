﻿// Модуль отправки данных на сервер v1.0 13.09.2020
////////////////////////////////////////////////////////
// Свойства объекта XMLHttpRequest /////////////////////
////////////////////////////////////////////////////////
// readyState //////////////////////////////////////////
// - Позволяет узнать состояние готовности запроса /////
// 0 = Метод open() еще не был вызван //////////////////
// 1 = Метод open() был вызван /////////////////////////
// 2 = Были получены заголовки /////////////////////////
// 3 = Идет прием тела ответа //////////////////////////
// 4 = Прием ответа завершен ///////////////////////////
////////////////////////////////////////////////////////
// onreadystatechange //////////////////////////////////
// - Содержит обработчик события, который будет вызван /
//   изменении значения readyState /////////////////////
////////////////////////////////////////////////////////
// status///////////////////////////////////////////////
// - Код статуса HTTP, возвращенный сервером ///////////
////////////////////////////////////////////////////////
// responseText/////////////////////////////////////////
// - Данные, возвращенные сервером в текстовом формате /
////////////////////////////////////////////////////////
// responseXML//////////////////////////////////////////
// - Данные, возвращенные сервером в формате XML ///////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// Методы объекта XMLHttpsRequest //////////////////////
////////////////////////////////////////////////////////
// open() //////////////////////////////////////////////
// - Настраивает запрос ////////////////////////////////
////////////////////////////////////////////////////////
// send() //////////////////////////////////////////////
// - Открывает соединение и отправляет запрос //////////
////////////////////////////////////////////////////////
// abort() /////////////////////////////////////////////
// - Отмена текущего запроса ///////////////////////////
////////////////////////////////////////////////////////
// setRequestHeader() //////////////////////////////////
// - Устанавливает заголовок запроса ///////////////////
////////////////////////////////////////////////////////
// getResponseHeader() /////////////////////////////////
// - Возвращение значения параметра в виде строки //////
////////////////////////////////////////////////////////
// getAllResponseHeaders() /////////////////////////////
// - Возвращение всех заголовков в виде строк //////////
////////////////////////////////////////////////////////

// Отправка дыннх на сервер и получение ответа
export function request(userData, serverFile) {

    userData = encodeURIComponent(userData);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', serverFile);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let res = xhr.responseText;
            localStorage.setItem('ajaxResponse', res);
        }
    }

    xhr.send('userData=' + userData);
}