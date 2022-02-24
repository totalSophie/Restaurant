import createHome from './modules/home.js';
import createMenu from './modules/menu.js';

function addNavEvents(){
    const homebtn = document.querySelector('#home');
    const menubtn = document.querySelector('#menu');

    homebtn.addEventListener('click',createHome);
    menubtn.addEventListener('click',createMenu);
}

function init(){
    createHome();
    createHome();
    addNavEvents();
}

init();