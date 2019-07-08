function makeResizableDiv(){
    alert('bla')
    const wrapper = document.querySelector('.wrapper');
    let resizeableDiv = document.querySelectorAll('div .item');
    let minimumSize = 50;

    let originalWidth = 0;
    let originalX = 0;
    let originalMouseX = 0;

    for (let i = 0; i < resizeableDiv.length; i++) {
        const currentDiv = resizeableDiv[i];
        // currentDiv.addEventListener('mousedown', function(e){
            
        //     e.preventDefault();
        //     originalWidth = parseFloat(getComputedStyle(currentDiv, null).getPropertyValue('width').replace('px', ''));
        //     originalX = currentDiv.getBoundingClientRect().right;
        //     originalMouseX = e.pageX;

        //     wrapper.addEventListener('mousemove', resize);
        //     window.addEventListener('mouseup', stopResize);

        //     function resize(e){
        //         if (currentDiv) {
        //             const width = originalWidth + (e.pageX - originalMouseX);

        //             if(width > minimumSize){
        //                 currentDiv.style.width = width + 'px';
        //                 document.getElementById('col1').innerText = width + 'px';
        //             }
        //         }
        //     }
        //     function stopResize() {
        //         wrapper.removeEventListener('mousemove', resize);
        //     }
        // });

        currentDiv.addEventListener('ontouchstart', function(e) {
            alert(e);
            // e.preventDefault();
            originalWidth = parseFloat(getComputedStyle(currentDiv, null).getPropertyValue('width').replace('px', ''));
            originalX = currentDiv.getBoundingClientRect().right;
            originalMouseX = e.pageX;

            wrapper.addEventListener('ontouchmove', resize);
            wrapper.addEventListener('ontouchend', stopResize);

            function resize(e){
                if (currentDiv) {
                    const width = originalWidth + (e.pageX - originalMouseX);

                    if(width > minimumSize){
                        currentDiv.style.width = width + 'px';
                    }
                }
            }
            function stopResize() {
                wrapper.removeEventListener('mousemove', resize);
            }
        });
    }
}