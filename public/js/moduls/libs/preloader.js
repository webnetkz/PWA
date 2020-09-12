// Модуль загрузки v0.02 12.09.2020
export function preloader() {
	// Весь контейнер загрузчик
	let	allPreloader = document.createElement('div');
	allPreloader.setAttribute('class', 'preloader');
	// Заголовок загрузки
	let	textLoader = document.createElement('p');
		textLoader.textContent = 'Preloader';
		textLoader.style.cssText += 'color: white; text-align: center;'
		textLoader.style.cssText += 'font-size: 5em; text-shadow: 0 0 25px red;';
	// Элемент загрузки
	let	divLoader = document.createElement('div');
		divLoader.setAttribute('class', 'loader');
	// Стили \ Анимации
	let	headStyle = document.createElement('style');
	let	cssPreloader = '*{margin: 0; padding:0;} .preloader {position: fixed; top: 0; left 0; width: 100%; height: 100%; background-color: black; z-index: 2; transition: 1s all; opacity: 1; visibility: visible;}';
	let	cssPreloader0 = '.loader {width: 100px; height: 100px; border: 8px solid white; border-radius: 50%; border-top-color: blue; border-bottom-color: green; border-left-color: red; border-right-color:yellow; box-shadow: -30px 10px 200px blue; position: absolute; left: 50%; top: 50%; transform: transtate(-50%, -50%); animation: 300ms spin infinite linear;}';
	let	cssPreloader1 = '@keyframes spin {from{transform: translate(-50%, -50%) rotate(0deg)} to{transform: translate(-50%, -50%) rotate(360deg)}}';

		headStyle.textContent = cssPreloader + cssPreloader0 + cssPreloader1;
	// Добавляем элементы на страницу
		document.body.appendChild(allPreloader);
		allPreloader.appendChild(textLoader);
		allPreloader.appendChild(divLoader);
		document.head.appendChild(headStyle);
	// Обработчик времени загрузки 0.5с
	document.body.onload = function() {
			setTimeout(function() {
				let preloader = document.getElementsByClassName('preloader')[0];
				if(!preloader.classList.contains('done')) {
					preloader.style.cssText = 'opacity: 0; visibility: hidden;';
				}
			}, 500);
		}
	// Принудительно уберам загрузчик через 2с
	setTimeout(removePreloader, 2000);
	function removePreloader() {
		document.body.removeChild(allPreloader);
		document.head.removeChild(headStyle);
	}
}

