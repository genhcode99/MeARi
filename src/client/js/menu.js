// # toggle vertical menu
const toggleBtn = document.querySelector('.fa-bars')
const body__container= document.querySelector('.body__container')
const cover = document.querySelector('.cover')
const VMenu = document.querySelector('.vertical-menu')
const Off = VMenu.classList.contains('off')



const handleMenu = () => {
  VMenu.classList.toggle('off')
  cover.classList.toggle('shadow')
  
}

toggleBtn.addEventListener('click', handleMenu)
cover.addEventListener('click',handleMenu)





