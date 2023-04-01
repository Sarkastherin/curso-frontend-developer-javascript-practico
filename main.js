const userEmail = document.getElementById('userEmail');
const desktopMenu = document.getElementById('desktopMenu');
const mobileMenu = document.getElementById('mobileMenu');
const burgerMenuIcon = document.getElementById('burgerMenuIcon');
const shoppingCarIcon = document.getElementById('shoppingCarIcon');
const asideShoppingCar = document.getElementById('asideShoppingCar')

userEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
  asideShoppingCar.classList.add('inactive')
  desktopMenu.classList.toggle('inactive')
}
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
  asideShoppingCar.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
}

shoppingCarIcon.addEventListener('click', toggleAsideShoppingCar);
function toggleAsideShoppingCar() {
  mobileMenu.classList.add('inactive')
  desktopMenu.classList.add('inactive')
  asideShoppingCar.classList.toggle('inactive')
}

const productList = new Array();
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Notebook',
  price: 420,
  img: 'https://img.freepik.com/foto-gratis/portatil-pantalla-negra-blanco-sobre-mesa-blanca_53876-97915.jpg?w=740&t=st=1680365653~exp=1680366253~hmac=ceeca9c0180a8a206016c87957cc8f6c1a8cb73fd193a3642710be4001a2eb35'
})
productList.push({
  name: 'T-Shirt',
  price: 25,
  img: 'https://img.freepik.com/foto-gratis/camiseta-minima-anuncio-ropa_53876-104323.jpg?w=740&t=st=1680365750~exp=1680366350~hmac=8dd6ca7eadd2ad87e83aa9d88129d65e745f0dc6bf4457188cbdc2471ee67ff2,'
})
function renderProduct(arr){
  for (product of arr) {
    document.querySelector('.cards-container').innerHTML += 
    `<div class="product-card">
        <img src="${product.img}" alt="">
        <div class="product-info">
          <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>`
  }
}
renderProduct(productList)
