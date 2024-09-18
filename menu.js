let options=document.querySelectorAll('#opt');
let deviceWidth = window.innerWidth
let deviceHeight = window.innerHeight
let navb = document.getElementsByTagName('nav')
let svg = document.getElementsByTagName('svg')
function toggle(){
if(deviceWidth <= 700){
navb[0].classList.add('nav-hide')
navb[0].classList.remove('nav-show')
navb[0].classList.add('drop-nav')
}else if(deviceWidth > 700){
    navb[0].classList.remove('nav-hide')
    navb[0].classList.add('nav-show')
    navb[0].classList.remove('drop-nav')
}
}
function debug(){
    // options.classList.add('deCol')
console.log(options.length)
    console.log(deviceWidth)
    console.log(deviceHeight)
    console.log(navb[0])
}
function redebug(){
// options.classList.remove('deCol')
// options.classList.add('reDeCol')
// console.log(options)
}
// const menuSide = document.querySelector('.bordery')

// menuSide.addEventListener('click', () => {
// menuSide.classList.toggle('active')
// });
