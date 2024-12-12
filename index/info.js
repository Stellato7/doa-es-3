function mostrarInfo(id) {
    // Oculta todas as caixas de informação
    const infos = document.querySelectorAll('.info-box');
    infos.forEach(info => {
      if (info.id !== id) {
        info.classList.remove('show');
        setTimeout(() => (info.style.display = 'none'), 500); // Aguarda a transição antes de ocultar
      }
    });
  
    // Exibe a caixa de informação correspondente
    const info = document.getElementById(id);
    if (info) {
      info.style.display = 'block'; // Garante que estará visível antes da transição
      setTimeout(() => info.classList.add('show'), 10); // Adiciona classe após pequeno atraso
    }
 }
//   let slideIndex = 0;

// function mostrarSlide(index) {
//     const slides = document.querySelectorAll(".slide");
//     if (index >= slides.length) {
//         slideIndex = 0;
//     } else if (index < 0) {
//         slideIndex = slides.length - 1;
//     }
//     const slideContainer = document.querySelector(".slides");
//     slideContainer.style.transform = `translateX(${-100 * slideIndex}%)`;
// }

// function moverSlide(n) {
//     slideIndex += n;
//     mostrarSlide(slideIndex);
// }

// // Inicializar o carrossel mostrando o primeiro slide
// mostrarSlide(slideIndex);

// // setInterval(() => {
// //   slideIndex++;
// //   mostrarSlide(slideIndex);
// // }, 4000);  // 4000 milissegundos = 4 segundos

const elem = document.querySelector('.slides');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});