
let indicator=document.querySelector('.progress')
window.addEventListener('scroll',(e)=>{
    let scrollHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // if (scrollHeight === 0) return;
    let scrollTop=window.scrollY;
    let scrolled=(scrollTop/document.documentElement.scrollHeight)*100
    console.log( window.scrollY,scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight)
    indicator.style.width=`${scrolled}%`   
})



