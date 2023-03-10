const drop = () => {
    const inputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventType =>{
        inputs.forEach(input => {
            input.addEventListener(eventType, preventDefaults, false)
        });
    });

    function preventDefaults(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item){
        item.closest('.file_upload').style.border = 'solid 5px yellow';
        item.closest('.file_upload').style.background = 'rgba(0, 0, 0, .7)';
    };

    function unhighlight(item){
        item.closest('.file_upload').style.border = 'none';
        if(item.closest('.calc-form')){
            item.closest('.file_upload').style.background = '#fff';
        } else{
            item.closest('.file_upload').style.background = '#ededed';
        }
    };

    ['dragenter', 'dragover'].forEach(eventType =>{
        inputs.forEach(input => {
            input.addEventListener(eventType, () => highlight(input), false)
        });
    });    
    
    ['dragleave', 'drop'].forEach(eventType =>{
        inputs.forEach(input => {
            input.addEventListener(eventType, () => unhighlight(input), false)
        });
    });

    inputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            e.preventDefault();
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });

};

export default drop;