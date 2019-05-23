

let loginBtn = document.querySelector('.btn-login')
let bgModal = document.querySelector('.bg-modal')
let bgClose = document.querySelector('.close')
let regModal = document.querySelector('.reg-modal')
let regClose = document.querySelector('.closeReg')
let regBtn = document.querySelector('.btn-reg')











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
   