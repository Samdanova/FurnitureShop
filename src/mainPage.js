const addCards = require("./js/allProductsHtml.js");
addCards.GenerateCards();
require('./js/cart');
const slider = require("./js/slider.js");
slider.SliderHeaderBlock();
slider.SliderBeautifulBlock();
const search=require("./js/search.js");
search.Search();