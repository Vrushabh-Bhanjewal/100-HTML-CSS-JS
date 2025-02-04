
let cursor=document.querySelector('.cursor')

document.addEventListener('mousemove',(e)=>{
    console.log(e)
    mouseCursor(e.pageX,e.pageY)
})
function mouseCursor(x,y){
    cursor.style.left=-8+x+"px";
    cursor.style.top=-15+y+'px';
}