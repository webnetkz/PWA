// userAgent пользователя
let userAgent = window.navigator.userAgent;
// Язык браузера пользователя
let userLang = window.navigator.languages;


// Добавление данных в localStorage
export function addUserData() {
    localStorage.setItem('userAgent', userAgent);
    localStorage.setItem('userLang', userLang);
}