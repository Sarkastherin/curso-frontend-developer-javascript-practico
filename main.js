const userEmail = document.getElementById('userEmail');
const desktopMenu = document.getElementById('desktopMenu');
const mobileMenu = document.getElementById('mobileMenu');
const burgerMenuIcon = document.getElementById('burgerMenuIcon');
const shoppingCarIcon = document.getElementById('shoppingCarIcon');
const asideShoppingCar = document.getElementById('asideShoppingCar')

userEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
  let asideShoppingCarOpen = asideShoppingCar.classList.contains('inactive');
  if (!asideShoppingCarOpen) { asideShoppingCar.classList.add('inactive') }
  desktopMenu.classList.toggle('inactive')
}
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
  let asideShoppingCarOpen = asideShoppingCar.classList.contains('inactive');
  if (!asideShoppingCarOpen) { asideShoppingCar.classList.add('inactive') }
  mobileMenu.classList.toggle('inactive')
}

shoppingCarIcon.addEventListener('click', toggleAsideShoppingCar);
function toggleAsideShoppingCar() {
  let mobileMenuOpen = mobileMenu.classList.contains('inactive');
  if (!mobileMenuOpen) { mobileMenu.classList.add('inactive') }
  asideShoppingCar.classList.toggle('inactive')
}