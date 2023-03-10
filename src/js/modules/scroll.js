const scroll = (upSelector) => {
    const upBtn = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650){
            upBtn.classList.add('animated', 'fadeIn');
            upBtn.classList.remove('fadeOut');
        } else {
            upBtn.classList.add('fadeOut');
            upBtn.classList.remove('fadeIn');
        }
    });

    const links = document.querySelectorAll('[href^="#"]'),  //получаем все ссылки на лендинг - каретка указывает, что название     начитается с #//
          speed = 0.1;

    links.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            
            let widthTop = document.documentElement.scrollTop,//отскроллено сверху
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,//получаем блоки через название хеши и сразу через свойство топ этого метода (у него много свойств, касательно положения элемента) получаем расстояние от экрана (которое может быть и отрицательным, если мы уже проскроллили этот блок) до блока
                start = null;//просто что бы запустить, в функции переназначается
    
            requestAnimationFrame(step);
    
            function step(time){//time приходит автоматически - время от загрузки страницы (почему приходит само - пока хз)
                if(start === null){
                    start = time;
                };
    
                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));//r - сколько надо проскроллить за анимацию до блока

                document.documentElement.scrollTo(0, r);
    
                if(r != widthTop + toBlock){
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash;
                }
            }
        })
    })
};

export default scroll;