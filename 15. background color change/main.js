
let btn=document.querySelector('#btn')
let colorText=document.querySelector('.color')

function random_color(){
    let hex='0123456789abcdef'
    let s="#"
    for(let i=0;i<6;i++){
        let h=hex[ Math.floor(Math.random()*16)]
        s+=h
    }
    console.log(s)
    return s
}
random_color()
btn.addEventListener('click',(e)=>{
    color=random_color()
    colorText.innerText=color
    document.body.style.backgroundColor=color
})