// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle('change')
});
// End of Navbar


//3D Carousel//

    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '7',
      coverflowEffect: {
        rotate: 20,
        stretch: 100,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
        pagination: {
        el: ".swiper-pagination",
      },
//       loop: true,
//       autoplay: {
//         delay: 900,
//         disableOnInteraction: false,
//       },
    });

//End of Carousel//
   

