import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.trainers__content', {
  slidesPerView: '1',
  scrollbar: {
    el: '.trainers__scroll',
    draggable: true,
  },

  breakpoints: {
    577: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  },
  navigation: {
    nextEl: '.trainers__slider-btn--next',
    prevEl: '.trainers__slider-btn--prev',
    disabledClass: "nav-btn--disabled",

  },
  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  // loop: true,
});



// (() => {
//   document.addEventListener("DOMContentLoaded", () => {
//     let gallerySlider = new Swiper(".js-gallery-slides", {
//       slidesPerView: 1,
//       grid: {
//         rows: 1,
//         fill: "row"
//       },
//       spaceBetween: 20,
//       pagination: {
//         el: ".js-gallery-pagination",
//         type: "fraction"
//       },
//       navigation: {
//         nextEl: ".js-gallery-next",
//         prevEl: ".js-gallery-prev",
//         disabledClass: "nav-btn--disabled"
//       },
//       breakpoints: {
//         421: {
//           slidesPerView: 2,
//           slidesPerGroup: 2,
//           spaceBetween: 30
//         },
//         1281: {
//           slidesPerView: 3,
//           slidesPerGroup: 3,
//           spaceBetween: 50
//         }
//       },
//       a11y: false,
//       keyboard: {
//         enabled: true,
//         onlyInViewport: true
//       }, // можно управлять с клавиатуры стрелками влево/вправо

//       // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
//       watchSlidesProgress: true,
//       watchSlidesVisibility: true,
//       slideVisibleClass: "slide-visible",
//       on: {
//         init: function () {
//           this.slides.forEach((slide) => {
//             if (!slide.classList.contains("slide-visible")) {
//               slide.tabIndex = "-1";
//             } else {
//               slide.tabIndex = "";
//             }
//           });
//         },
//         slideChange: function () {
//           this.slides.forEach((slide) => {
//             if (!slide.classList.contains("slide-visible")) {
//               slide.tabIndex = "-1";
//             } else {
//               slide.tabIndex = "";
//             }
//           });
//         }
//       }
//     });
//   });
// })();
