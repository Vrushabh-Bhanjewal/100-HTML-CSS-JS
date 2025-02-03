
let red=document.querySelector('.red-heart')
let gray=document.querySelector('.gray-heart')

gray.addEventListener('click',(e)=>{
    red.classList.remove('pop')  
    red.classList.add('active')
    gray.classList.remove('active')
    // setTimeout(() => {
    gray.classList.add('pop')
    // }, 1000);
})

red.addEventListener('click',(e)=>{
    gray.classList.remove('pop')
    gray.classList.add('active')
    red.classList.remove('active')
    // setTimeout(()=>{
    red.classList.add('pop')    
    // },1000)
})
