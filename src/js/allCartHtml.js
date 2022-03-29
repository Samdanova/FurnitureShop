const cart = require('./cart');
const dom = require("./createElementDom");
const drawCount = require('./cartCount');


//TODO заменить тестовые классы .card-product__description, ... на новые после верстки
// сверстать новую карточку

const AddBtn = (element, cartObj) => {
    try {
        cart.AddToCart(cartObj.Id);
    } catch (err) {
        // alert(err.message);
        element.closest(".card-product").querySelector(".card_valid").innerText = err.message;
    }

    element.closest(".card-product").querySelector(".card-product__description").value = cartObj.Count;
    drawCount.DrawCartCount();
}

const DeleteBtn = (element, cartObj) => {
    cart.DeleteProduct(cartObj.Id);
    element.closest(".card-product").querySelector(".card-product__description").value = cartObj.Count;
    element.closest(".card-product").querySelector(".card_valid").v = "";
    drawCount.DrawCartCount();
}

const DeleteFromCart = (element, cartObj) => {

    cart.DeleteFromCart(cartObj.Id);
    element.closest(".card-product").remove();
    drawCount.DrawCartCount();
}


const GenerateCard = (cartProduct) => {

    // const cartObj = new cart.CartProduct;
    // cartObj.ApplyData(cartProduct);
    const product = cartProduct.GetProduct();
    // console.log(product);
    const div = dom.createElemDOM("div", "card-product");
    div.id = product.Id;
    div.appendChild(dom.createElemDOM("p", "", product.Name));
    const count = dom.createElemDOM("input", "card-product__description", cartProduct.Count);
    count.value = cartProduct.Count;
    div.appendChild(count);
    div.appendChild(dom.createElemDOM("p", "card_valid"));
    const addButt = div.appendChild(dom.createElemDOM("input"));
    addButt.type = "button";
    addButt.value = "+";
    addButt.addEventListener("click", (e) => AddBtn(e.target, cartProduct));
    const delButt = div.appendChild(dom.createElemDOM("input", "", "-"));
    delButt.type = "button";
    delButt.value = "-";
    delButt.addEventListener("click", (e) => DeleteBtn(e.target, cartProduct));

    const delProduct = div.appendChild(dom.createElemDOM("input", "", "Удалить"));
    delProduct.addEventListener("click", (e) => DeleteFromCart(e.target, cartProduct));


    return div;

}

document.querySelector(".cart__total-cost").innerHTML = cart.GetSumCount();
document.addEventListener("DOMContentLoaded", () => {

    [...cart.listCart].forEach(cartProduct => document.querySelector('.container_products').appendChild(GenerateCard(cartProduct)));
    const tt = document.querySelector("#idCart").appendChild(dom.createElemDOM("input"));
    tt.type = "text";
    document.addEventListener("onchange", () => {
        console.log("fdsf");
        document.querySelector(".cart__total-cost").innerHTML = cart.GetSumCount();
        // document.querySelector(".cart__total-cost").innerText = cart.GetSumCount();
    });



})