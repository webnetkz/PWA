// userAgent пользователя
export let userAgent = window.navigator.userAgent;
// Язык браузера пользователя
export let userLang = window.navigator.languages;
// GEO локация пользователя
export let geo = window.navigator.geolocation;
// Заряд батареи пользователя
let battery = navigator.getBattery();


// Добавление данных в localStorage
export function addUserData() {
    localStorage.setItem('userAgent', userAgent);
    localStorage.setItem('userLang', userLang);
    localStorage.setItem('geo', geo);
    localStorage.setItem('battery', battery);
}

export function getGeo() {
    let geo = localStorage.getItem('geo');
    console.log(geo);
}

export function getBattery() {
    let geo = localStorage.getItem('battery');
    console.log(battery);
}