let hamburger = document.querySelector('.hamburger')
let nav =  document.querySelectorAll('.navigation nav')
let bannerBox= document.querySelector('.banner-box')
let banner = document.querySelector('.banner')
let a =document.querySelector('a')
 let red = true;






 
hamburger.addEventListener('click', ()=>{
    let Nav = Array.from(nav)
    Nav.map((x)=>{
   if( red=== true){ x.style.display='flex' ; red=false} else{ x.style.display='none' ; red=true}
       
    })
})


banner.addEventListener('mouseover',()=>{
     bannerBox.style.left='0'
     bannerBox.style.opacity='.8'
})








    