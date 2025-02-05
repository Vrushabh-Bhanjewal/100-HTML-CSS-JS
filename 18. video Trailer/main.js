
let play=document.querySelector('.play-btn')
let videoCont=document.querySelector('.video-trailer')
let close=document.querySelector('.close-btn')

console.log(play,videoCont,close)
play.addEventListener('click',(e)=>{
    videoCont.classList.remove("active")
})
close.addEventListener('click',(e)=>{
    videoCont.classList.add("active")
})