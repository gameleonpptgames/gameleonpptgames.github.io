// Navbar
// const menu = document.querySelector(".menu");
// const navbar = document.querySelector(".navbar");

// menu.addEventListener("click", () => {
//   navbar.classList.toggle("change");
//   menu.classList.toggle('change')
// });
// End of Navbar


//3D Carousel//

//     var swiper = new Swiper('.swiper-container', {
//       effect: 'coverflow',
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: 'auto',
//       coverflowEffect: {
//         rotate: 20,
//         stretch: 0,
//         depth: 200,
//         modifier: 1,
//         slideShadows: true,
//       },
//       loop: true,
//       autoplay: {
//         delay: 900,
//         disableOnInteraction: false,
//       },
//     });

  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

//End of Carousel//
   

