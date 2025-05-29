
let products = document.getElementsByTagName("button");
let shoppingCart = [];

function updateCart() {
  document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
}

function listProductsInCart() {
  let cartProducts = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    cartProducts =
      cartProducts +
      '<li><span class="product-title">Titel: </span>' +
      shoppingCart[i] +
      "</li>";
  }
  console.log(cartProducts);
  document.querySelector("#products").innerHTML = cartProducts;
}

document.querySelector("#open-cart").addEventListener("click", () => {
  document.querySelector("#cart").classList.toggle("hide");
  listProductsInCart();
});

for (let i = 0; i < products.length; i++) {
  console.log("Button elem:", products[i]);
  products[i].addEventListener("click", (event) => {
    console.log(event.target);
    // event here is the HTML element that was clicked on
    let product = event.target.parentNode.getAttribute("data-product");
    console.log(product);
    shoppingCart.push(product);
    console.log(shoppingCart);
    updateCart();
    listProductsInCart();
  });
}