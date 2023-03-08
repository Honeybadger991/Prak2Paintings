const checkTextInputs = (selector) => {
    const inputs = document.querySelectorAll(selector);

    let regexp;

    selector === '[name="name"]' ? regexp = /[^а-яё]/gi : regexp = /[^а-яё 0-9\.,&!:()]/gi;

    inputs.forEach(input =>{
        input.addEventListener('keypress', (e) =>{
            if(e.key.match(regexp)){
                e.preventDefault();
            }
        })
        input.addEventListener('input', () =>{
            input.value = input.value.replace(regexp, '')
        })
    })
};

export default checkTextInputs;