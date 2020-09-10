import {addUserData} from './moduls/userData.js';
import {getGeo} from './moduls/user/geo.js';
import { getBrowser } from './moduls/user/browser.js';

// Добавление данных пользователя в localStorage
addUserData(); // userAgent, language
getGeo(); // Geo position
getBrowser(); // Get browser