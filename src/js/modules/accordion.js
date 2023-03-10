const accordion = (btnTriggers, contentBlocks) => {
    const btns = document.querySelectorAll(btnTriggers),
          content = document.querySelectorAll(contentBlocks);

    content.forEach(item => {
        item.classList.add('animated', 'fadeInUp');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            if(this.classList.contains('active-style')){
                this.classList.remove('active-style');
                this.nextElementSibling.classList.remove('active-content');
            } else {
                btns.forEach(item => {
                    item.classList.remove('active-style');
                });
                content.forEach(item => {
                    item.classList.remove('active-content');
                });
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
            }
        })
    })
};

export default accordion;