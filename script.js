function makeResizableDiv(){
    const wrapper = document.querySelector('.wrapper');
    let resizeableDiv = document.querySelectorAll('div .item');
    let minimumSize = 50;

    let originalWidth = 0;
    let originalX = 0;
    let originalMouseX = 0;

    for (let i = 0; i < resizeableDiv.length; i++) {
        const currentDiv = resizeableDiv[i];
        currentDiv.addEventListener('mousedown', (e) => {
            e.preventDefault();
            originalWidth = parseFloat(getComputedStyle(currentDiv, null).getPropertyValue('width').replace('px', ''));
            originalX = currentDiv.getBoundingClientRect().right;
            originalMouseX = e.pageX;

            wrapper.addEventListener('mousemove', resize);
            window.addEventListener('mouseup', stopResize);

            function resize(e){
                if (currentDiv) {
                    const width = originalWidth + (e.pageX - originalMouseX);
                    if(width > minimumSize){
                        currentDiv.style.width = width + 'px';
                        document.getElementById('col1').innerText = width + 'px';
                    }
                }
            }
            function stopResize() {
                wrapper.removeEventListener('mousemove', resize);
            }
        });
    }
}

function makeResizableDivTouch(){
    const wrapper = document.querySelector('.wrapper');
    let resizeableDiv = document.querySelectorAll('div .item');
    let minimumSize = 50;

    let originalWidth = 0;
    let originalX = 0;
    let originalMouseX = 0;

    for (let i = 0; i < resizeableDiv.length; i++) {
        const currentDiv = resizeableDiv[i];
        currentDiv.addEventListener('touchstart', (e) => {
            e.preventDefault();
            originalWidth = parseFloat(getComputedStyle(currentDiv, null).getPropertyValue('width').replace('px', ''));
            originalX = currentDiv.getBoundingClientRect().right;
            originalMouseX = e.changedTouches[0].pageX;

            wrapper.addEventListener('touchmove', resize);
            wrapper.addEventListener('touchend', stopResize);
            function resize(e){
                if (currentDiv) {
                    const width = originalWidth + (e.changedTouches[0].pageX - originalMouseX);
                    if(width > minimumSize){
                        currentDiv.style.width = width + 'px';
                        document.getElementById('col1').innerText = width + 'px';
                    }
                }
            }
            function stopResize() {
                wrapper.removeEventListener('touchmove', resize);
            }
        });
    }
}
