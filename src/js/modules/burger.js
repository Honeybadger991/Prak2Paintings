const burger = (burgerTrigger, burgerContent) => {
    const menuBtn = document.querySelector(burgerTrigger),
          menuContent = document.querySelector(burgerContent);

    menuContent.style.display = 'none';

    menuBtn.addEventListener('click', () => {
        if(menuContent.style.display == 'none' && window.screen.availWidth < 993){
            menuContent.style.display = 'block';
        } else {
            menuContent.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if(!window.screen.availWidth < 993){
            menuContent.style.display = 'none';
        }
    })
};

export default burger;