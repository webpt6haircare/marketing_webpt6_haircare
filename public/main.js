let hamburger = document.querySelector('.hamburger')
let nav =  document.querySelectorAll('.navigation nav')
let bannerBox= document.querySelector('.banner-box')
let banner = document.querySelector('.banner')
let loginBtn = document.querySelector('.btn-login')
let bgModal = document.querySelector('.bg-modal')
let bgClose = document.querySelector('.close')
let regModal = document.querySelector('.reg-modal')
let regClose = document.querySelector('.closeReg')
let regBtn = document.querySelector('.btn-reg')
 let red = true;

hamburger.addEventListener('click', ()=>{
    nav.forEach((x)=>{
   if( red=== true){ x.style.display='flex' ; red=false} else{ x.style.display='none' ; red=true}
       
    })
})


banner.addEventListener('mouseover',()=>{
     bannerBox.style.left='0'
     bannerBox.style.opacity='.8'
})


loginBtn.addEventListener('click',()=>{
  
    if( red=== true){ bgModal.style.display='flex' ; red=false} else{ bgModal.style.display='none' ; red=true}
})
   
bgClose.addEventListener('click' , ()=>{
    if( red=== true){ bgModal.style.display='flex' ; red=false} else{ bgModal.style.display='none' ; red=true}
})
   

regBtn.addEventListener('click',()=>{
  
    if( red=== true){ regModal.style.display='flex' ; red=false} else{ regModal.style.display='none' ; red=true}
})

regClose.addEventListener('click' , ()=>{
    if( red=== true){ regModal.style.display='flex' ; red=false} else{ regModal.style.display='none' ; red=true}
})
   

