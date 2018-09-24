
(() => {
    console.log('javascript is running! go catch it!');

    //VARIABLES 
    const leftHead = document.querySelector('.personOne'),
        rightHead = document.querySelector('.personTwo');

    //FUNCTIONS
    function init(){
        leftHead.classList.remove('open-side');
        rightHead.classList.remove('open-side');
    }

    function openSide(e){
        if (this == leftHead){
            this.classList.add('slide-right');
            rightHead.classList.add('hidden');
        }else if(this == rightHead){
            this.classList.add('slide-left');
            leftHead.classList.add('hidden');
        }


    }


    init();
    //EVENTLISTENERS
    leftHead.addEventListener('click', openSide);
    rightHead.addEventListener('click', openSide);

})();