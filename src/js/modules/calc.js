const calc = (picSize, picMaterial, picOptions, picDiscount, picTotal) => {
    const size = document.querySelector(picSize),
          material = document.querySelector(picMaterial),
          options = document.querySelector(picOptions),
          discount = document.querySelector(picDiscount),
          total = document.querySelector(picTotal);

    function calcPrice(){
        let res;
        res = Math.round((+size.value) * (+material.value) + (+options.value));
        if(discount.value === 'IWANTPOPART'){
            res = Math.round(res * 0.7)
        } else if (size.value === '0' || material.value === '0'){
            res = 'Для расчета нужно выбрать размер картины и материал картины';
        }
        total.textContent = res;
        return res;
    }

    size.addEventListener('change', calcPrice);
    material.addEventListener('change', calcPrice);
    options.addEventListener('change', calcPrice);
    discount.addEventListener('input', calcPrice)

};

export default calc;