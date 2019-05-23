

let loginBtn = document.querySelector('.btn-login')
let bgModal = document.querySelector('.bg-modal')
let bgClose = document.querySelector('.close')
let regModal = document.querySelector('.reg-modal')
let regClose = document.querySelector('.closeReg')
let regBtn = document.querySelector('.btn-reg')



 let blue = true;











loginBtn.addEventListener('click',()=>{
  
    if( blue=== true){ bgModal.style.display='flex' ; blue=false} else{ bgModal.style.display='none' ; blue=true}
})
   
bgClose.addEventListener('click' , ()=>{
    if( blue=== true){ bgModal.style.display='flex' ; blue=false} else{ bgModal.style.display='none' ; blue=true}
})
   

regBtn.addEventListener('click',()=>{
  
    if( blue=== true){ regModal.style.display='flex' ; blue=false} else{ regModal.style.display='none' ; blue=true}
})

regClose.addEventListener('click' , ()=>{
    if( blue=== true){ regModal.style.display='flex' ; blue=false} else{ regModal.style.display='none' ; blue=true}
})
   
