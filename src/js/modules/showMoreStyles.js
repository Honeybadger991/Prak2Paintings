import {getResources} from "../services/requests";

const showMoreStyles = (trigger, area) =>{

    const btn = document.querySelector(trigger),
          section = document.querySelector(area);

    btn.addEventListener('click', function() {
        getResources('http://localhost:3000/styles')
            .then(res => {
                createCards(res);
                btn.remove();
            })
            .catch(error => {
                let errMessage = document.createElement('div');
                errMessage.style.textAlign = 'center';
                errMessage.textContent = `Произошла ошибка (${error})`;
                section.appendChild(errMessage);
            })
    })


    function createCards(response){
        response.forEach(({src, title, link})=>{
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt>
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
            </div>`;
            section.appendChild(card);
        })
    }
};



export default showMoreStyles;