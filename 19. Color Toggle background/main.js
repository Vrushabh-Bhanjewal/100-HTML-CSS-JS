
let s=document.querySelector('#switch')
let label=document.querySelector('#toggle')

s.addEventListener('click',(e)=>{
    console.log(s.checked)
    if(s.checked){
        document.body.style.backgroundColor='black'
    }else{
        document.body.style.backgroundColor='white'

    }
    
})