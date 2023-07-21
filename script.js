let navbar = document.querySelector('.header .navbar');


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
};

let contactInfo = document.querySelector('.contact-info');
document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
}
document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    autoplay:{
        delay:2500,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".myFwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


  