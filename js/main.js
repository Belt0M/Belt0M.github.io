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

/* - - - Swiper - - - */

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  speed: 500
});

/* - - - onScroll - - - */

const header = document.querySelector(".header")

if(window.innerWidth >= 1400){
  window.onscroll = function () {
    let top = window.scrollY;
    // console.log(top);
    if ((top >= 760 && top <= 1580) || (top > 2653.01)) {
      header.classList.add("active");
      header.classList.remove("active2", "active3");
  
    } else if (top > 1580.01 && top <= 1889) {
      header.classList.add("active2");
      header.classList.remove("active", "active3");
    } else if (top > 1889.01 && top <= 2653) {
      header.classList.add("active3");
      header.classList.remove("active", "active2");
    } else {
      header.classList.remove("active", "active2", "active3");
    }
  } 
} else {
  header.classList.add("mobile");
}

// function checkMediaQuery() {
//   if (window.innerWidth < 1250) {
//     window.onscroll = function () {
//       let top = window.scrollY;
//       console.log(top);
//       if ((top >= 615 && top <= 1295) || (top > 1905.01)) {
//         header.classList.add("active");
//         header.classList.remove("active2", "active3");

//       } else if (top > 1295.01 && top <= 1472) {
//         header.classList.add("active2");
//         header.classList.remove("active", "active3");
//       } else if (top > 1472.01 && top <= 1905) {
//         header.classList.add("active3");
//         header.classList.remove("active", "active2");
//       } else {
//         header.classList.remove("active", "active2", "active3");
//       }
//     }
//   } else if(window.innerWidth < 950){
//     window.onscroll = function () {
//       let top = window.scrollY;
//       console.log(top);
//       if ((top >= 615 && top <= 1285) || (top > 2040.01)) {
//         header.classList.add("active");
//         header.classList.remove("active2", "active3");

//       } else if (top > 1295.01 && top <= 1513) {
//         header.classList.add("active2");
//         header.classList.remove("active", "active3");
//       } else if (top > 1513.01 && top <= 2048) {
//         header.classList.add("active3");
//         header.classList.remove("active", "active2");
//       } else {
//         header.classList.remove("active", "active2", "active3");
//       }
//     }
//   } else if(window.innerWidth < 500){
//     window.onscroll = function () {
//       let top = window.scrollY;
//       // console.log(top);
//       if ((top >= 315 && top <= 1095) || (top > 1700.01)) {
//         header.classList.add("active");
//         header.classList.remove("active2", "active3");

//       } else if (top > 1095.01 && top <= 1450) {
//         header.classList.add("active2");
//         header.classList.remove("active", "active3");
//       } else if (top > 1415.01 && top <= 1700) {
//         header.classList.add("active3");
//         header.classList.remove("active", "active2");
//       } else {
//         header.classList.remove("active", "active2", "active3");
//       }
//     }
//   }
// }
// window.addEventListener('resize', checkMediaQuery);

/* - - - Menu onClick - - - */
let navMobile = document.querySelector(".nav-mobile");
let menuIcon = document.querySelector(".menu-icon").addEventListener("click", function () {
  navMobile.classList.add("active");
})

let closeIcon = document.querySelector(".nav-mobile").addEventListener("click", function () {
  navMobile.classList.remove("active");
})

/* - - - Menu items fadding-in - - - */

const listItems = document.querySelectorAll(".list-item");
const logoFade = document.querySelector(".logo");

setTimeout(() => {
  logoFade.classList.add("fadein")
}, 250)

for (let i = 0; i < listItems.length; ++i) {
  fadeIn(listItems[i], i * 250)
}
function fadeIn (item, delay) {
  setTimeout(() => {
    item.classList.add('fadein')
  }, delay)
}

