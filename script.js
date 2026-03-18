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

//script para o autocontraste da pagina
const botaoContraste = document.getElementById("botaoAutocontraste");

botaoContraste.addEventListener("click", () => {
  document.body.classList.toggle("contraste");
});