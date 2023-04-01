const userEmail = document.getElementById('userEmail');
const desktopMenu = document.getElementById('desktopMenu')

userEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive')
}