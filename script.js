

function ocultarContenidoResultBar(){
    const contentImg = document.getElementsByClassName('img-text');
    const resultText = document.getElementsByClassName('result-text');

    for (let i = 0; i < contentImg.length; i++) {
        contentImg[i].style.display = 'none';
    }

    for (let i = 0; i < resultText.length; i++) {
        resultText[i].style.display = 'flex';
    }
}

