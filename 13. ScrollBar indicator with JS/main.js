
let indicator=document.querySelector('.progress')
window.addEventListener('scroll',(e)=>{
    let scrollHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // if (scrollHeight === 0) return;
    let scrollTop=document.body.scrollTop;
    let scrolled=(scrollTop/document.documentElement.scrollHeight)*100
    // console.log( document.body.scrollTop,scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight)
    indicator.style.width=`${scrolled}%`   
})



