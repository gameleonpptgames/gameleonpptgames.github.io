let nav = document.querySelector('nav');


window.addEventListener('scroll', function(){
    if(window.pageYOffset >100){
        nav.classList.add('bg-warning','shadow');
    }else{
        nav.classList.remove('bg-warning', 'shadow');
    }
});



