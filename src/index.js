import './styles/index.scss';
const test = require('./js/about.js');
// import {
//     sayHi,
//     sayBye
// } from './js/about.js';

// console.log('hello webpack!');
// console.log('hello webpack2!');

// sayHi('John'); // Hello, John!
// sayBye('John'); // Bye, John!
//2 вариант подключения
// test.sayHi('John'); // Hello, John!
// test.sayBye('John'); // Bye, John!


let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i]
            .className
            .replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


document.querySelector('.prev').addEventListener('click',plusSlides(-1));
document.querySelector('.next').addEventListener('click',plusSlides(1));

document.querySelector('.dot1').addEventListener('click',currentSlide(1));
document.querySelector('.dot2').addEventListener('click',currentSlide(2));
document.querySelector('.dot3').addEventListener('click',currentSlide(3));