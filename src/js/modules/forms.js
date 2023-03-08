import {postData} from "../services/requests";
import calc from "./calc";

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]'),
          windows = document.querySelectorAll('[data-modal]');
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        imgLoading: 'assets/img/spinner.gif',
        imgSuccess: 'assets/img/ok.png',
        imgFailure: 'assets/img/fail.png'
    };

    const path = {
        design: 'assets/designer.php',
        server: 'assets/server.php',
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран'
        })
    };

    upload.forEach(item =>{
        item.addEventListener('input', ()=>{
            console.log(item.files[0]);
            let dots;
            let arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';

            item.previousElementSibling.textContent = `${arr[0].substring(0, 6)}${dots}${arr[1]}`;
        })
    })

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let status = document.createElement('div');
            status.classList.add('status');
            item.parentNode.appendChild(status);

            item.classList.add('animated', 'fadeOutUp')
            setTimeout(()=>{
                item.style.display = 'none';
            }, 400)
            
            
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.imgLoading);
            status.append(statusImg);

            let statusMessage = document.createElement('div');
            statusMessage.textContent = message.loading;
            status.appendChild(statusMessage);

            status.classList.add('animated', 'fadeInUp');

            const formData = new FormData(item);

            let api;

            item.closest('.popup-design') || item.classList.contains('calc_form') ?
            api = path.design : api = path.server;

            let price = document.querySelector('.calc-price');

            if(item.classList.contains('calc-form')){
                formData.append('price', price.textContent)
            }

            
            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.imgSuccess);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.imgFailure);
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        status.remove();
                        item.classList.remove('fadeOutUp')
                        item.classList.add('fadeInUp')
                        item.style.display = '';
                    }, 5000);
                    setTimeout(() => {
                        windows.forEach(item =>{
                            item.style.display = 'none';
                            document.body.style.overflow = '';
                            document.body.style.marginRight = `0px`;
                        })
                    }, 4000);
                });
        });
    });
};

export default forms;