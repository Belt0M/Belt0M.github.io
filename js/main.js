// var swiper = new Swiper('.swiper-container', {
//     direction: 'vertical',
//     sliderPerView: 1,
//     spaceBetween: 0,
//     mousewheel: true,
//     pagination: {
//         el:'.swiper-pagination',
//         type: 'progressbar',
//     },
//     speed: 1000
// })

// - - - Swiper - - - \\

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    speed: 500
  });

// - - - onScroll - - - \\

const header = document.querySelector(".header")

window.onscroll = function(){
  let top = window.scrollY;
  console.log(top);
  if((top >= 680 && top <= 1420) || (top > 2373.01)){
    header.classList.add("active");
    header.classList.remove("active2", "active3");

  } else if(top > 1418.01 && top <= 1699){
    header.classList.add("active2");
    header.classList.remove("active", "active3");
  } else if(top > 1699.01 && top <= 2373){
    header.classList.add("active3");
    header.classList.remove("active", "active2");
  } else {
    header.classList.remove("active", "active2", "active3");
  }
}
