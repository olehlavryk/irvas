const modals = () => {

    // bind modals
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        // open modal
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        // close modal
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        // close on modal overlay
        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    function showModelByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    // init show modal by time when user more than 60 sec
    //showModelByTime('.popup', 60000);

    // init popup engineer
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    // init popup
    bindModal('.phone_link', '.popup', '.popup .popup_close');

    // init popup calculate step 1
    bindModal('.popup_calc_btn','.popup_calc', '.popup_calc_close');

    // init popup calculate step 2
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)

    // init popup calculate step 3
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
};

export default modals;