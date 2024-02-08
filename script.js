const contentImg = document.getElementsByClassName('img-text');
const resultContent = document.getElementsByClassName('result-content');
const user_text = document.getElementById('user-text');
const result_text = document.getElementById('result-text');
const encrypt_btn = document.getElementById('encrypt-btn');
const decrypt_btn = document.getElementById('decrypt-btn');
const msg = document.getElementById('msg');


encrypt_btn.addEventListener('click', function(){
    let text = user_text.value.trim();
    validarTexto(text);
});

decrypt_btn.addEventListener('click', function(){
    let text = user_text.value.trim();
    validarTexto(text);
});

function validarTexto(text) {
    if(text === '' || text === null || text === undefined) {
        ocultarResultado();
        msg.innerText = 'Ningún mensaje fue';
    }else if(/^[a-z]*$/i.test(text)) {
        mostrarResultado();
    }else{
        ocultarResultado();
        msg.innerText = 'Un caracter no permitido fue';
    }
}

function mostrarResultado(){
    resultContent[0].style.display = 'flex';
    contentImg[0].style.display = 'none';
    result_text.value = user_text.value;
}

function ocultarResultado(){
    resultContent[0].style.display = 'none';
    contentImg[0].style.display = 'flex';
    msg.innerText = '';
}
