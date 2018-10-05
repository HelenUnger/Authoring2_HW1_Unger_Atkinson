
(() => {
    console.log('javascript is running! go catch it!');

    //VARIABLES 
    const jacobHead = document.querySelector('.personOne'),
        helenHead = document.querySelector('.personTwo'),
        jacobHeadImg = jacobHead.querySelector('img'),
        helenHeadImg = helenHead.querySelector('img'),
        jacobTitle = document.querySelector('#jacob-title'),
        helenTitle = document.querySelector('#helen-title'),
        jacobDesc = document.querySelector('.j-desc'),
        helenDesc = document.querySelector('.h-desc'),
        jacobBoxes = document.querySelectorAll('.j-box'),
        helenBoxes = document.querySelectorAll('.h-box'),
        mainJBox = document.querySelector('.jacob-boxes'),
        mainHBox = document.querySelector('.helen-boxes'),
        lightBox = document.querySelector('.light-box'),
        boxes = document.querySelectorAll('.box'),
        x = document.querySelector('.exit');

    //FUNCTIONS
    function openSide(e){
        if (this == jacobHeadImg || this == jacobTitle){
            jacobHead.classList.add('slide-left');
            helenHead.classList.add('opacity');
            helenTitle.classList.add('hidden');
            jacobHead.querySelector('.social-media').classList.add('visible');
            jacobTitle.classList.add('main-title');
            jacobDesc.classList.add('show-desc');
            mainHBox.classList.add('hidden');
            jacobBoxes.forEach(function(element) {
                element.classList.add('grow');
              });
        }else if(this == helenHeadImg || this == helenTitle){
            helenHead.classList.add('slide-right');
            jacobHead.classList.add('opacity');
            jacobTitle.classList.add('hidden');
            helenHead.querySelector('.social-media').classList.add('visible');
            helenTitle.classList.add('main-title');
            helenDesc.classList.add('show-desc');
            mainJBox.classList.add('hidden');
            helenBoxes.forEach(function(element) {
                element.classList.add('grow');
              });
        }else{
            console.log('WHAT');
        }
    }

    function showLightBox(){
        let source = this.firstChild.getAttribute('src');
        lightBox.classList.add('shown');
        bigImage = document.createElement("IMG");
        bigImage.setAttribute("src", source);
        bigImage.setAttribute("class", "lightBoxImage");
        lightBox.appendChild(bigImage);
        console.log(source);
    }

    function closeLightBox(){
        lightBox.classList.remove('shown');
    }


    //EVENTLISTENERS
    jacobHeadImg.addEventListener('click', openSide);
    helenHeadImg.addEventListener('click', openSide);
    jacobTitle.addEventListener('click', openSide);
    helenTitle.addEventListener('click', openSide);
    boxes.forEach(box => box.addEventListener('click', showLightBox));
    x.addEventListener('click', closeLightBox);
    

})();