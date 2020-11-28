import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCMenu} from '@material/menu';

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.listen('MDCTopAppBar:nav', () => {
    console.log('menu clicked state of drawer ' + drawer.open);
    drawer.open = !drawer.open;
});

document.querySelector('#menu-button').addEventListener("click", () => {
    const menu = new MDCMenu(document.querySelector('.mdc-menu'));
    menu.open = !menu.open;
});

