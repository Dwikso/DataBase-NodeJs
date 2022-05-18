// Creation d'une PopUp our la page de Connexion


const PopUp =  document.querySelector('.PopUp');
const OpenPopUp = document.querySelector('.LoginPopUp');
const ClosePopUp = document.querySelector('.ClosePopUp');

OpenPopUp.addEventListener("click", () => {
    PopUp.showModal();
});

ClosePopUp.addEventListener('click',() =>{
    PopUp.close();
});


// Creation d'une PopUp our la page d'Enregistrement

const PopupRegistration = document.querySelector('.PopUpRegistration');
const OpenRegistration = document.querySelector('.RegistrationPopUp');
const CloseRegistration = document.querySelector('.CloseRegistration');

OpenRegistration.addEventListener("click",() => {
    PopupRegistration.showModal();
});

CloseRegistration.addEventListener("click",() => {
    PopupRegistration.close();
});

