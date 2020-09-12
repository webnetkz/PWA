// Модуль hover эффекта для блоков v 0.3 10.08.2020
// Принимает класс блоков на которые будет наложен эффект
export function hoverBlock() {

    // Стили \ Анимации
    let	headStyle = document.createElement('style');
    let	css = '.cardItem {transition-duration: 200ms;} .card {perspective: 1000px; transform-style: preserve-3; dwidth: 200px; height: 400px;}';

    headStyle.textContent = css;
    document.head.appendChild(headStyle);

    const cards = document.querySelectorAll('.card');
    
    for(let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.addEventListener('mousemove', rotate);
        card.addEventListener('mouseout', sRotate);
    }
    
    function rotate(event) {
        const cardItem = this.querySelector('.cardItem');
        const halfHeight = cardItem.offsetHeight / 2;
        const halfWidth = cardItem.offsetWidth / 2;
    
        cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 +'deg)' +
        'rotateY('+ (event.offsetX - halfWidth) / 5 +'deg)';
    }
    
    function sRotate(event) {
        const cardItem = this.querySelector('.cardItem');
        cardItem.style.transform = 'rotate(0)';
    }
}