let tamanhoFonte = 16;
const minFonte = 10;
const maxFonte = 30;
const passo = 2;

function aumentarFonte() {
    if (tamanhoFonte < maxFonte){
        tamanhoFonte +=  passo;
        document.body.style.fontSize = tamanhoFonte + 'px'; 
    }
}

function diminuirFonte(){
    if (tamanhoFonte > minFonte){
        tamanhoFonte -= passo;
        document.body.style.fontSize = tamanhoFonte + 'px';
    }
}