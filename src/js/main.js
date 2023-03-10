import modal from "./modules/modal";
import sliders from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import tabs from "./modules/tabs";
import imageBlocks from "./modules/imageBlocks";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scroll from "./modules/scroll";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', ()=>{

    modal();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    tabs();
    imageBlocks('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger', '.burger-menu');
    scroll('.pageup');
    drop();
})