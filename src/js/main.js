import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/form";
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2021-01-01';
    changeModalState(modalState);

    timer('#container1', deadline);

    // popup modals
    modals();

    // tabs init for glazing
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    // tabs init for decoration
    tabs('.decoration_slider', '.decoration_tab', '.decoration_content > div > div', 'after_click');

    // window tabs in popup
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

    forms();

    images();
});
