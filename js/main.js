const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartConteiner = document.querySelector('#shoppingCartConteiner');
const cardContainer = document.querySelector('.cards-container');
const detallesProducto = document.querySelector('#productDetail');
const closeProductDetailIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
closeProductDetailIcon.addEventListener('click', closeProductDetail)

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Computadora',
  price: 1200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'TV',
  price: 450,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

for (product of productList) {
  const productCard = document.createElement('div'); //para crear el div
  productCard.classList.add('product-card'); // para darle la clase al div

  const productImg=document.createElement('img');
  productImg.setAttribute('src',product.image); //se le incluye un atributo al elemento img
  productImg.addEventListener('click', mostrarDetallesProducto);
  productCard.appendChild(productImg); //insertado en el padre correspondiente

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');
  productCard.appendChild(productInfo);

  const productInfoDiv = document.createElement('div');
  productInfo.appendChild(productInfoDiv);

  const productPrice = document.createElement('p');
  productPrice.innerText = '$ ' + product.price;
  productInfoDiv.appendChild(productPrice);

  const productName = document.createElement('p');
  productName.innerText = product.name;
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  productInfo.appendChild(productInfoFigure);

  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  productInfoFigure.appendChild(productImgCart);

  cardContainer.appendChild(productCard);
}

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive'); //classList accede a las clases del elemento.
  detallesProducto.classList.add('inactive');
}

function toggleMobileMenu() {
  if (shoppingCartConteiner.classList.contains('inactive') == true) {
    menuMobile.classList.toggle('inactive');
    detallesProducto.classList.add('inactive');
  } else {
    shoppingCartConteiner.classList.toggle('inactive');
    menuMobile.classList.toggle('inactive');
    detallesProducto.classList.add('inactive');
  }

}

function toggleCarritoAside() {
  if (menuMobile.classList.contains('inactive') == true) {
    shoppingCartConteiner.classList.toggle('inactive');
    detallesProducto.classList.add('inactive');
  } else {
    shoppingCartConteiner.classList.toggle('inactive');
    menuMobile.classList.toggle('inactive');
    detallesProducto.classList.add('inactive');
  }

}

function mostrarDetallesProducto() {
  detallesProducto.classList.toggle('inactive');
}

function closeProductDetail(){
  detallesProducto.classList.add('inactive')
}
