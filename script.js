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
    result_text.value = encriptar(text);
});

decrypt_btn.addEventListener('click', function(){
    let text = user_text.value.trim();
    validarTexto(text);
    result_text.value = desencriptar(text);
});

function validarTexto(text) {
    if(text === '' || text === null || text === undefined) {
        ocultarResultado();
        msg.innerText = 'Ningún mensaje fue';
    }else if(/^[a-z\s]*$/i.test(text)) {
        mostrarResultado();
    }else{
        ocultarResultado();
        msg.innerText = 'Un caracter no permitido fue';
    }
}

function mostrarResultado(){
    resultContent[0].style.display = 'flex';
    contentImg[0].style.display = 'none';
}

function ocultarResultado(){
    resultContent[0].style.display = 'none';
    contentImg[0].style.display = 'flex';
    msg.innerText = '';
}

var llavesEncriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function encriptar(texto) {
    var textoEncriptado = "";
    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        if (llavesEncriptacion.hasOwnProperty(letra)) {
            textoEncriptado += llavesEncriptacion[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

var llavesDesencriptacion = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function desencriptar(texto) {
    var textoDesencriptado = texto;
    for (var llave in llavesDesencriptacion) {
        var regex = new RegExp(llave, "g");
        textoDesencriptado = textoDesencriptado.replace(regex, llavesDesencriptacion[llave]);
    }
    return textoDesencriptado;
}