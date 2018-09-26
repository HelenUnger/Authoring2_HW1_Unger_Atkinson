
(() => {
    console.log('javascript is running! go catch it!');

    //VARIABLES 
    const leftHead = document.querySelector('.personOne'),
        rightHead = document.querySelector('.personTwo'),
        jacobTitle = document.querySelector('#jacob-title'),
        helenTitle = document.querySelector('#helen-title');

    //FUNCTIONS
    function openSide(e){
        if (this == leftHead || this == jacobTitle){
            leftHead.firstChild.classList.add('slide-left');
            rightHead.classList.add('opacity');
            helenTitle.classList.add('hidden');
            jacobTitle.classList.add('main-title');
        }else if(this == rightHead || this == helenTitle){
            rightHead.firstChild.classList.add('slide-right');
            leftHead.classList.add('opacity');
            jacobTitle.classList.add('hidden');
            helenTitle.classList.add('main-title');
        }else{
            console.log('WHAT');
        }


    }

    //EVENTLISTENERS
    leftHead.addEventListener('click', openSide);
    rightHead.addEventListener('click', openSide);
    jacobTitle.addEventListener('click', openSide);
    helenTitle.addEventListener('click', openSide);

})();