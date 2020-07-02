import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    // popup modals
    modals();

    // tabs init for glazing
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    // tabs init for decoration
    tabs('.decoration_slider', '.decoration_tab', '.decoration_content > div > div', 'after_click');

    // window tabs in popup
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

    forms();
});
