const sliders = (sliderContentSelector, sliderDirection, prevButton, nextButton) =>{
    const slider = document.querySelectorAll(sliderContentSelector),
          direction = sliderDirection;

    let activeSliderIndex = 1;
    let animationPaused = false;


    function showSlide(index){
        slider.forEach(item =>{
            item.classList.add('animated')
            item.style.display = 'none';
        })

        slider[index - 1].style.display = 'block';
    }

    showSlide(activeSliderIndex);


    function activeSlider (n){
        activeSliderIndex += n
        if (activeSliderIndex > slider.length){
            activeSliderIndex = 1
        } if (activeSliderIndex < 1){
            activeSliderIndex = slider.length
        }
        showSlide(activeSliderIndex);
    }

    activeSlider(1);

    try{
        const prevBtn = document.querySelector(prevButton);
        const nextBtn = document.querySelector(nextButton);

        prevBtn.addEventListener('click', () =>{
            activeSlider(-1);
            slider[activeSliderIndex - 1].classList.remove('fadeInLeft')
            slider[activeSliderIndex - 1].classList.add('fadeInRight')
        })
        nextBtn.addEventListener('click', () =>{
            activeSlider(1);
            slider[activeSliderIndex - 1].classList.remove('fadeInRight')
            slider[activeSliderIndex - 1].classList.add('fadeInLeft')
        })

    } catch(e){}
    
    function activateAnimation(){
        if(direction === 'vertical'){
            animationPaused = setInterval(()=>{
                activeSlider(1);
                slider[activeSliderIndex - 1].classList.add('fadeInDown')
            }, 3000)
        } if (direction === 'horizontal'){
            animationPaused = setInterval(()=>{
                activeSlider(1);
                slider[activeSliderIndex - 1].classList.remove('fadeInRight')
                slider[activeSliderIndex - 1].classList.add('fadeInLeft')
            }, 3000)
        }
    }

    activateAnimation();


    slider[0].parentNode.addEventListener('mouseenter', ()=>{
        clearInterval(animationPaused)
    });
    slider[0].parentNode.addEventListener('mouseleave', ()=>{
        activateAnimation()
    })


};

export default sliders;