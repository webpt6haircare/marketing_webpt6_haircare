let hamburger = document.querySelector('.hamburger')
let nav =  document.querySelectorAll('.navigation nav')
 let red = true;

hamburger.addEventListener('click', ()=>{
    nav.forEach((x)=>{
   if( red=== true){ x.style.display='flex' ; red=false} else{ x.style.display='none' ; red=true}
       
    })
})