import './main.scss'
import 'normalize.css'

import createMenu from './menu';
var menu = createMenu(['Home', 'About', 'CV'], 'menu');
document.body.appendChild(menu);