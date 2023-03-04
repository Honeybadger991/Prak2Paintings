const modal = () =>{
    let btnPressed = false;

    function bindModals(triggerSelector, modalSelector, closeSelector, destroyElem = false){
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScrollWidth();
              
        
        trigger.forEach(item =>{
            item.addEventListener('click', (e)=>{
                if(e.target){
                    e.preventDefault()
                }

                btnPressed = true;

                if(destroyElem){
                    item.remove();
                }

                windows.forEach(item =>{
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn')
                })
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            })
        });

        modal.addEventListener('click', (e)=>{
            if(e.target === modal && closeClickByOverlay){
                windows.forEach(item =>{
                    item.style.display = 'none';
                })
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });

        close.addEventListener('click', ()=>{
            windows.forEach(item =>{
                item.style.display = 'none';
            })
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
    };

    function showModalByTime(modalSelector, timer){
        let windows = document.querySelectorAll('[data-modal]');
        setTimeout(()=>{
            let display;
            windows.forEach(item =>{
                if(getComputedStyle(item).display !== 'none'){
                    display = true;
                }
            })

            if(!display){
                let scroll = calcScrollWidth();
                document.querySelector(modalSelector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            }
        }, timer)
    }

    function showModalByScroll(elem){
        window.addEventListener('scroll', () => {
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight)){
                document.querySelector(elem).click()
            }
        })
    }

    function calcScrollWidth(){
        let div = document.createElement('div')
        div.style.height = '50px';
        div.style.width = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
    
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }


    bindModals('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    showModalByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 60000);
};

export default modal;