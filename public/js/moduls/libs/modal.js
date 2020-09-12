// Модуль модального окна v 0.01 12.09.2020
export function btnForModal(element, messages) {
	// Слушаем событие клика
	element.addEventListener('click', showModal);
	// Модальное окно
	function showModal() {
		// Контейнер для модального окна
		let modalDiv = document.createElement('div');
		// Modal
		let	divContent = document.createElement('div');
			divContent.style.cssText = 'background-color: rgb(254, 254, 254);'+
			'margin: 8px auto;'+
			'padding: 2em;'+
			'border: 1px solid rgb(136, 136, 136);'+
			'width: 80%;'+
			'height: auto;';
		// Close button 
		let	closeSpan = document.createElement('span');
			closeSpan.textContent = 'X';
			closeSpan.style.cssText = 'overflow: auto;'+
			'margin: 0;'+
			'user-select: none;'+
			'cursor: default;'+
			'font-family: sans-serif;'+
			'color: rgb(136, 136, 136);'+
			'float: right;'+
			'font-size: 2em;'+
			'font-weight: bold;';
		// Text window
		let	modalP = document.createElement('p');
			modalP.textContent = messages;
		// Append elements
		document.body.appendChild(modalDiv);
		modalDiv.appendChild(divContent);
		divContent.appendChild(closeSpan);
		divContent.appendChild(modalP);

		modalDiv.style.cssText = 'position: fixed;'+
		'z-index: 999;'+
		'left: 0;'+
		'top: 0;'+
		'width: 100vw;'+
		'height: 100vh;'+
		'transition-duration: 500ms;'+
		'owerflow: auto;'+
		'background-color: rgba(0, 0, 0, 0.5);';

		// Close click button
		closeSpan.addEventListener('click', closeBtn);
		function closeBtn() { 
			document.body.removeChild(modalDiv);
		}
		// Close click window
		window.onclick = function(event) {
			if(event.target == modalDiv) {
				document.body.removeChild(modalDiv);
			}
		}
	}

}

 