const tabs = () => {
    const menu = document.querySelector('.portfolio-menu'),
          menuItem = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          all = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    function showTabsContent (selector){
        all.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        })
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');
        if (selector){
            wrapper.querySelectorAll(selector).forEach(item => {
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn')
            })
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn')
        }
    }

    menu.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        menuItem.forEach(item => {
            item.classList.remove('active');
        })
        target.classList.add('active');
        if (target && target.classList.contains('all')){
            showTabsContent('.all')
        }
        if (target && target.classList.contains('lovers')){
            showTabsContent('.lovers')
        }
        if (target && target.classList.contains('chef')){
            showTabsContent('.chef')
        }
        if (target && target.classList.contains('girl')){
            showTabsContent('.girl')
        }
        if (target && target.classList.contains('guy')){
            showTabsContent('.guy')
        }
        if (target && target.classList.contains('grandmother') || target.classList.contains('granddad')){
            showTabsContent()
        }
    });
};

export default tabs;