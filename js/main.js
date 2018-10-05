
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
        x = document.querySelector('.exit'),
        backBtn = document.querySelector('.back');

    //FUNCTIONS
    function openSide(e){
        if (this == jacobHeadImg || this == jacobTitle){
            addJLinks();
            backBtn.classList.remove('hidden');
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
            addHLinks();
            backBtn.classList.remove('hidden');
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

    function addHLinks(){
        helenData.links.forEach(link => {
            helenHead.querySelector('ul').innerHTML += link;
        })
    }

    function addJLinks(){
        jacobData.links.forEach(link => {
            jacobHead.querySelector('ul').innerHTML += link;
        })
    }

    function showLightBoxHelen(){
        let source = this.firstChild.getAttribute('src');
        source.split(".").pop();
        lightBox.classList.add('shown');
        bigImage = document.createElement("IMG");
        bigImage.setAttribute("src", source +"-large.jpg");
        bigImage.setAttribute("class", "lightBoxImage");
        lightBox.appendChild(bigImage);
    }

    function showLightBoxJacob(){
        lightBox.classList.add('shown');
        me = this.firstChild.getAttribute('src');
        if (me == 'images/jacob-1.png'){
            lightBox.querySelector('.source').innerHTML = jacobData.videos[0];
        }else if(me == 'images/jacob-2.png'){
            lightBox.querySelector('.source').innerHTML = jacobData.videos[1];
        }else if(me == 'images/jacob-3.png'){
            lightBox.querySelector('.source').innerHTML =jacobData.videos[2];
        }else{
            console.log('whaaa');
        }
    }

    function closeLightBox(){
        let element = document.querySelector('.lightBoxImage');
        lightBox.classList.remove('shown');
        lightBox.querySelector('.source').innerHTML = "";
        lightBox.removeChild(element);
    }


    //EVENTLISTENERS
    jacobHeadImg.addEventListener('click', openSide);
    helenHeadImg.addEventListener('click', openSide);
    jacobTitle.addEventListener('click', openSide);
    helenTitle.addEventListener('click', openSide);
    helenBoxes.forEach(box => box.addEventListener('click', showLightBoxHelen));
    jacobBoxes.forEach(boxx => boxx.addEventListener('click', showLightBoxJacob));
    x.addEventListener('click', closeLightBox);
    

})();