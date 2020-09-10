// userAgent пользователя
export let userAgent = NavigatorID.userAgent;
// OS пользователя
export let os = Navigator.oscpu;
// Является ли онлайн пользователь
export let online = NavigatorOnline.online;
// Язык браузера пользователя
export let userLang = NavigatorLanguage.languages;
// GEO локация пользователя
export let geo = NavigatorGeolocation.geolocation;
// Заряд батареи пользователя
let battery = navigator.getBattery();


// Добавление данных в localStorage
export function addUserData() {
    localStorage.setItem('userAgent', userAgent);
    localStorage.setItem('os', os);
    localStorage.setItem('online', online);
    localStorage.setItem('userLang', userLang);
    localStorage.setItem('geo', geo);
    localStorage.setItem('battery', battery);
}