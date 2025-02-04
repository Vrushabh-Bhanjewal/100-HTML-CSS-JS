let typedTextSpan=document.querySelector(".text-change")
let cursor=document.querySelector('.cursor')

let delayd=200
let wordDelay=2000
let words=['Awesome','Cool','Complicated','Weird','Tool']
let index=0
let charIndex=0

document.addEventListener('DOMContentLoaded',()=>{
    if(words.length){
        setTimeout(typed,wordDelay)
    }
})
function typed(){
    if(charIndex < words[index].length){
        typedTextSpan.innerText+=words[index].charAt(charIndex)
        charIndex++
        setTimeout(typed,delayd)
    }else{
        setTimeout(erased,wordDelay)
    }
}
function erased(){
    if(charIndex > 0){
        typedTextSpan.innerText=words[index].slice(0,charIndex-1)
        charIndex--
        setTimeout(erased,delayd)
    }else{
        index++
        if(index==words.length){
            index=0
        }
        setTimeout(typed,wordDelay)
    }
}
