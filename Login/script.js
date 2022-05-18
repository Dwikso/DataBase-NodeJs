let ClearButton = document.querySelector('button');
let input = document.querySelectorAll('input');

ClearButton.addEventListener('click',() =>{
    input.forEach(input => input.value = '');
})