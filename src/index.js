import './styles/index.scss';

// const lists = require("./js/products.js");
const addCards = require("./js/allProductsHtml.js");
addCards.GenerateCards();

const cart = require("./js/cart");


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
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i]
            .className
            .replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


document.querySelector('.prev').addEventListener('click', (e) => plusSlides(-1));
document.querySelector('.next').addEventListener('click', (e) => plusSlides(1));

document.querySelector('.dot1').addEventListener('click', (e) => currentSlide(1));
document.querySelector('.dot2').addEventListener('click', (e) => currentSlide(2));
document.querySelector('.dot3').addEventListener('click', (e) => currentSlide(3));


//слайдер 50+ beautiful room inspiration

// let i = 1;
//     for(let li of carousel.querySelectorAll('li')) {
//       li.style.position = 'relative';
//       li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//       i++;
//     }

/* конфигурация */
let width = 500; // ширина картинки
let count = 2; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

// carousel.querySelector('.prev').onclick = function() {
//   // сдвиг влево
//   position += width * count;
//   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//   position = Math.min(position, 0)
//   list.style.marginLeft = position + 'px';
// };

carousel.querySelector('.arrow').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

document.querySelector('.beautiful-dot1').addEventListener('click', (e) => currentSlide(1));
document.querySelector('.beautiful-dot2').addEventListener('click', (e) => currentSlide(2));
document.querySelector('.beautiful-dot3').addEventListener('click', (e) => currentSlide(3));