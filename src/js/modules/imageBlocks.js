const imageBlocks = (selector) => {
    const blocks = document.querySelectorAll(selector);

    function showBlockPicture(block){
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none'
        })
    }

    function hideBlockPicture(block){
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p').forEach(p => {
            p.style.display = 'block'
        })
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showBlockPicture(block);
        });
        block.addEventListener('mouseout', () => {
            hideBlockPicture(block);
        })
    })
};

export default imageBlocks;