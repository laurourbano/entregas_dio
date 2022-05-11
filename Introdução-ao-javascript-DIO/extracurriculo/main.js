const corpo = document.querySelector(".dark-mode");
const botao = document.querySelector(".botao");

function mudaTema(){
        corpo.style.backgroundColor = "black";
        corpo.style.color = "white";
        botao.style.backgroundColor = "white";
        botao.style.color = "black";
};

function mudaTexto(id){
        id.innerHTML = "Mudar para Tema Claro";
};