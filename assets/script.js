const popupWrapper = document.querySelector('.popup-wrapper')

const button = document.querySelector('button');

const close = document.querySelector('.close');

button.addEventListener('click', () => {
    popupWrapper.style.display = 'initial';
});

close.addEventListener('click', ()=>{
    popupWrapper.style.display = 'none';
})