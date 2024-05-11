// write your JavaScript here
const btnMenuCheck = document.querySelector('#btn-menu-mobile')
const btnMenu = document.querySelector('.btn-menu-mobile')

btnMenu.addEventListener('click', function(){
  if(btnMenuCheck.checked){
    document.querySelector('.links-container-mobile').style.left = '-100%'
    document.querySelector('.navbar-mobile').style.backgroundColor = 'transparent'
    
  } else {
    document.querySelector('.links-container-mobile').style.left = '0'
    document.querySelector('.navbar-mobile').style.backgroundColor = '#1E5AFA'
  }
})