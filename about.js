let stars = document.getElementById('stars');
let stars2 = document.getElementById('stars2');
let moon = document.getElementById('moon');
let header = document.getElementById('header');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.bottom = value * 0.05 + '%';
    stars2.style.bottom = value * 0.025 + '%';
    moon.style.bottom = value * -0.5 + 'px';

    header.style.top = value * 0.5 + 'px'; 
})


const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
} 