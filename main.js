window.addEventListener('scroll' , ()=>{
  document.querySelector('nav').classList.toggle('window' , window.scrollY > 0)
})




var swiper = new Swiper('.header', {
  speed: 300,
autoplay: {
    delay: 4000,
    disableOnInteraction:false,
    pauseOnMouseEnter:true,
  },
  
  pagination: {
    el: '.first-pag',
    clickable:true,
  },
});


var swiper = new Swiper('.first-courses', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
 slidesPerView: 1,
 spaceBetween:7,
 
   pagination: {
    el: '.second-pag',
        clickable:true,

   }, 
 
breakpoints:{
    '1024': {
      slidesPerView: 3,
      spaceBetween: 8
    },
    
  '600':{
    slidesPerView: 2,
      spaceBetween: 8
  }
}
})



var swiper = new Swiper('.first-courses1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
 slidesPerView: 1,
 spaceBetween:7,
 
   
   pagination: {
      el: '.third-pag',
      clickable:true,

 },
 
breakpoints:{
    '1024': {
      slidesPerView: 3,
      spaceBetween: 6,
    },
    
  '600':{
    slidesPerView: 2,
      spaceBetween: 8,
  }
}
})




var swiper = new Swiper('.student', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
 slidesPerView: 1,
 spaceBetween:7,
 
 
   pagination: {
       el: '.fourth-pag',
       clickable:true,

   },
 
breakpoints:{
    '1024': {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    
  '600':{
    slidesPerView: 2,
      spaceBetween: 8,
  }
}
})



/*  TOGGLES */

var menu = document.querySelector('#menu')
var closeBtn = document.querySelector('#close-btn')
var openBtn = document.querySelector('#open-btn')
var close = document.querySelectorAll('#close')


openBtn.addEventListener('click' ,()=>{
  menu.style.display ='flex'
  openBtn.style.display='none'
  closeBtn.style.display='inline-block'
} )

closeBtn.addEventListener('click' , ()=>{
    menu.style.display ='none'
  openBtn.style.display='inline-block'
  closeBtn.style.display='none'

})

/*
window.addEventListener('click' , ()=>{
menu.style.display = 'none'
      openBtn.style.display = 'inline-block'
      closeBtn.style.display = 'none'
})
*/


const mediaQuery = window.matchMedia('(max-width: 1024px)')

if (mediaQuery.matches) {

  close.forEach(closing=>{
  closing.addEventListener('click' , ()=>{
  menu.style.display ='none'
  closeBtn.style.display='none'
  openBtn.style.display='inline-block'

  })
})

}
/* LOAD MORE */

const loadMore = document.querySelector('.less-view #load-more')
const showLess = document.querySelector('.less-view #show-less')

loadMore.addEventListener('click' , ()=>{
  let content = document.querySelectorAll('#hide')
content.forEach(item=>{
  item.style.display='block'
})
loadMore.style.display='none'
showLess.style.display='grid'
  
})


showLess.addEventListener('click' , ()=>{
  let content = document.querySelectorAll('#hide')
content.forEach(item=>{
  item.style.display='none'
})
loadMore.style.display='grid'
showLess.style.display='none'
  
})





// -----------ACCORDION ---------------
