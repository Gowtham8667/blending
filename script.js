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