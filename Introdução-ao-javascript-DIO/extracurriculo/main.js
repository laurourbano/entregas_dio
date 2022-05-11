const corpo = document.querySelector(".dark-mode");
const botao = document.querySelector(".inverter")

botao.addEventListener("click", function(){
        corpo.style.backgroundColor = "black";
        corpo.style.color = "white";
        botao.style.backgroundColor = "white";
        botao.style.color = "black";
});