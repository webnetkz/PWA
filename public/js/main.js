import {addUserData} from './moduls/userData.js';
import {getGeo} from './moduls/user/geo.js';

// Добавление данных пользователя в localStorage
addUserData(); // userAgent, language
getGeo(); // Geo position