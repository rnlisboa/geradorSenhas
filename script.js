let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@'
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

//este "slider" vem do id do input
slider.oninput = function () {
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        //charAt escolhe uma posição em charset, Math.floor(Math.random() * n) escolhe um numero inteiro aleatorio e multiplica pelo tamanho de charset
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass;
}

function copyPassword(){
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
}