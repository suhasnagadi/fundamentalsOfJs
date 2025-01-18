'use strict';

let modal = document.querySelector('.modal');

let overlay = document.querySelector('.overlay');

let btnCloseModal = document.querySelector('.close-modal');

let btnsOpenModal = document.querySelectorAll('.show-modal');

let openModal = function(){

    console.log('Button Clicked');

    modal.classList.remove('hidden');

    overlay.classList.remove('hidden');
};

let closeModal = function(){

    console.log('Close Button Clicked');

    modal.classList.add('hidden');

    overlay.classList.add('hidden');

}

for(let i =0; i<btnsOpenModal.length;i++){

    /**
     * Here instead of calling the function openModal()
     * we are just mentioning it as a callback function with no ();
     */

    btnsOpenModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(event){

    if(event.key === 'Escape' && !modal.classList.contains('hidden')){

        /**
         * Here we are calling the function with ()
         * because this is not a callback
         */

        closeModal();
    }
})