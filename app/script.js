obj= {
    skype: document.querySelector('.skype'),
    navTab : document.querySelector('.navTab'),
    navModal : document.querySelector('.navModal'),
    menuBtn  : document.querySelector('.modalBtn'),
    modal    : document.querySelector('#ModalMenu')
}
//-------------------------------------------------------------------
function screenResize(){
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
//
// слушаем событие resize
    window.addEventListener('resize', () => {
        // получаем текущее значение высоты
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}
//---------------------------------------------------------------------
function menuShow() {
   if(window.screen.width < 900){
       obj.navTab.classList.add('hide');
       obj.menuBtn.classList.remove('hide');
       obj.navModal.classList.remove('hide');
   }
   else {
       obj.navTab.classList.remove('hide');
       obj.menuBtn.classList.add('hide');
       obj.navModal.classList.add('hide');
   }
}
//---------------------------------------------------------------------
function modalClose() {
   let ul = obj.navModal,
       modal = obj.modal,
       list = ul.querySelectorAll('li');

   for (let i = 0; i < list.length; i++){
       list[i].addEventListener('click', ()=>{
           setTimeout(()=>{
               $('#ModalMenu').modal('hide');
               },300)
       })
   }

}
modalClose();
menuShow();
screenResize();