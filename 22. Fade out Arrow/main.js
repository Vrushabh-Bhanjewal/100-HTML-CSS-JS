
let arr=document.querySelector('.arrow');
window.addEventListener('scroll',(e)=>{
    console.log(window.scrollY)
    if(window.scrollY <=5){
        arr.classList.remove('fade-in')
    }else{
        arr.classList.add('fade-in')    
    }
})