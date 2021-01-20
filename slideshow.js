// Autora: Maria Eduarda A.
// Data: 17/01/2021
/*Descrição: Este ficheiro contém duas funções principais:
uma relativa ao clique nas setas, para que o índice
do slideshow seja atualizado, e outra para que o slide
seja apresentado automaticamente, como pedido. */

// Variável para controlo
var indiceSlide = 0;

// Slides existentes no documento HTML
var slides = document.getElementsByClassName("mySlides");

// Pontos abaixo do slide
var pontos = document.getElementsByClassName("ponto");

// Intervalo para que a imagem troque
var delay = 2000;

// Função para mostrar os slides
mostrarSlides();

function slideAtual(n)
{
    indiceSlide = n;
}

function mostrarSlides() {
  var i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" active", "");
}
indiceSlide++;

if (indiceSlide > slides.length) {indiceSlide = 1}
slides[indiceSlide-1].style.display = "block";
pontos[indiceSlide-1].className += " active";
setTimeout(mostrarSlides, delay);
}